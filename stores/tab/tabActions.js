export const SET_TRADE_MODAL_VISIVILITY = 'SET_TRADE_MODAL_VISIVILITY'

export const setTradeModalVisibilitySuccess = (isVisible) => ({
    type: SET_TRADE_MODAL_VISIVILITY,
    payload: { isVisible }
})


export function setTradeModalVisibility(isVisible) {
    return dispatch => {
        dispatch(setTradeModalVisibilitySuccess(isVisible))
    }
}