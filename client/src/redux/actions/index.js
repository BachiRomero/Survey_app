import axios from 'axios'

export const GET_SURVEY = 'GET_SURVEY'
export const PRE_POST_SURVEY = 'PRE_POST_SURVEY'
export const POST_SURVEY = 'POST_SURVEY'

export function getSurvey() {
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/')
            return dispatch({ type: GET_SURVEY, payload: response.data })
        } catch (error) {
            alert(error.response.data.error)

        }
    }
}

export function prePostSurvey(answers) {
    return async function (dispatch) {
        console.log('answers pre post action:', answers);
        return dispatch({ type: PRE_POST_SURVEY, payload: answers })
    }
}

export function postSurvey(answers) {
    return async function (dispatch) {
        try {
            console.log('answers post action:', answers);
            const response = await axios.post('http://localhost:3001/', answers)
            return dispatch({ type: POST_SURVEY, payload: response.data })
        }
        catch (error) {
            alert(error.response.data.error)
        }
    }
}