import React, {Component} from 'react'
import Article, {TypeArticle} from '../article'
import accordion from '../../decorators/accordion'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {filteredArticlesSelector} from '../../selectors';

export const TypeArticles = PropTypes.arrayOf(TypeArticle)

class ArticleList extends Component {
    static propTypes = {
        articlesFromStore: TypeArticles
    }

    render() {
        return <ul>{this.articles}</ul>;
    }

    componentDidMount() {
        this.props.fetchData && this.props.fetchData()
    }

    get articles() {
        const {
            openItemId,
            toggleOpenArticle,
            articlesStore
        } = this.props

        return articlesStore.map(article => (
            <li key={article.id} className="test--art__container">
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
        //articlesStore: store.articles,
        articlesStore: filteredArticlesSelector(store),
        filters: store.filters
    })
)(accordion(ArticleList))
