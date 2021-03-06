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
var Payment = /** @class */ (function (_super) {
    __extends(Payment, _super);
    function Payment(heidelpay) {
        var _this = _super.call(this, heidelpay) || this;
        _this.resources = new Resources_1.default();
        return _this;
    }
    /**
     * Get resources
     *
     * @returns {Resources}
     */
    Payment.prototype.getResources = function () {
        return this.resources;
    };
    /**
     * Set resources
     *
     * @param {*} resources
     */
    Payment.prototype.setResources = function (resources) {
        this.resources
            .setCustomerId(resources.customerId)
            .setMetadataId(resources.metadataId)
            .setPaymentId(resources.paymentId)
            .setTypeId(resources.typeId)
            .setTraceId(resources.traceId);
    };
    /**
     * Set authorize transaction
     *
     * @param {Authorization} authorization
     */
    Payment.prototype.setAuthorization = function (authorization) {
        this.authorization = authorization;
    };
    /**
     * Get authorize transaction
     *
     * @returns {Authorization}
     */
    Payment.prototype.getAuthorization = function () {
        return this.authorization;
    };
    /**
     * Set list charge transactions
     *
     * @param {Array<Charge>} chargeList
     */
    Payment.prototype.setChargeList = function (chargeList) {
        this.chargeList = chargeList;
    };
    /**
     * Get list charge transactions
     *
     * @returns {Array<Charge>}
     */
    Payment.prototype.getChargeList = function () {
        return this.chargeList;
    };
    /**
     * Get charge transaction
     *
     * @param {string} chargeId
     * @returns {Charge}
     */
    Payment.prototype.getCharge = function (chargeId) {
        var chargeItem = this.getChargeList().find(function (item) { return item.getId() === chargeId; });
        if (chargeItem && chargeItem.getId()) {
            return chargeItem;
        }
        throw new Error("Charge Id is not found in list of transaction");
    };
    /**
     * Set list cancel transactions
     *
     * @param {Array<Cancel>} chargeList
     */
    Payment.prototype.setCancelList = function (cancelList) {
        this.cancelList = cancelList;
    };
    /**
     * Get list cancel transactions
     *
     * @returns {Array<Cancel>}
     */
    Payment.prototype.getCancelList = function () {
        return this.cancelList;
    };
    /**
     * Get cancel transaction
     *
     * @param {string} cancelId
     * @returns {Cancel}
     */
    Payment.prototype.getCancel = function (cancelId, refundId) {
        var cancelItem;
        if (refundId) {
            // Find item in list of cancel with cancel Id and refund Id
            cancelItem = this.getCancelList().find(function (item) { return item.getId() === cancelId && item.getRefundId() === refundId; });
        }
        else {
            // Find item in list of cancel with only cancel Id
            cancelItem = this.getCancelList().find(function (item) { return item.getId() === cancelId; });
        }
        if (cancelItem && cancelItem.getId()) {
            return cancelItem;
        }
        throw new Error("Cancel Id is not found in list of transaction");
    };
    return Payment;
}(AbstractPayment_1.default));
exports.default = Payment;
//# sourceMappingURL=Payment.js.map