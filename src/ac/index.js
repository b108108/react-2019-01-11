import {
    INCREMENT, 
    DELETE_ARTICLE,
    SELECT_ARTICLE,
    FILTER_BY_DATE,
} from '../constants';

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