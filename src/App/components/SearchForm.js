import React, { useState } from "react";
import classes from "../app.module.css";

export default function SearchForm() {
  const [searchInfo, setSearchInfo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.search__form}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setSearchInfo(e.target.value)}
          type="text"
          placeholder="Найди свой город"
          required
        />
        <button>Найти</button>
      </form>
    </div>
  );
}
