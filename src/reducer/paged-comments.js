import {LOAD_COMMENTS_PAGE, SUCCESS, FAIL, START} from '../constants'
import {OrderedMap, Record} from 'immutable'

const ReducerRecord = Record({
    pages: new OrderedMap({}),
    totalCount: 0,
    loaded: false,
    error: null
})

export default (state = new ReducerRecord(), action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case LOAD_COMMENTS_PAGE + SUCCESS:
            return state
              .set('totalCount', response.total)
              .set('loaded', true)
              .setIn(['pages', payload.pageNumber], response.records)

        case LOAD_COMMENTS_PAGE + FAIL:
            return state
              .set('loaded', false)
              .set('error', error)

        default:
            return state
    }
}