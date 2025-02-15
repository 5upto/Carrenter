import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type Props = {};

const LanguageSelector = (props: Props) => {
  const { i18n } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(
    localStorage.getItem("lang") || "en"
  );

  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
    onSelectLanguage(event.target.value);
  };

  const onSelectLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("lang", language);
  };

  return (
    <div className="ms-2">
      <select
        id="exampleSelect"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="" disabled>
          Please Select
        </option>
        <option value="en">EN</option>
        <option value="hi">HI</option>
        <option value="bn">BN</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
