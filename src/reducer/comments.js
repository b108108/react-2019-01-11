import {
    ADD_COMMENT
} from '../constants'

import {listComments} from '../fixtures';
import { arrToMap } from './utils'
import {OrderedMap, Record, Map} from 'immutable'

const defaultComments = listComments.reduce((acc, comment) => {
    return {
        ...acc,
        [comment.id]: comment
    }
}, {})

export default (state = defaultComments, action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_COMMENT:
            return {
                ...comments,
                [payload.id]: { 
                    id: payload.id,
                    text: payload.text,
                    user: payload.user
                }
            }        
        default:
            return state
    }
}
