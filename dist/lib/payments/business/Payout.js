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
var Payout = /** @class */ (function (_super) {
    __extends(Payout, _super);
    function Payout(heidelpay) {
        var _this = _super.call(this, heidelpay) || this;
        _this.resources = new Resources_1.default();
        _this.processing = new Processing_1.default();
        return _this;
    }
    /**
     * Set amount
     *
     * @param {string} amount
     */
    Payout.prototype.setAmount = function (amount) {
        this.amount = amount;
    };
    /**
     * Get amount
     *
     * @returns {string}
     */
    Payout.prototype.getAmount = function () {
        return this.amount;
    };
    /**
     * Get Order OId
     *
     * @returns {string}
     */
    Payout.prototype.getOrderId = function () {
        return this.orderId;
    };
    /**
     * Set Amount
     *
     * @param {string} amount
     */
    Payout.prototype.setOrderId = function (orderId) {
        this.orderId = orderId;
    };
    /**
     * Set currency
     *
     * @param {string} currency
     */
    Payout.prototype.setCurrency = function (currency) {
        this.currency = currency;
    };
    /**
     * Get currency
     *
     * @returns
     */
    Payout.prototype.getCurrency = function () {
        return this.currency;
    };
    /**
     * Set Payment Reference
     *
     * @param {string} paymentReference
     */
    Payout.prototype.setPaymentReference = function (paymentReference) {
        this.paymentReference = paymentReference;
    };
    /**
     * Get Payment Reference
     *
     * @returns
     */
    Payout.prototype.getPaymentReference = function () {
        return this.paymentReference;
    };
    /**
     * Set return url
     *
     * @param {string} returnUrl
     */
    Payout.prototype.setReturnUrl = function (returnUrl) {
        this.returnUrl = returnUrl;
    };
    /**
     * Get return url
     */
    Payout.prototype.getReturnUrl = function () {
        return this.returnUrl;
    };
    /**
     * Get resources
     *
     * @returns {Resources}
     */
    Payout.prototype.getResources = function () {
        return this.resources;
    };
    /**
     * Set resources
     *
     * @param {*} resources
     */
    Payout.prototype.setResources = function (resources) {
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
    Payout.prototype.getProcessing = function () {
        return this.processing;
    };
    /**
     * Set Processing
     *
     * @param {*} processing
     */
    Payout.prototype.setProcessing = function (processing) {
        this.processing
            .setUniqueId(processing.uniqueId)
            .setShortId(processing.shortId);
    };
    return Payout;
}(AbstractPayment_1.default));
exports.default = Payout;
//# sourceMappingURL=Payout.js.map