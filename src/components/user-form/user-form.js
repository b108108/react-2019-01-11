import React, {Component} from 'react'
import localization from '../../decorators/localization'

class UserForm extends Component {
    render() {
        return (
            <div>
                {this.props.getLocalizeString('userName')}:
                <input value={this.props.value} onChange={this.handleChange}/>
            </div>
        )
    }

    handleChange = (event) => {
        event.preventDefault()
        this.props.onChange(event.target.value)
    }
}

export default localization(UserForm)
