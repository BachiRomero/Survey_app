import axios from 'axios'

export const GET_SURVEY = 'GET_SURVEY'
export const GET_SURVEY_ID = 'GET_SURVEY_ID'
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

export function getSurveyId(id) {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/${id}`)
        return dispatch({ type: GET_SURVEY_ID, payload: response.data })
    }
}

export function postSurvey(answers) {
    return async function (dispatch) {
        try {
            const response = await axios.post('http://localhost:3001/', answers)
            return dispatch({ type: POST_SURVEY, payload: response.data })
        }
        catch (error) {
            alert(error.response.data.error)
        }
    }
}