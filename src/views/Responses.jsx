import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDocument } from "../utils/firebase/firebase.utils";

export default function Responses() {
  const { user } = useParams();
  const [responses, setResponses] = useState("");

  useEffect(() => {
    setTimeout(() => {
      (async function get() {
        let result = await getDocument(user);
        setResponses(result);
      })();
    }, 3000);
  });

  // console.log ('Responses ', responses)
  return (
    <div>
      <h1>Thanks for your time</h1>
      <p>User:{responses.email}</p>
      <h3>Here are your answers:</h3>
      <p>Name: {responses.full_name} </p>
      <p>Birthdate: {responses.birth_date}</p>
      <p>Country: {responses.country_of_origin}</p>
    </div>
  );
}
