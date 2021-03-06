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
var Cancel = /** @class */ (function (_super) {
    __extends(Cancel, _super);
    function Cancel(heidelpay) {
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
    Cancel.prototype.getAmount = function () {
        return this.amount;
    };
    /**
     * Set Amount
     *
     * @param {string} amount
     */
    Cancel.prototype.setAmount = function (amount) {
        this.amount = amount;
    };
    /**
     * Get Order OId
     *
     * @returns {string}
     */
    Cancel.prototype.getOrderId = function () {
        return this.orderId;
    };
    /**
     * Set Amount
     *
     * @param {string} amount
     */
    Cancel.prototype.setOrderId = function (orderId) {
        this.orderId = orderId;
    };
    /**
     * Get refund Id
     *
     * @returns {string}
     */
    Cancel.prototype.getRefundId = function () {
        return this.refundId;
    };
    /**
     * Set refund Id
     *
     * @param {string} refund Id
     */
    Cancel.prototype.setRefundId = function (refundId) {
        this.refundId = refundId;
    };
    /**
     * Set Payment Reference
     *
     * @param {string} paymentReference
     */
    Cancel.prototype.setPaymentReference = function (paymentReference) {
        this.paymentReference = paymentReference;
    };
    /**
     * Get Payment Reference
     *
     * @returns
     */
    Cancel.prototype.getPaymentReference = function () {
        return this.paymentReference;
    };
    /**
     * Get resources
     *
     * @returns {Resources}
     */
    Cancel.prototype.getResources = function () {
        return this.resources;
    };
    /**
     * Set resources
     *
     * @param {*} resources
     */
    Cancel.prototype.setResources = function (resources) {
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
    Cancel.prototype.getProcessing = function () {
        return this.processing;
    };
    /**
     * Set Processing
     *
     * @param {*} processing
     */
    Cancel.prototype.setProcessing = function (processing) {
        this.processing
            .setUniqueId(processing.uniqueId)
            .setShortId(processing.shortId);
    };
    return Cancel;
}(AbstractPayment_1.default));
exports.default = Cancel;
//# sourceMappingURL=Cancel.js.map