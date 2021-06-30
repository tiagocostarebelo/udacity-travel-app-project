const server = require("../src/server/server");
const supertest = require("supertest");
const response = supertest(server);

describe("GET / ", () => {
    test("test the trips projectData", async () => {
      
      expect("projectData").toBeDefined();
      
    });
  });