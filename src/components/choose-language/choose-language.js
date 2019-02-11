import React, {Component} from 'react'
import PropTypes from 'prop-types';

class ChooseLanguage extends Component {

    render() {
        return (
            <ul>
            {/* {vocabulary[this.state.languages].language}  */}
                <li onClick={this.handleChooseLang(typeLang.en)} style={{color: 'blue'}}>- En -</li>
                <li onClick={this.handleChooseLang(typeLang.ru)} style={{color: 'red'}}>- Ru -</li>
            </ul>          
        )
    }

    handleChooseLang = (lang) => {
        this.props.onClickLanguage(lang)
    }

}


const typeLang = {
    en: 'en',
    ru: 'ru',
}

export default ChooseLanguage