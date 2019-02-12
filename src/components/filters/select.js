import React, { Component } from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'
import {selectArticle, changeSelection} from '../../ac';

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
                value={this.props.selectedOptions}
                isMulti
            />
        )
    }

    get optionsForSelect() {
        return this.props.articles.map((item) => ({
            value: item.id,
            label: item.title
        }))
    }

    handleSelectChange = (selectedOption) => {
        this.props.changeSelectionProp(selectedOption)
    }
}

const mapDispatchToPropsFunc = (dispatch) => {
    return {
        changeSelectionProp: (selectedOption) => {
            dispatch(changeSelection(selectedOption))
        }
    }
}

export default connect(
    state => ({
        articles: state.articles,
        selectedOptions: state.filters.selected
    }),
    mapDispatchToPropsFunc
)(SelectFilter)
