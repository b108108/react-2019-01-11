import {createSelector} from 'reselect';

export const filtersSelector = (store) => store.filters
export const articlesSelector = (store) => store.articles
export const commentsSelector = (store) => store.comments
export const idSelector = (_, ownProps) => ownProps.id
export const articleSelector = createSelector(articlesMapSelector, idSelector, (articles, id) => articles.get(id))

export const filteredArticlesSelector = createSelector(
    filtersSelector,
    articlesSelector,
    (filters, articles) => {
        const {selected, dateRange: {from, to}} = filters

        return articles.filter(article => {
            const publishedDate = Date.parse(article.date)
            return (
                    !selected.length ||
                    selected.find((selected) => selected.value === article.id)
                ) &&
                (
                    (!from || !to || (publishedDate > from && publishedDate < to))
                )
        })
    }
)

export const createCommentSelector = () => createSelector(
    commentsSelector,
    idSelector,
    (comments, id) => {
        return comments[id]
    }
)

export const createArticleSelector = () => createSelector(
    articlesSelector,
    idSelector,
    (articles, id) => {
        //console.log('articleSelector', id);
        return articles.filter(article => article.id === id)[0]
    }
)
