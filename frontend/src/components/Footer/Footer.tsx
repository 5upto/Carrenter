import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="sticky-bottom bg-dark text-light text-center">
      <footer className="py-5">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3">
          <div className="col-11 col-md-2 mb-3 py-4 bg-light bg-opacity-10 rounded">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  About us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Contact us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Support
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Careers
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Media Centre
                </a>
              </li>
            </ul>
          </div>

          <div className="col-11 col-md-2 mb-3  py-4 bg-light bg-opacity-10 rounded">
            <h5>Locations</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Bangalore
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Hyderabad
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Mumbai
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Pune
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Kolkata
                </a>
              </li>
            </ul>
          </div>

          <div className="col-11 col-md-2 mb-3  py-4 bg-light bg-opacity-10 rounded">
            <h5>Services</h5>
            <ul className="nav flex-column">
            <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Book a car
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Drive with us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Rental
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Outstation
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Coorporate
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center py-4 my-4 border-top">
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <FaLinkedin color="white" />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <FaInstagram color="white" />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <FaFacebook color="white" />
              </a>
            </li>
          </ul>
          <div>
            <a
              className="text-light"
              href="https://www.flaticon.com/free-icons/minivan"
              title="minivan icons"
            >
              
            </a>
            <p>&copy; 2024 Carrenter, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
