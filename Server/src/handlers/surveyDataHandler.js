const surveyDataController = require("../controllers/surveydataController");


const surveyDataHandler = (req, res) => {
    try {

        const data = surveyDataController()

        res.status(200).json(data)

    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = surveyDataHandler;