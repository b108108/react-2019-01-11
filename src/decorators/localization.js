// HOC === Higher Order Component
import React, { Component } from 'react'
import {Consumer as LocalizationConsumer} from '../contexts/localization'

export default (OriginalComponent) =>
    class DecoratedComponent extends Component {

        getLocalizeString = (value, context) => {
            return context[value]
        }

        render() {
            return (
                <LocalizationConsumer>
                    {(context) => (
                        <OriginalComponent
                            {...this.props}
                            {...this.state}
                            getLocalizeString={(value) => this.getLocalizeString(value, context)}
                        />
                    )}
                </LocalizationConsumer>
            )
        }
    }