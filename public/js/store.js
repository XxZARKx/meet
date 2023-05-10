import * as constants from './constants.js'

let state = {
    socketId: null,
    localStream: null,
    remoteStream: null,
    screenSharingActive: false,
    screenSharingStream: null,
    allowConnectionsFromStrangers: false,
    callState: constants.callState.CALL_AVAILABLE
}

export const setAllStates = (key, value) => {
    
    state = {
        ...state,
        [key]: value
    }
}

export const getState = () => {
    return state
}