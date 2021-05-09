import Vue from "vue";

var MockAdapter = require("axios-mock-adapter");

// mock testing user accounts
const users = [
  {
    email: "admin@demo.com",
    password: "demo",
    token: "mgfi5juf74j"
  },
  {
    email: "admin2@demo.com",
    password: "demo",
    token: "fgj8fjdfk43"
  }
];

const MockService = {
  init() {
    // this sets the mock adapter on the default instance
    var mock = new MockAdapter(Vue.axios);

    // mock login request
    mock.onPost("/login").reply(data => {
      const credential = JSON.parse(data.data);
      const found = users.find(user => {
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

    // mock to verify authentication
    mock.onGet(/\/verify\/?/).reply(data => {
      const token = data.headers.Authorization.replace("Token ", "");
      if (token !== "undefined") {
        const found = users.find(user => {
          return token === user.token;
        });
        return [200, found];
      }
      return [401, { errors: ["Invalid authentication"] }];
    });
  }
};

export default MockService;
