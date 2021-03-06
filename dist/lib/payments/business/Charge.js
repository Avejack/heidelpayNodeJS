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
var Charge = /** @class */ (function (_super) {
    __extends(Charge, _super);
    function Charge(heidelpay) {
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
    Charge.prototype.setAmount = function (amount) {
        this.amount = amount;
    };
    /**
     * Get amount
     *
     * @returns {string}
     */
    Charge.prototype.getAmount = function () {
        return this.amount;
    };
    /**
     * Get Order Id
     *
     * @returns {string}
     */
    Charge.prototype.getOrderId = function () {
        return this.orderId;
    };
    /**
     * Set Order Id
     *
     * @param {string} orderId
     */
    Charge.prototype.setOrderId = function (orderId) {
        this.orderId = orderId;
    };
    /**
     * Get Invoice Id
     *
     * @returns {string}
     */
    Charge.prototype.getInvoiceId = function () {
        return this.invoiceId;
    };
    /**
     * Set Invoice Id
     *
     * @param {string} invoiceId
     */
    Charge.prototype.setInvoiceId = function (invoiceId) {
        this.invoiceId = invoiceId;
    };
    /**
     * Set currency
     *
     * @param {string} currency
     */
    Charge.prototype.setCurrency = function (currency) {
        this.currency = currency;
    };
    /**
     * Get currency
     *
     * @returns
     */
    Charge.prototype.getCurrency = function () {
        return this.currency;
    };
    /**
     * Set return url
     *
     * @param {string} returnUrl
     */
    Charge.prototype.setReturnUrl = function (returnUrl) {
        this.returnUrl = returnUrl;
    };
    /**
     * Get return url
     */
    Charge.prototype.getReturnUrl = function () {
        return this.returnUrl;
    };
    /**
     * Set Payment Reference
     *
     * @param {string} paymentReference
     */
    Charge.prototype.setPaymentReference = function (paymentReference) {
        this.paymentReference = paymentReference;
    };
    /**
     * Get Payment Reference
     *
     * @returns
     */
    Charge.prototype.getPaymentReference = function () {
        return this.paymentReference;
    };
    /**
     * Set 3ds option
     *
     * @param {string} returnUrl
     */
    Charge.prototype.setCard3ds = function (card3ds) {
        this.card3ds = card3ds;
    };
    /**
     * Get 3ds option
     */
    Charge.prototype.getCard3ds = function () {
        return this.card3ds;
    };
    /**
     * Get resources
     *
     * @returns {Resources}
     */
    Charge.prototype.getResources = function () {
        return this.resources;
    };
    /**
     * Set resources
     *
     * @param {*} resources
     */
    Charge.prototype.setResources = function (resources) {
        this.resources
            .setCustomerId(resources.customerId)
            .setMetadataId(resources.metadataId)
            .setPaymentId(resources.paymentId)
            .setTypeId(resources.typeId)
            .setBasketId(resources.basketId)
            .setTraceId(resources.traceId);
    };
    /**
     * Get Processing
     *
     * @returns {Processing}
     */
    Charge.prototype.getProcessing = function () {
        return this.processing;
    };
    /**
     * Set Processing
     *
     * @param {*} processing
     */
    Charge.prototype.setProcessing = function (processing) {
        this.processing
            .setUniqueId(processing.uniqueId)
            .setShortId(processing.shortId);
    };
    /**
     * Get cancel transaction
     *
     * @param {string} cancelId
     * @returns {Cancel}
     */
    Charge.prototype.getCancel = function (cancelId) {
        var cancelItem = this.getCancelList().find(function (item) { return item.getId() === cancelId; });
        if (cancelItem && cancelItem.getId()) {
            return cancelItem;
        }
        throw new Error("Cancel Id is not found in list of transaction");
    };
    /**
     * Get list of cancel transactions
     *
     * @returns {Array<Cancel>}
     */
    Charge.prototype.getCancelList = function () {
        return this.cancelList;
    };
    /**
     * Set list of cancel transactions
     *
     * @param {Array<Cancel>} cancelList
     */
    Charge.prototype.setCancelList = function (cancelList) {
        this.cancelList = cancelList;
    };
    /**
     * Refund (Cancel of charge)
     *
     * @param {number} [amount]
     * @returns {Promise<Cancel>}
     */
    Charge.prototype.cancel = function (amount) {
        var cancelChargePayload = {
            chargeId: this.getId(),
            paymentId: this.getResources().getPaymentId()
        };
        if (amount) {
            cancelChargePayload.amount = amount;
        }
        return this.getHeidelpay().cancelCharge(cancelChargePayload);
    };
    return Charge;
}(AbstractPayment_1.default));
exports.default = Charge;
//# sourceMappingURL=Charge.js.map