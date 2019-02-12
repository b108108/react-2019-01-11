import {
    INCREMENT,
    DELETE_ARTICLE,
    CHANGE_SELECTION,
    CHANGE_DATE_RANGE,
    RESET_DATE_RANGE,
    ADD_COMMENT,
    LOAD_ALL_ARTICLES,
    LOAD_ARTICLE,
    START,
    SUCCESS,
    FAIL,
    LOAD_ARTICLE_COMMENTS,
    LOAD_COMMENTS_PAGE,
} from '../constants';

import {push, replace} from 'connected-react-router';

export const increment = () => ({
    type: INCREMENT
})

export const deleteArticle = (id) => ({
    type: DELETE_ARTICLE,
    payload: {id}
})

export const changeSelection = (selected) => ({
    type: CHANGE_SELECTION,
    payload: {selected}
})

export const changeDateRange = (dateRange) => ({
    type: CHANGE_DATE_RANGE,
    payload: {dateRange}
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

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

export function loadArticleComments(articleId) {
    return {
        type: LOAD_ARTICLE_COMMENTS,
        payload: { articleId },
        callAPI: `/api/comment?article=${articleId}`
    }
}

export function loadArticle(id) {
    return (dispatch) => {
        dispatch({
            type: LOAD_ARTICLE + START,
            payload: {id}
        })
        fetch(`/api/article/${id}`)
            .then(res => {
                console.log(res);
                if (res.status >= 400) {
                    throw new Error(res.statusText)
                }
                return res.json()
            })
            .then(response => dispatch({
                type: LOAD_ARTICLE + SUCCESS,
                payload: {id},
                response
            }))
            .catch(error => {
                dispatch(replace('/error'))
                dispatch({
                    type: LOAD_ARTICLE + FAIL,
                    payload: {id},
                    error
                })
            })

    }
}

export function loadCommentsPage(pageSize, pageNumber) {
    return {
        type: LOAD_COMMENTS_PAGE,
        payload: { pageSize, pageNumber },
        callAPI: `/api/comment?limit=${pageSize}&offset=${pageSize * pageNumber}`
    }
}
