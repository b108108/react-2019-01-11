import {SELECT_ARTICLE, FILTER_BY_DATE} from '../constants';

const defaultFilters= {
    selectedArticles: [],
    startDate: undefined,
    endDate: undefined    
}

export default (state = defaultFilters, action) => {
    const {type, payload} = action
    switch (type) {
        case SELECT_ARTICLE:
            return {
                ...state,
                selectedArticles: payload.ids
            }
        case FILTER_BY_DATE:
            return {
                ...state,
                startDate: payload.dateRange.from,
                endDate: payload.dateRange.to
            }
        default:
            return state
    }
} 