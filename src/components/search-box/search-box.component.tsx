import React from "react";
import "./search-box.styles.css";

interface ISearchBoxProps {
  placeholder: string;
  handleChange: (e: any) => void;
}

const SearchBox: React.FC<ISearchBoxProps> = ({
  placeholder,
  handleChange
}) => {
  return (
    <input
      type="search"
      className="search"
      placeholder={placeholder}
      onChange={handleChange}
    ></input>
  );
};

export default SearchBox;
