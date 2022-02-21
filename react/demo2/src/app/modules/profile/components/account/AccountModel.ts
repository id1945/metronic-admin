export interface IAccount {
  username: string
  email: string
  language: string
  timeZone: string
  communications: {
    email: boolean
    sms: boolean
    phone: boolean
  }
  requireInfo: boolean
}

export const defaultAccount: IAccount = {
  username: 'max_stone',
  email: 'nick.watson@loop.com',
  language: 'en',
  timeZone: 'Alaska',
  communications: {
    email: false,
    sms: true,
    phone: false,
  },
  requireInfo: false,
}
