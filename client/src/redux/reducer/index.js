import { GET_SURVEY, POST_SURVEY } from '../actions/index'

let initialState = {
    survey: [],
    surveyId: 0,
    answer: {}
}


function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_SURVEY:
            return {
                ...state,
                survey: payload,
            };

        case POST_SURVEY:
            return {
                ...state,
                answer: payload,
            }

        default:
            return {
                ...state
            }
    }
}

export default rootReducer;

