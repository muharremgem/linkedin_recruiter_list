import React, { useState } from "react";
import Input from "./Input";
import data from "../data";
import Card from "./Card";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Input searchTerm={setSearchTerm} />
      <div className="container grid grid-cols-3 m-auto rounded-md ">
        {data
          .filter((value) => {
            if (searchTerm == " ") {
              return value;
            } else if (
              value.Company.toLocaleUpperCase().includes(
                searchTerm.toLocaleUpperCase()
              )
            ) {
              return value;
            } else if (
              value.Country.toLocaleUpperCase().includes(
                searchTerm.toLocaleUpperCase()
              )
            ) {
              return value;
            } else if (
              value.FirstName.toLocaleUpperCase().includes(
                searchTerm.toLocaleUpperCase()
              )
            ) {
              return value;
            }
          })
          .map((value, idx) => (
            <div>
              <Card data={value} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
