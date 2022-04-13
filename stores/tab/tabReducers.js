import * as tabActionsTypes from './tabActions';

const initialState = {
    isTradeModalVisible: false
}

const tabReducer = (state = initialState, action) => {
    switch (action.type) {
        case tabActionsTypes.SET_TRADE_MODAL_VISIVILITY:
            return {
                ...state,
                isTradeModalVisible: action.payload.isVisible
            }
        default:
            return state
    }
}

export default tabReducer;
