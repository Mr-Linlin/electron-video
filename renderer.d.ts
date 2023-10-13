export interface IpcMainService {
  sendIpcMsg: () => Promise<void>,
}

declare global {
  interface Window {
    ipcMainService: IpcMainService
  }
}
