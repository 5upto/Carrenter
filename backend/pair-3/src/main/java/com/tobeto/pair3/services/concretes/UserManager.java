package com.tobeto.pair3.services.concretes;

import com.tobeto.pair3.core.exception.BusinessException;
import com.tobeto.pair3.core.exception.NotUniqueEmailException;
import com.tobeto.pair3.core.messages.Messages;
import com.tobeto.pair3.core.utils.mapper.ModelMapperService;
import com.tobeto.pair3.entities.Role;
import com.tobeto.pair3.entities.User;
import com.tobeto.pair3.repositories.UserRepository;
import com.tobeto.pair3.services.abstracts.UserService;
import com.tobeto.pair3.services.dtos.requests.CreateUserRequest;
import com.tobeto.pair3.services.dtos.requests.UpdateUserRequest;
import com.tobeto.pair3.services.dtos.responses.GetAllUsersResponse;
import com.tobeto.pair3.services.dtos.responses.GetUserResponse;
import lombok.AllArgsConstructor;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class UserManager implements UserService {
    private final UserRepository userRepository;
    private final ModelMapperService mapperService;
    private PasswordEncoder passwordEncoder;
    private FileService fileService;


    @Override
    public void add(CreateUserRequest createUserRequest) {

        checkUserEmailExist(createUserRequest.getEmail());
        User user = mapperService.forRequest().map(createUserRequest, User.class);
        user.setPassword(passwordEncoder.encode(createUserRequest.getPassword()));
        user.setRole(Role.USER);
        if (createUserRequest.getImage() != null) {
            String fileName = fileService.saveBase64StringAsFile(createUserRequest.getImage(), "user");
            user.setImage(fileName);
        }

        User user2 =  userRepository.save(user);
    }

    @Override
    public void update(UpdateUserRequest updateUserRequest) {
        User user = this.getOriginalUserById(updateUserRequest.getId());
        ifRequestUserEmailNotNullAndUniqueUpdateEmail(updateUserRequest, user);
        updateUserOnPasswordStatus(updateUserRequest, user);

        if (updateUserRequest.getImage() != null ) {
            String fileName = fileService.saveBase64StringAsFile(updateUserRequest.getImage(), "user");
            fileService.deleteCarImage(user.getImage(), "user");
            user.setImage(fileName);
        }
        userRepository.save(user);

    }

    @Override
    public void delete(Integer id) {
        User user = this.getOriginalUserById(id);
        userRepository.delete(user);

    }

    @Override
    public List<GetAllUsersResponse> getAll() {
        List<User> userList = userRepository.findAll();
        return userList
                .stream()
                .map(user -> mapperService.forResponse().map(user, GetAllUsersResponse.class))
                .toList();
    }

    @Override
    public Page<GetAllUsersResponse> getAllViaPage(Pageable pageable) {
        return userRepository.findAll(pageable).map(user -> mapperService.forResponse().map(user, GetAllUsersResponse.class));
    }

    @Override
    public Page<GetAllUsersResponse> searchKeyAndGetUser(String searchKey, Pageable pageable) {
        return userRepository.searchKeyAndGetUser(searchKey,pageable);
    }

    @Override
    public GetUserResponse getById(int id) {
        User user = this.getOriginalUserById(id);
        return mapperService.forResponse().map(user, GetUserResponse.class);
    }

    @Override
    public boolean existsById(int userId) {
        return userRepository.existsById(userId);
    }

    @Override
    public User getOriginalUserById(int userId) {
        return userRepository.findById(userId).orElseThrow(() ->
                new BusinessException((Messages.getMessageForLocale("rentACar.exception.rental.user.notfound", LocaleContextHolder.getLocale()))));
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }


    private void checkUserEmailExist(String email) {
        if (userRepository.existsByEmail(email)) {
            throw new NotUniqueEmailException();
        }
    }


    private void updateUserOnPasswordStatus(UpdateUserRequest updateUserRequest, User user) {
        user.setName(updateUserRequest.getName());
        user.setSurname(updateUserRequest.getSurname());
        user.setBirthDate(updateUserRequest.getBirthDate());
        user.setEmail(updateUserRequest.getEmail());

        if (updateUserRequest.getPassword() != null) {
            user.setPassword(passwordEncoder.encode(updateUserRequest.getPassword()));
        }
    }

    private void ifRequestUserEmailNotNullAndUniqueUpdateEmail(UpdateUserRequest updateUserRequest, User user) {

        if (userRepository.existsByEmail(updateUserRequest.getEmail()) && updateUserRequest.getEmail() != null) {
            User updatedUser = userRepository.findByEmail(updateUserRequest.getEmail());
            if (user.getId() != updatedUser.getId()) {
                throw new NotUniqueEmailException();
            }
        }
    }


}
