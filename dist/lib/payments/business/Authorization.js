"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractPayment_1 = require("./AbstractPayment");
var Resources_1 = require("./Resources");
var Processing_1 = require("./Processing");
var Authorization = /** @class */ (function (_super) {
    __extends(Authorization, _super);
    function Authorization(heidelpay) {
        var _this = _super.call(this, heidelpay) || this;
        _this.resources = new Resources_1.default();
        _this.processing = new Processing_1.default();
        return _this;
    }
    /**
     * Get Amount
     *
     * @returns {string}
     */
    Authorization.prototype.getAmount = function () {
        return this.amount;
    };
    /**
     * Set Amount
     *
     * @param {string} amount
     */
    Authorization.prototype.setAmount = function (amount) {
        this.amount = amount;
    };
    /**
     * Get Order OId
     *
     * @returns {string}
     */
    Authorization.prototype.getOrderId = function () {
        return this.orderId;
    };
    /**
     * Set Amount
     *
     * @param {string} amount
     */
    Authorization.prototype.setOrderId = function (orderId) {
        this.orderId = orderId;
    };
    /**
     * Set currency
     *
     * @param {string} currency
     */
    Authorization.prototype.setCurrency = function (currency) {
        this.currency = currency;
    };
    /**
     * Get currency
     *
     * @returns
     */
    Authorization.prototype.getCurrency = function () {
        return this.currency;
    };
    /**
     * Set return url
     *
     * @param {string} returnUrl
     */
    Authorization.prototype.setReturnUrl = function (returnUrl) {
        this.returnUrl = returnUrl;
    };
    /**
     * Get return url
     */
    Authorization.prototype.getReturnUrl = function () {
        return this.returnUrl;
    };
    /**
     * Set Payment Reference
     *
     * @param {string} paymentReference
     */
    Authorization.prototype.setPaymentReference = function (paymentReference) {
        this.paymentReference = paymentReference;
    };
    /**
     * Get Payment Reference
     *
     * @returns
     */
    Authorization.prototype.getPaymentReference = function () {
        return this.paymentReference;
    };
    /**
     * Get resources
     *
     * @returns {Resources}
     */
    Authorization.prototype.getResources = function () {
        return this.resources;
    };
    /**
     * Set resources
     *
     * @param {*} resources
     */
    Authorization.prototype.setResources = function (resources) {
        this.resources
            .setCustomerId(resources.customerId)
            .setMetadataId(resources.metadataId)
            .setPaymentId(resources.paymentId)
            .setTypeId(resources.typeId)
            .setTraceId(resources.traceId);
    };
    /**
     * Get Processing
     *
     * @returns {Processing}
     */
    Authorization.prototype.getProcessing = function () {
        return this.processing;
    };
    /**
     * Set Processing
     *
     * @param {*} processing
     */
    Authorization.prototype.setProcessing = function (processing) {
        this.processing
            .setUniqueId(processing.uniqueId)
            .setShortId(processing.shortId);
    };
    /**
     * Charge after authorize
     *
     * @param {number} [amount]
     * @returns {Promise<Charge>}
     */
    Authorization.prototype.charge = function (amount) {
        var chargeAuthorizePayload = {
            paymentId: this.getResources().getPaymentId()
        };
        if (amount) {
            chargeAuthorizePayload.amount = amount;
        }
        return this.getHeidelpay().chargeAuthorization(chargeAuthorizePayload);
    };
    /**
     * Reversal (Cancel of authorization)
     *
     * @param {number} [amount]
     * @returns {Promise<Cancel>}
     */
    Authorization.prototype.cancel = function (amount) {
        var cancelAuthorizePayload = {
            authorizationId: this.getId(),
            paymentId: this.getResources().getPaymentId()
        };
        if (amount) {
            cancelAuthorizePayload.amount = amount;
        }
        return this.getHeidelpay().cancelAuthorization(cancelAuthorizePayload);
    };
    return Authorization;
}(AbstractPayment_1.default));
exports.default = Authorization;
//# sourceMappingURL=Authorization.js.map