const { Router } = require('express');
const surveyDataHandler = require('../handlers/surveyDataHandler');
const createSurveyHandler = require('../handlers/createSurveyHandler');
const getByIdHandler = require('../handlers/getByIdHandler');


const router = Router();

// GET JSON file
router.get('/', surveyDataHandler);


//POST New Survey
router.post('/', createSurveyHandler)


//GET survey response
router.get('/:idSurvey', getByIdHandler)



module.exports = router;