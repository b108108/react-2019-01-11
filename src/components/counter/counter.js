import React, {Component} from 'react'
import {connect} from 'react-redux';
import {increment} from '../../ac';
import localization from '../../decorators/localization'

class Counter extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.countProp}</h2>
                <button onClick={this.handleIncrement}>{this.props.getLocalizeString('increment')}</button>
            </div>
        )
    }

    handleIncrement = () => {
        this.props.dispatchIncrement()
    }
}

const mapStateToProps = (store) => ({
    countProp: store.count
})

const mapDispatchToProps = {
    dispatchIncrement: increment
}
// const mapDispatchToProps = (dispatch) => ({
//     dispatchIncrement: () => dispatch(increment())
// })

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(localization(Counter))
