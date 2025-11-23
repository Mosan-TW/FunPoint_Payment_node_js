/**
 * Created by ying.wu on 2017/6/9.
 */
const version = require('./funpoint_payment/version.js');
const payment_client = require('./funpoint_payment/payment_client.js');
const query_client = require('./funpoint_payment/query_client.js');
const exec_grant_refund = require('./funpoint_payment/exec_grant_refund.js');

class FunPointPayment {
    constructor(options){
        this.version = new version();
        this.payment_client = new payment_client(options);
        this.query_client = new query_client(options);
        this.exec_grant_refund = new exec_grant_refund(options);
    }
}
module.exports = FunPointPayment;