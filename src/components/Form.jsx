import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCollectionsAndDocuments } from "../utils/firebase/firebase.utils";
import fieldsData from "../data.json";
import "./form.css";
import Button from "./Button";

const defaultFormFields = {
  full_name: "",
  email: "",
  birth_date: "",
  country_of_origin: "",
  terms_and_conditions: "",
};

export default function Form() {
  const data = fieldsData;
  const navigate = useNavigate();
  const [input, setInput] = useState(defaultFormFields);

  // function handleInputChange(e) { //función que reduce las otras 3 handles en una sola.
  //   const { name, value, type, checked } = e.target;
  //   const newValue = type === "checkbox" ? checked : value;
  //   setDatosFormulario((prevState) => ({
  //     ...prevState,
  //     [name]: newValue,
  //   }));
  // }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSelect(e) {
    console.log('pais ', e.target.value)
    setInput({
      ...input,
      country_of_origin: e.target.value,
    });
  }

  function handleCheck(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        terms_and_conditions: true,
      });
    }
  }

  const resetFormFields = () => {
    setInput(defaultFormFields);
  };

  function handleSubmit(e) {
    e.preventDefault();
    addCollectionsAndDocuments(input.email, input);
    navigate(`/responses/${input.email}`);
    resetFormFields();
  }

  return (
    <div>
      {/* <form className="form" onSubmit={handleSubmit}> */}
      <form className="form" onSubmit={handleSubmit}>
        {data.items?.map((element) => (
          <div>
            {(() => {
              switch (element.type) {
                case "select":
                  return (
                    <div>
                      <label>{element.label}</label>
                      <select placeholder="Country" onChange={handleSelect}>
                      <option value="">--Please choose a country--</option>
                        {element.options?.map((option) => (
                          <option value={option.value} >
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                case "submit":
                  return (
                    <div>
                      <button name={element.label} type={element.type}>{element.label}</button>
                    </div>
                  );
                case "checkbox":
                  return (
                    <div>
                      <label>{element.label}</label>
                      <input
                        type={element.type}
                        required={element.required}
                        name={element.name}
                        onChange={handleCheck}
                      />
                    </div>
                  );
                default:
                  return (
                    <div>
                      <label>{element.label}</label>
                      <input
                        type={element.type}
                        required={element.required}
                        name={element.name}
                        onChange={handleChange}
                      />
                    </div>
                  );
              }
            })()}{" "}
            {/* se coloca el switch com ofunción autoinvocable para que se renderice.   */}
          </div>
        ))}
      </form>
    </div>
  );
}
