const createSurveyController = require("../controllers/createSurveyController")


const createSurveyHandler = async (req, res) => {
    const { name, phone_number, start_date, preferred_language, how_found, newsletter_subscription } = req.body

    const survey = await createSurveyController(
        name,
        phone_number,
        start_date,
        preferred_language,
        how_found,
        newsletter_subscription)


    res.status(201).json(survey)
}

module.exports = createSurveyHandler