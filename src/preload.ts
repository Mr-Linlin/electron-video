
// 在上下文隔离启用的情况下使用预加载
const { contextBridge, ipcRenderer } = require('electron')
interface IpcMessage {
  type: String
  // message: String
}
// 添加一个通信api
contextBridge.exposeInMainWorld('ipcMainService', {
  //发送消息通信到主线程
  sendIpcMsg: (obj: IpcMessage) => {
    ipcRenderer.send('communication', obj)
  }

})