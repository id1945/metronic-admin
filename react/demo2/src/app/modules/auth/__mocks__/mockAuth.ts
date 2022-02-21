import MockAdapter from 'axios-mock-adapter'
import {UserModel} from '../models/UserModel'
import {
  LOGIN_URL,
  GET_USER_BY_ACCESSTOKEN_URL,
  REGISTER_URL,
  REQUEST_PASSWORD_URL,
} from '../redux/AuthCRUD'
import {UsersTableMock} from './usersTableMock'

export function mockAuth(mock: MockAdapter) {
  mock.onPost(LOGIN_URL).reply(({data}) => {
    const {email, password} = JSON.parse(data)

    if (email && password) {
      const user = UsersTableMock.table.find(
        (x) => x.email.toLowerCase() === email.toLowerCase() && x.password === password
      )

      if (user) {
        const auth = user.auth
        return [200, {...auth, password: undefined}]
      }
    }

    return [400]
  })

  mock.onPost(REGISTER_URL).reply(({data}) => {
    const {email, firstname, lastname, password} = JSON.parse(data)

    if (email && firstname && lastname && password) {
      const user: UserModel = {
        id: generateUserId(),
        email,
        firstname,
        lastname,
        username: `${firstname}-${lastname}`,
        password,
        roles: [2], // Manager
        auth: {
          accessToken: 'access-token-' + Math.random(),
          refreshToken: 'access-token-' + Math.random(),
        },
        pic: process.env.PUBLIC_URL + '/media/users/default.jpg',
      }

      UsersTableMock.table.push(user)
      const auth = user.auth

      return [200, {...auth, password: undefined}]
    }

    return [400]
  })

  mock.onPost(REQUEST_PASSWORD_URL).reply(({data}) => {
    const {email} = JSON.parse(data)

    if (email) {
      const user = UsersTableMock.table.find((x) => x.email.toLowerCase() === email.toLowerCase())
      let result = false
      if (user) {
        user.password = undefined
        result = true
        return [200, {result, password: undefined}]
      }
    }

    return [400]
  })

  mock.onGet(GET_USER_BY_ACCESSTOKEN_URL).reply(({headers: {Authorization}}) => {
    const accessToken =
      Authorization && Authorization.startsWith('Bearer ') && Authorization.slice('Bearer '.length)

    if (accessToken) {
      const user = UsersTableMock.table.find((x) => x.auth?.accessToken === accessToken)

      if (user) {
        return [200, {...user, password: undefined}]
      }
    }

    return [401]
  })

  function generateUserId(): number {
    const ids = UsersTableMock.table.map((el) => el.id)
    const maxId = Math.max(...ids)
    return maxId + 1
  }
}
