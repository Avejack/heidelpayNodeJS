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
var apiURL = require("../../configs/ApiUrls");
var AbstractPaymentType_1 = require("./AbstractPaymentType");
var HirePurchase = /** @class */ (function (_super) {
    __extends(HirePurchase, _super);
    function HirePurchase() {
        return _super.call(this) || this;
    }
    /**
     * Set Iban
     *
     * @param {string} iban
     * @returns {HirePurchase}
     */
    HirePurchase.prototype.setIban = function (iban) {
        this._iban = iban;
        return this;
    };
    /**
     * Get Iban
     *
     * @returns {string}
     */
    HirePurchase.prototype.getIban = function () {
        return this._iban;
    };
    /**
     * Set BIC
     *
     * @param {string} bic
     * @returns {HirePurchase}
     */
    HirePurchase.prototype.setBic = function (bic) {
        this._bic = bic;
        return this;
    };
    /**
     * Get Bic
     *
     * @returns {string}
     */
    HirePurchase.prototype.getBic = function () {
        return this._bic;
    };
    /**
     * Set Account Holader
     *
     * @param {string} accountHolder
     * @returns {HirePurchase}
     */
    HirePurchase.prototype.setAccountHolder = function (accountHolder) {
        this._accountHolder = accountHolder;
        return this;
    };
    /**
     * Get Account Holder
     *
     * @returns {string}
     */
    HirePurchase.prototype.getAccountHolder = function () {
        return this._accountHolder;
    };
    /**
     * Set Invoice Date
     *
     * @param {string} invoiceDate
     * @returns {HirePurchase}
     */
    HirePurchase.prototype.setInvoiceDate = function (invoiceDate) {
        this._invoiceDate = invoiceDate;
        return this;
    };
    /**
     * Get Invoice Date
     *
     * @returns {string}
     */
    HirePurchase.prototype.getInvoiceDate = function () {
        return this._invoiceDate;
    };
    /**
     * Set Invoice Due Date
     *
     * @param {string} invoiceDueDate
     * @returns {HirePurchase}
     */
    HirePurchase.prototype.setInvoiceDueDate = function (invoiceDueDate) {
        this._invoiceDueDate = invoiceDueDate;
        return this;
    };
    /**
     * Get Invoice Due Date
     *
     * @returns {string}
     */
    HirePurchase.prototype.getInvoiceDueDate = function () {
        return this._invoiceDueDate;
    };
    /**
     * Set Number of Rate
     *
     * @param {string} numberOfRates
     * @returns {HirePurchase}
     */
    HirePurchase.prototype.setNumberOfRates = function (numberOfRates) {
        this._numberOfRates = numberOfRates;
        return this;
    };
    /**
     * Get Number of Rate
     *
     * @returns {string}
     */
    HirePurchase.prototype.getNumberOfRates = function () {
        return this._numberOfRates;
    };
    /**
     * Set Day of purchase
     *
     * @param {string} dayOfPurchase
     * @returns {HirePurchase}
     */
    HirePurchase.prototype.setDayOfPurchase = function (dayOfPurchase) {
        this._dayOfPurchase = dayOfPurchase;
        return this;
    };
    /**
     * Get Day of Purchase
     *
     * @returns {string}
     */
    HirePurchase.prototype.getDayOfPurchase = function () {
        return this._dayOfPurchase;
    };
    /**
     * Set Order Date
     *
     * @param {string} orderDate
     * @returns {HirePurchase}
     */
    HirePurchase.prototype.setOrderDate = function (orderDate) {
        this._orderDate = orderDate;
        return this;
    };
    /**
     * Get Order Date
     *
     * @returns {string}
     */
    HirePurchase.prototype.getOrderDate = function () {
        return this._orderDate;
    };
    /**
     * Set Total Amount
     *
     * @param {number} totalPurchaseAmount
     * @returns {HirePurchase}
     */
    HirePurchase.prototype.setTotalPurchaseAmount = function (totalPurchaseAmount) {
        this._totalPurchaseAmount = totalPurchaseAmount;
        return this;
    };
    /**
     * Get Total Amount
     *
     * @returns {number}
     */
    HirePurchase.prototype.getTotalPurchaseAmount = function () {
        return this._totalPurchaseAmount;
    };
    /**
     * Set Interest Amount
     *
     * @param {number} totalInterestAmount
     * @returns {HirePurchase}
     */
    HirePurchase.prototype.setTotalInterestAmount = function (totalInterestAmount) {
        this._totalInterestAmount = totalInterestAmount;
        return this;
    };
    /**
     * Get Interest Amount
     *
     * @returns {number}
     */
    HirePurchase.prototype.getTotalInterestAmount = function () {
        return this._totalInterestAmount;
    };
    /**
     * Set Total Amount
     *
     * @param {number} totalAmount
     * @returns {HirePurchase}
     */
    HirePurchase.prototype.setTotalAmount = function (totalAmount) {
        this._totalAmount = totalAmount;
        return this;
    };
    /**
     * Get Total Amount
     *
     * @returns {number}
     */
    HirePurchase.prototype.getTotalAmount = function () {
        return this._totalAmount;
    };
    /**
     * Set Total Amount
     *
     * @param {number} totalAmount
     * @returns {HirePurchase}
     */
    HirePurchase.prototype.setEffectiveInterestRate = function (effectiveInterestRate) {
        this._effectiveInterestRate = effectiveInterestRate;
        return this;
    };
    /**
     * Get Total Amount
     *
     * @returns {number}
     */
    HirePurchase.prototype.getEffectiveInterestRate = function () {
        return this._effectiveInterestRate;
    };
    /**
     * Set Nominal Interest Rate
     *
     * @param {number} nominalInterestRate
     * @returns {HirePurchase}
     */
    HirePurchase.prototype.setNominalInterestRate = function (nominalInterestRate) {
        this._nominalInterestRate = nominalInterestRate;
        return this;
    };
    /**
     * Get Nominal Interest Rate
     *
     * @returns {number}
     */
    HirePurchase.prototype.getNominalInterestRate = function () {
        return this._nominalInterestRate;
    };
    /**
     * Set Fee First Rate
     *
     * @param {number} feeFirstRate
     * @returns {HirePurchase}
     */
    HirePurchase.prototype.setFeeFirstRate = function (feeFirstRate) {
        this._feeFirstRate = feeFirstRate;
        return this;
    };
    /**
     * Get Nominal Interest Rate
     *
     * @returns {number}
     */
    HirePurchase.prototype.getFeeFirstRate = function () {
        return this._feeFirstRate;
    };
    /**
     * Set Fee Per Rate
     *
     * @param {number} feePerRate
     * @returns {HirePurchase}
     */
    HirePurchase.prototype.setFeePerRate = function (feePerRate) {
        this._feePerRate = feePerRate;
        return this;
    };
    /**
     * Get Nominal Interest Rate
     *
     * @returns {number}
     */
    HirePurchase.prototype.getFeePerRate = function () {
        return this._feePerRate;
    };
    /**
     * Set Monthly Rate
     *
     * @param {number} monthlyRate
     * @returns {HirePurchase}
     */
    HirePurchase.prototype.setMonthlyRate = function (monthlyRate) {
        this._monthlyRate = monthlyRate;
        return this;
    };
    /**
     * Get Monthly Rate
     *
     * @returns {number}
     */
    HirePurchase.prototype.getMonthlyRate = function () {
        return this._monthlyRate;
    };
    /**
     * Set Last Rate
     *
     * @param {number} lastRate
     * @returns {HirePurchase}
     */
    HirePurchase.prototype.setLastRate = function (lastRate) {
        this._lastRate = lastRate;
        return this;
    };
    /**
     * Get Monthly Rate
     *
     * @returns {number}
     */
    HirePurchase.prototype.getLastRate = function () {
        return this._lastRate;
    };
    /**
     * Get url end point
     *
     * @returns {string}
     */
    HirePurchase.prototype.getTypeUrl = function () {
        return apiURL.URL_TYPE_HIRE_PURCHASE;
    };
    /**
     * Get Payload
     *
     * @returns
     */
    HirePurchase.prototype.getPayload = function () {
        return {
            iban: this.getIban(),
            bic: this.getBic(),
            accountHolder: this.getAccountHolder(),
            invoiceDate: this.getInvoiceDate(),
            invoiceDueDate: this.getInvoiceDueDate(),
            numberOfRates: this.getNumberOfRates(),
            dayOfPurchase: this.getDayOfPurchase(),
            totalPurchaseAmount: this.getTotalPurchaseAmount(),
            totalInterestAmount: this.getTotalInterestAmount(),
            totalAmount: this.getTotalAmount(),
            effectiveInterestRate: this.getEffectiveInterestRate(),
            nominalInterestRate: this.getNominalInterestRate(),
            feeFirstRate: this.getFeeFirstRate(),
            feePerRate: this.getFeePerRate(),
            monthlyRate: this.getMonthlyRate(),
            lastRate: this.getLastRate(),
        };
    };
    return HirePurchase;
}(AbstractPaymentType_1.default));
exports.default = HirePurchase;
//# sourceMappingURL=HirePurchase.js.map