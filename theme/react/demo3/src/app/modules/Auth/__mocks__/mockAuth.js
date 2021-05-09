import {
  LOGIN_URL,
  ME_URL,
  REGISTER_URL,
  REQUEST_PASSWORD_URL,
} from "../_redux/authCrud";
import userTableMock from "./userTableMock";

export default function mockAuth(mock) {
  mock.onPost(LOGIN_URL).reply(({ data }) => {
    const { email, password } = JSON.parse(data);

    if (email && password) {
      const user = userTableMock.find(
        (x) =>
          x.email.toLowerCase() === email.toLowerCase() &&
          x.password === password
      );

      if (user) {
        return [200, { ...user, password: undefined }];
      }
    }

    return [400];
  });

  mock.onPost(REGISTER_URL).reply(({ data }) => {
    const { email, fullname, username, password } = JSON.parse(data);

    if (email && fullname && username && password) {
      const user = {
        id: generateUserId(),
        email,
        fullname,
        username,
        password,
        firstname: fullname,
        lastname: "Stark",
        roles: [2], // Manager
        authToken: "auth-token-" + Math.random(),
        refreshToken: "auth-token-" + Math.random(),
        pic: process.env.PUBLIC_URL + "/media/users/default.jpg",
      };

      userTableMock.push(user);

      return [200, { ...user, password: undefined }];
    }

    return [400];
  });

  mock.onPost(REQUEST_PASSWORD_URL).reply(({ data }) => {
    const { email } = JSON.parse(data);

    if (email) {
      const user = userTableMock.find(
        (x) => x.email.toLowerCase() === email.toLowerCase()
      );

      if (user) {
        user.password = undefined;

        return [200, { ...user, password: undefined }];
      }
    }

    return [400];
  });

  mock.onGet(ME_URL).reply(({ headers: { Authorization } }) => {
    const authToken =
      Authorization &&
      Authorization.startsWith("Bearer ") &&
      Authorization.slice("Bearer ".length);

    if (authToken) {
      const user = userTableMock.find((x) => x.authToken === authToken);

      if (user) {
        return [200, { ...user, password: undefined }];
      }
    }

    return [401];
  });

  function generateUserId() {
    const ids = userTableMock.map((el) => el.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  }
}
