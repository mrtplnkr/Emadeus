import { put, call, takeLatest  } from 'redux-saga/effects'
import * as actions from '../actions'
import { localDataService } from '../location/selectors'

export function* loadLocations() {
  const api = new localDataService()
  const locs = yield call( api.getData, 'locations')
  yield put(actions.showLocations(locs))
}

export default function* root() {
  yield takeLatest(actions.LOAD_LOCATIONS, loadLocations);
}