import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postSurvey } from "../../redux/actions";

function Result() {
  const dispatch = useDispatch();

  const answers = useSelector((state) => state.answer);

  console.log("answer result componet:", answers);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postSurvey(answers));
  };

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
            Caso contrario vovler a la pagina de la encuesta para modificar.
          </h2>
          <Link to={"/"}>
            <button>Volver</button>
          </Link>
          <Link to={"/exit"}>
            <button type="submit">Finalizar</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Result;
