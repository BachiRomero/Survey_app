import { GET_SURVEY, GET_SURVEY_ID } from '../actions/index'

let initialState = {
    survey: [],
    surveyId: 0,
}


function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_SURVEY:
            return {
                ...state,
                survey: payload,
            };

        case GET_SURVEY_ID:
            return {
                ...state,
                surveyId: payload,
            }

        default:
            return {
                ...state
            }
    }
}

export default rootReducer;

