
import React, { useState, useRef, useEffect } from "react";
import styles from "./index.module.scss";

const Select: React.FC<{ options: { value: string; label: string }[] }> = ({
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");


  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (selectRef.current && !selectRef.current.contains(target)) {
        closeSelect();
      }
    };


    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const closeSelect = () => {
    setIsOpen(false);
  };

  const handleOptionClick = (option: { value: string; label: string }) => {
    setSelectedOption(option.label);
    closeSelect();
  };

  return (
    <div className={styles.customSelect} style={{ width: "200px" }}>
      <div
        className={`${styles.selectSelected} ${
          isOpen ? styles.selectArrowActive : ""
        }`}
        onClick={toggleSelect}
      >
        {selectedOption || options[0].label}
      </div>
      <div
        className={`${styles.selectItems} ${isOpen ? "" : styles.selectHide}`}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className={styles.selectItem}
            onClick={() => handleOptionClick(option)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
