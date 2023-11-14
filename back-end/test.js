const request = require('supertest');
const app = require('./app.js');
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
describe("GET request to /createaccount route", () => {
    it("it should respond with an HTTP 200 status code and an object in the response body", done => {
      chai
        .request(app)
        .post("/createaccount")
        .end((err, res) => {
            expect(res.body).to.be.a("object"); // Use the expect syntax
            
            expect(res.body).to.have.property("success").that.equals(true); // a way to check the exact value of a property of the response object
        done();   // resolve the Promise that these tests create so mocha can move on
        })
    })
  })