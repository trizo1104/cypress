import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./CheckForm.css";

export default function CheckForm() {
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "day") {
      setDay(value);
    } else if (name === "month") {
      setMonth(value);
    } else if (name === "year") {
      setYear(value);
    }
  };

  const isValidDate = (day, month, year) => {
    const date = new Date(year, month - 1, day);
    console.log(date);
    return date && date.getMonth() + 1 == month && date.getDate() == day;
  };

  const handleSubmit = () => {
    if (day === 0 || month === 0 || year === 0) {
      setMessage("Please fill in all fields");
      setColor("red");
      return;
    }
    if (day < 1 || day > 31) {
      setMessage("Input data for Day is out of range");
      setColor("red");
      return;
    }
    if (month < 1 || month > 12) {
      setMessage("Input data for Month is out of range");
      setColor("red");
      return;
    }
    if (year < 1000 || year > 3000) {
      setMessage("Input data for Year is out of range");
      setColor("red");
      return;
    }
    if (isValidDate(day, month, year)) {
      setMessage("dd/mm/yyyy is correct date time");
      setColor("green");
    } else {
      setMessage("dd/mm/yyyy is NOT correct date time");
      setColor("green");
    }
  };

  return (
    <div className="App">
      <h1>DateTime Checker</h1>
      <p>Check the current date and time</p>
      <form className="form">
        <div className="day">
          <label>Day</label>
          <input type="number" name="day" onChange={handleChange} required />
        </div>
        <div className="month">
          <label>Month</label>
          <input type="number" name="month" onChange={handleChange} required />
        </div>
        <div className="year">
          <label>Year</label>
          <input type="number" name="year" onChange={handleChange} required />
        </div>
        <div>
          <button type="reset" className="btn" name="clear">
            Clear
          </button>
        </div>
      </form>

      <button
        className="btn"
        name="check"
        onClick={() => {
          setOpenModal(true);
          handleSubmit();
        }}
      >
        Check
      </button>
      {openModal && (
        <Modal
          closeModal={() => {
            setOpenModal(false);
          }}
          message={message}
          color={color}
        />
      )}
    </div>
  );
}
