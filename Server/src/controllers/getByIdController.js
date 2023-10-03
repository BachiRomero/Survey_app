const { Survey } = require('../db')

const getByIdController = (idSurvey) => {
    return Survey.findByPk(idSurvey)
        .then(survey => {
            if (survey) {
                return survey
            } else {
                return null
            }
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = getByIdController