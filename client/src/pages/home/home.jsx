import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSurvey, prePostSurvey } from "../../redux/actions";
import { Navigate } from "react-router-dom";
import "./home.modules.css";

function Home() {
  const [answers, setAnswers] = useState({});
  const [redirectToResults, setRedirectToResults] = useState(false);

  const survey = useSelector((state) => state.survey);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSurvey());
  }, [dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(prePostSurvey(answers));
    setRedirectToResults(true);
  };

  console.log("answer home component:", answers);

  if (redirectToResults) {
    return <Navigate to="/result" />;
  }

  return (
    <div>
      <header className="header">
        <img
          src="https://assets.soyhenry.com/LOGO-REDES-01_og.jpg"
          alt=""
          className="logo"
        />
        <h1>Encuesta Henry</h1>
      </header>
      <div className="form">
        <form onSubmit={handleSubmit}>
          {survey.map((survey) => (
            <div key={survey.name}>
              <label htmlFor="">{survey.label}: </label>
              {survey.type === "text" && (
                <input
                  type={survey.type}
                  name={survey.label}
                  value={answers[survey.label] || ""}
                  onChange={handleChange}
                  required
                />
              )}
              {survey.type === "radio" && (
                <div>
                  {survey.options.map((option) => (
                    <label key={option.value}>
                      <input
                        type={survey.type}
                        name={survey.label}
                        value={option.label || ""}
                        checked={answers[survey.label] === option.label}
                        onChange={handleChange}
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              )}
              {survey.type === "tel" && (
                <input
                  type={survey.type}
                  name={survey.label}
                  value={answers[survey.label] || ""}
                  onChange={handleChange}
                  required
                />
              )}
              {survey.type === "date" && (
                <input
                  type={survey.type}
                  name={survey.label}
                  value={answers[survey.label] || ""}
                  onChange={handleChange}
                  required
                />
              )}
              {survey.type === "select" && (
                <select
                  id={survey.name}
                  name={survey.label}
                  value={answers[survey.label] || ""}
                  onChange={handleChange}
                  required={survey.required}
                >
                  <option value="">Seleccione una opción</option>
                  {survey.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
              {survey.type === "checkbox" && (
                <label>
                  <input
                    type="checkbox"
                    name={survey.label}
                    checked={answers[survey.label] || ""}
                    onChange={handleChange}
                  />
                </label>
              )}
            </div>
          ))}
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
