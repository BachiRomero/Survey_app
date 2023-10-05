import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { postSurvey } from "../../redux/actions";
import { Navigate } from "react-router-dom";

function Result() {
  const [redirectToResults, setRedirectToResults] = useState(false);

  const dispatch = useDispatch();

  const answers = useSelector((state) => state.answer);

  console.log("answer result componet:", answers);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postSurvey(answers));
    setRedirectToResults(true);
  };

  if (redirectToResults) {
    return <Navigate to="/exit" />;
  }

  return (
    <div>
      <h1>Respuestas</h1>
      <form onSubmit={handleSubmit}>
        {Object.entries(answers).map(([survey, answer]) => (
          <li key={survey}>
            <strong>{survey}:</strong> {answer.toString()}
          </li>
        ))}
        <div>
          <h2>
            Si sus respuestas son correctas por favor seleccionar finalizar.
            Caso contrario volver a la página de la encuesta para modificar.
          </h2>
        </div>
        <Link to={"/"}>
          <button>Volver</button>
        </Link>
        <button type="submit">Finalizar</button>
      </form>
    </div>
  );
}

export default Result;
