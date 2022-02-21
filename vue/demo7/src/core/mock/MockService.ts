import { App } from "vue";
import MockAdapter from "axios-mock-adapter";

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
  token: string;
};

// mock testing user accounts
const users: Array<User> = [
  {
    name: "Name",
    surname: "Surname",
    email: "admin@demo.com",
    password: "demo",
    token: "mgfi5juf74j",
  },
  {
    name: "Name",
    surname: "Surname",
    email: "admin2@demo.com",
    password: "demo",
    token: "fgj8fjdfk43",
  },
];

class MockService {
  public static init(app: App<Element>) {
    // this sets the mock adapter on the default instance
    const mock = new MockAdapter(app.axios);

    // mock login request
    mock.onPost("/login").reply((data) => {
      const credential = JSON.parse(data.data);
      const found = users.find((user) => {
        return (
          credential.email === user.email &&
          credential.password === user.password
        );
      });
      if (found) {
        return [200, found];
      }
      return [404, { errors: ["The login detail is incorrect"] }];
    });

    // mock registration request
    mock.onPost("/registration").reply((data) => {
      const newUser = JSON.parse(data.data);
      if (
        newUser.name &&
        newUser.surname &&
        newUser.email &&
        newUser.password
      ) {
        const found = users.find((user) => {
          return newUser.email === user.email;
        });
        if (!found) {
          newUser.token = Math.random().toString(36).substr(2, 9);
          users.push(newUser);
          return [200, newUser];
        }
        return [409, { errors: ["User with this email already exists."] }];
      }
      return [400, { errors: ["Please fill all needed fields to continue."] }];
    });

    // mock forgot password request
    mock.onPost("/forgot_password").reply((data) => {
      const { email } = JSON.parse(data.data);

      if (email) {
        const user = users.find(
          (x) => x.email.toLowerCase() === email.toLowerCase()
        );
        if (user) {
          return [200, user];
        }
        return [404, { errors: ["Users with this email is not found."] }];
      }
      return [400, { errors: ["Please fill all needed fields to continue."] }];
    });

    // mock to verify authentication
    mock.onGet(/\/verify\/?/).reply((data) => {
      const token = data.headers.Authorization.replace("Token ", "");
      if (token !== "undefined") {
        const found = users.find((user) => {
          return token === user.token;
        });
        return [200, found];
      }
      return [401, { errors: ["Invalid authentication"] }];
    });
  }
}

export default MockService;
