const server = require("../src/server/server");
const supertest = require("supertest");
const res = supertest(server);

it('/trips', callbackFunction)
    async function callbackFunction(req, res) {
    expect(res.send.content).toBe('projectData');
    done();
  };
