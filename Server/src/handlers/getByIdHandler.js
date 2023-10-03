const getByIdController = require("../controllers/getByIdController");


const getByIdHandler = async (req, res) => {
    const { idSurvey } = req.params;
    try {
        const data = await getByIdController(idSurvey)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

module.exports = getByIdHandler