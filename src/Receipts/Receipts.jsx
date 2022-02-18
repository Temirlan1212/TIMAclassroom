import React from "react";
import { useState } from "react";

const Receipts = ({ meal, setMeal }) => {
  return (
    <center>
      <input
        type="radio"
        id="mealChoice1"
        name="meal"
        value="pancake"
        onClick={(e) => setMeal(e.target.value)}
      ></input>
      <label htmlFor="mealChoice1">Pancake</label>
      <input
        type="radio"
        id="mealChoice2"
        name="meal"
        value="fries"
        onClick={(e) => setMeal(e.target.value)}
      ></input>
      <label htmlFor="mealChoice1">Fries</label>
      <input
        type="radio"
        id="mealChoice3"
        name="meal"
        value="pizza"
        onClick={(e) => setMeal(e.target.value)}
      ></input>
      <label htmlFor="mealChoice1">Pizza</label>
    </center>
  );
};

export default Receipts;
