import { initialState } from './selectors'
import { RECEIVE_WEATHER } from './actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RECEIVE_WEATHER:
      return {
        ...state,
        forecast: payload,
      }

    default:
      return state
  }
}
