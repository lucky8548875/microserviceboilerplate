const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const server = require('../src/server')
chai.use(chaiHttp)


describe('SERVER', function() {
    it('Start Server', function(done) {
        this.timeout(10000)
        chai.request(server)
            .get('/api/v01')
            .end(function(req, res) {
                expect(res).to.have.status(200);
                done()
            })
    })
})