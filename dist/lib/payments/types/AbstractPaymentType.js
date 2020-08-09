"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractPaymentType = /** @class */ (function () {
    function AbstractPaymentType() {
    }
    /**
     * Set Heidelpay instance
     *
     * @param {Heidelpay} heidelpay
     */
    AbstractPaymentType.prototype.setHeidelpay = function (heidelpay) {
        this._heidelpay = heidelpay;
    };
    /**
     * Get instance Heidelpay
     *
     * @returns {Heidelpay}
     */
    AbstractPaymentType.prototype.getHeidelpay = function () {
        return this._heidelpay;
    };
    /**
     * Set Payment Id
     *
     * @param {string} paymentId
     */
    AbstractPaymentType.prototype.setId = function (paymentId) {
        this._id = paymentId;
    };
    /**
     * Get Payment Id
     *
     * @returns {string}
     */
    AbstractPaymentType.prototype.getId = function () {
        return this._id;
    };
    /**
     * Authorize with payment card
     *
     * @param {authorizeObject} args
     * @returns {Promise<Authorization>}
     */
    AbstractPaymentType.prototype.authorize = function (args) {
        return this.getHeidelpay().authorize(args);
    };
    /**
     * Charge on authorize
     *
     * @param {chargeAuthorizeObject} args
     * @returns {Promise<Charge>}
     */
    AbstractPaymentType.prototype.charge = function (args) {
        return this.getHeidelpay().charge(args);
    };
    /**
     * Get geoLocation
     *
     * @returns {any}
     */
    AbstractPaymentType.prototype.getGeoLocation = function () {
        return this._geoLocation;
    };
    /**
     * Set geoLocation
     *
     * @param {any} geoLocation
     * @returns {any}
     */
    AbstractPaymentType.prototype.setGeoLocation = function (geoLocation) {
        this._geoLocation = geoLocation;
    };
    /**
     * Set PayPal email
     *
     * @param {string} email
     */
    AbstractPaymentType.prototype.setEmail = function (email) {
        this._email = email;
    };
    /**
     * Get PayPal email
     *
     * @returns {string}
     */
    AbstractPaymentType.prototype.getEmail = function () {
        return this._email;
    };
    return AbstractPaymentType;
}());
exports.default = AbstractPaymentType;
//# sourceMappingURL=AbstractPaymentType.js.map