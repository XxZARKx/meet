import * as webRTCHandler from './webRTCHandler.js'
import * as wss from './wss.js'
import * as ui from './ui.js'

let strangerCallType;

export const changeStrangerConnectionStatus = (status) => {
    const data = { status }
    wss.changeStrangerConnectionStatus(data)
}

export const getStrangersSocketIdAndConnect = (callType) => {
    strangerCallType = callType
    wss.getStrangerSocketId()
}

export const connectionWithStrangers = (data) => {
    if(data.randomStrangerSocketId){
        webRTCHandler.sendPreOffer(strangerCallType, data.randomStrangerSocketId)
    } else{
        ui.showNoStrangerAvailableDialog()
    }

}