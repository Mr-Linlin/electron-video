interface IpcMessage {
  type: String
  // message: String
}
class IpcMainService {
  public sendIpcMsg(obj: IpcMessage) {
    (window as any).ipcMainService.sendIpcMsg(obj)

  }
}
export default new IpcMainService()