import React, { Component } from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'
import {selectArticle} from '../../ac';

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
    }

    // state = {
    //     selectedOption: null
    // }

    render() {
        return (
            <Select
                options={this.optionsForSelect}
                onChange={this.handleSelectChange}
                value={this.selectedOptions}
                isMulti
            />
        )
    }

    get optionsForSelect() {
        const {startDate, endDate} = this.props.filters
        return this.mapOptions(this.props.articles.filter((article => {
            return !startDate || new Date(article.date) >= new Date(startDate) 
        })).filter((article => {
            return !endDate || new Date(article.date) <= new Date(endDate) 
        })))
    }

    get selectedOptions() {
        return this.mapOptions(this.props.articles.filter((item) => 
            this.props.selectedArticles.indexOf(item.id) >= 0
        ))
    }

    mapOptions(list){
        return list.map((item) => ({
            value: item.id,
            label: item.title
        }))
    }

    handleSelectChange = (selectedOptions) => {
        this.props.dispatchSelectArticle(selectedOptions.map(option => option.value))
    }
}

export default connect(
    (store) => ({
        articles: store.articles,
        selectedArticles: store.filters.selectedArticles,
        filters: store.filters
    }),
    (dispatch) => ({
        dispatchSelectArticle: (ids) => dispatch(selectArticle(ids))
    })
)(SelectFilter)
