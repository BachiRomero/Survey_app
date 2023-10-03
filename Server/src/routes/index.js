const { Router } = require('express');
const surveyDataHandler = require('../handlers/surveyDataHandler');
const createSurveyHandler = require('../handlers/createSurveyHandler');

const router = Router();


router.get('/', surveyDataHandler);

router.post('/', createSurveyHandler)

module.exports = router;