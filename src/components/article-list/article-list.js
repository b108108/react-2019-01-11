import React, {Component} from 'react'
import Article, {TypeArticle} from '../article'
import accordion from '../../decorators/accordion'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

export const TypeArticles = PropTypes.arrayOf(TypeArticle)

class ArticleList extends Component {

    render() {
        return <ul>{this.articles}</ul>;
    }

    componentDidMount() {
        this.props.fetchData && this.props.fetchData()
    }

    getArticlesStore() {
        const {
            articlesStore,
            filters : {selectedArticles, startDate, endDate} 
        } = this.props

        return articlesStore.filter((article => {
            return selectedArticles.length <= 0 || selectedArticles.indexOf(article.id) >=0 
        })).filter((article => {
            return !startDate || new Date(article.date) >= new Date(startDate) 
        })).filter((article => {
            return !endDate || new Date(article.date) <= new Date(endDate) 
        }))
    }

    get articles() {
        const {
            openItemId,
            toggleOpenArticle
        } = this.props

        return this.getArticlesStore().map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === openItemId}
                    toggleArticle={toggleOpenArticle}
                />
            </li>
        ))
    }
}

export default connect(
    (store) => ({
        articlesStore: store.articles,
        filters: store.filters
    })
)(accordion(ArticleList))
