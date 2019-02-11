import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {connect} from 'react-redux';
import {changeDateRange} from '../../ac';

class DateRangePicker extends React.Component {
    static defaultProps = {
        numberOfMonths: 2,
    };
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }
    getInitialState() {
        return {
            from: undefined,
            to: undefined,
        };
    }
    handleDayClick(day) {
        const range = DateUtils.addDayToRange(day, {
            from: this.props.filters.startDate,
            to: this.props.filters.endDate
        });
        this.props.dispatchDateChange(range);
    }
    handleResetClick() {
        this.props.dispatchDateChange(this.getInitialState())
    }
    render() {
        const { startDate : from, endDate : to } = this.props.filters;
        const modifiers = { start: from, end: to };
        return (
            <div className="RangeExample">
                <p>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from &&
                    to &&
                    `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
                    {from &&
                    to && (
                        <button className="link" onClick={this.handleResetClick}>
                            Reset
                        </button>
                    )}
                </p>
                <DayPicker
                    className="Selectable"
                    numberOfMonths={this.props.numberOfMonths}
                    selectedDays={[from, { from, to }]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                />
            </div>
        );
    }
}

export default connect(
    (store) => ({
        filters: store.filters
    }),
    (dispatch) => ({
        dispatchDateChange: (dateRange) => dispatch(changeDateRange(dateRange))
    })
)(DateRangePicker)