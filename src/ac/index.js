import {
    INCREMENT,
    DELETE_ARTICLE,
    SELECT_ARTICLE,
    FILTER_BY_DATE,
    CHANGE_SELECTION,
    CHANGE_DATE_RANGE,
    RESET_DATE_RANGE,
    ADD_COMMENT,
} from '../constants';

import {push, replace} from 'connected-react-router';

export const increment = () => ({
    type: INCREMENT
})

export const deleteArticle = (id) => ({
    type: DELETE_ARTICLE,
    payload: {id}
})

export const selectArticle = (articleIds) => ({
    type: SELECT_ARTICLE,
    payload: {ids: articleIds}
})

export const changeDateRange = (range) => ({
    type: FILTER_BY_DATE,
    payload: {dateRange: range}
})

export const changeSelection = (selected) => ({
    type: CHANGE_SELECTION,
    payload: {selected}
})

export const resetDateRange = () => ({
    type: RESET_DATE_RANGE
})

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: { comment, articleId },
        generateId: true
    }
}