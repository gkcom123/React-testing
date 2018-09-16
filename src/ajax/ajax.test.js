import {utility} from './ajax';
import axios from 'axios';
import sinon from 'sinon';
import {expect} from 'chai';
let chai = require('chai');
//let chaiHttp = require('chai-http');
describe('Utility',() =>{
    beforeEach(()=>{
        console.log("1");
        sinon.stub(axios,'get');
    })
    afterEach(()=>{
        console.log("3");
        axios.get.restore();
    })
    it('Should make an ajax call',()=>{
        console.log("2");
        utility.makeAjax();
        utility.makeAjax();
        expect(axios.get.callCount).to.equal(2);
    })
    // it('it should GET all the books', (done) => {
    //     chai.request("http://jsonplaceholder.typicode.com/posts/")
    //         .get('/4')
    //         .end((err, res) => {
    //               res.should.have.status(200);
    //               //res.body.should.be.a('array');
    //               //res.body.length.should.be.eql(0);
    //           done();
    //         });
    //   });
})