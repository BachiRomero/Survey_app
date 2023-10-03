const { Survey } = require('../db');

const createSurveyController = async (name, phone_number, start_date, preferred_language, how_found, newsletter_subscription) => {
    const newSurvey = await Survey.create({
        name,
        phone_number,
        start_date,
        preferred_language,
        how_found,
        newsletter_subscription
    });


    return newSurvey;
}

module.exports = createSurveyController;
