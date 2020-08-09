"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractPayment = /** @class */ (function () {
    function AbstractPayment(heidelpay) {
        this._heidelpay = heidelpay;
        this._id = '';
    }
    /**
     * Set a payment object
     *
     * @param {Payment} payment
     */
    AbstractPayment.prototype.setPayment = function (payment) {
        this._payment = payment;
    };
    /**
     * Get payment object
     *
     * @returns {Payment}
     */
    AbstractPayment.prototype.getPayment = function () {
        return this._payment;
    };
    /**
     * Get instance Heidelpay
     *
     * @returns {Heidelpay}
     */
    AbstractPayment.prototype.getHeidelpay = function () {
        return this._heidelpay;
    };
    /**
     * Set Payment Id
     *
     * @param {string} paymentId
     */
    AbstractPayment.prototype.setId = function (paymentId) {
        this._id = paymentId;
    };
    /**
     * Get Payment Id
     *
     * @returns {string}
     */
    AbstractPayment.prototype.getId = function () {
        return this._id;
    };
    /**
     * Get payload object
     *
     * @returns {*}
     */
    AbstractPayment.prototype.getPayload = function () {
        return this._payload;
    };
    /**
     * Set payload object
     *
     * @param {*} payload
     * @returns
     */
    AbstractPayment.prototype.setPayload = function (payload) {
        return this._payload = payload;
    };
    return AbstractPayment;
}());
exports.default = AbstractPayment;
//# sourceMappingURL=AbstractPayment.js.map