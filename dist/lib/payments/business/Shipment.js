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
var Shipment = /** @class */ (function (_super) {
    __extends(Shipment, _super);
    function Shipment(heidelpay) {
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
    Shipment.prototype.getAmount = function () {
        return this.amount;
    };
    /**
     * Set Amount
     *
     * @param {string} amount
     */
    Shipment.prototype.setAmount = function (amount) {
        this.amount = amount;
    };
    /**
     * Get Order Id
     *
     * @returns {string}
     */
    Shipment.prototype.getOrderId = function () {
        return this.orderId;
    };
    /**
     * Set Order Id
     *
     * @param {string} orderId
     */
    Shipment.prototype.setOrderId = function (orderId) {
        this.orderId = orderId;
    };
    /**
     * Get Invoice Id
     *
     * @returns {string}
     */
    Shipment.prototype.getInvoiceId = function () {
        return this.invoiceId;
    };
    /**
     * Set Invoice Id
     *
     * @param {string} invoiceId
     */
    Shipment.prototype.setInvoiceId = function (invoiceId) {
        this.invoiceId = invoiceId;
    };
    /**
     * Get resources
     *
     * @returns {Resources}
     */
    Shipment.prototype.getResources = function () {
        return this.resources;
    };
    /**
     * Set resources
     *
     * @param {*} resources
     */
    Shipment.prototype.setResources = function (resources) {
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
    Shipment.prototype.getProcessing = function () {
        return this.processing;
    };
    /**
     * Set Processing
     *
     * @param {*} processing
     */
    Shipment.prototype.setProcessing = function (processing) {
        this.processing
            .setUniqueId(processing.uniqueId)
            .setShortId(processing.shortId);
    };
    return Shipment;
}(AbstractPayment_1.default));
exports.default = Shipment;
//# sourceMappingURL=Shipment.js.map