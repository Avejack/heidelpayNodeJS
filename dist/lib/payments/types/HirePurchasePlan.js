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
var HirePurchasePlan = /** @class */ (function (_super) {
    __extends(HirePurchasePlan, _super);
    function HirePurchasePlan() {
        return _super.call(this) || this;
    }
    /**
     * Set Number of Rate
     *
     * @param {string} numberOfRates
     * @returns {HirePurchase}
     */
    HirePurchasePlan.prototype.setNumberOfRates = function (numberOfRates) {
        this._numberOfRates = numberOfRates;
        return this;
    };
    /**
     * Get Number of Rate
     *
     * @returns {string}
     */
    HirePurchasePlan.prototype.getNumberOfRates = function () {
        return this._numberOfRates;
    };
    /**
     * Set Day of purchase
     *
     * @param {string} dayOfPurchase
     * @returns {HirePurchase}
     */
    HirePurchasePlan.prototype.setDayOfPurchase = function (dayOfPurchase) {
        this._dayOfPurchase = dayOfPurchase;
        return this;
    };
    /**
     * Get Day of Purchase
     *
     * @returns {string}
     */
    HirePurchasePlan.prototype.getDayOfPurchase = function () {
        return this._dayOfPurchase;
    };
    /**
     * Set Order Date
     *
     * @param {string} orderDate
     * @returns {HirePurchase}
     */
    HirePurchasePlan.prototype.setOrderDate = function (orderDate) {
        this._orderDate = orderDate;
        return this;
    };
    /**
     * Get Order Date
     *
     * @returns {string}
     */
    HirePurchasePlan.prototype.getOrderDate = function () {
        return this._orderDate;
    };
    /**
     * Set Total Amount
     *
     * @param {number} totalPurchaseAmount
     * @returns {HirePurchase}
     */
    HirePurchasePlan.prototype.setTotalPurchaseAmount = function (totalPurchaseAmount) {
        this._totalPurchaseAmount = totalPurchaseAmount;
        return this;
    };
    /**
     * Get Total Amount
     *
     * @returns {number}
     */
    HirePurchasePlan.prototype.getTotalPurchaseAmount = function () {
        return this._totalPurchaseAmount;
    };
    /**
     * Set Interest Amount
     *
     * @param {number} totalInterestAmount
     * @returns {HirePurchase}
     */
    HirePurchasePlan.prototype.setTotalInterestAmount = function (totalInterestAmount) {
        this._totalInterestAmount = totalInterestAmount;
        return this;
    };
    /**
     * Get Interest Amount
     *
     * @returns {number}
     */
    HirePurchasePlan.prototype.getTotalInterestAmount = function () {
        return this._totalInterestAmount;
    };
    /**
     * Set Total Amount
     *
     * @param {number} totalAmount
     * @returns {HirePurchase}
     */
    HirePurchasePlan.prototype.setTotalAmount = function (totalAmount) {
        this._totalAmount = totalAmount;
        return this;
    };
    /**
     * Get Total Amount
     *
     * @returns {number}
     */
    HirePurchasePlan.prototype.getTotalAmount = function () {
        return this._totalAmount;
    };
    /**
     * Set Total Amount
     *
     * @param {number} totalAmount
     * @returns {HirePurchase}
     */
    HirePurchasePlan.prototype.setEffectiveInterestRate = function (effectiveInterestRate) {
        this._effectiveInterestRate = effectiveInterestRate;
        return this;
    };
    /**
     * Get Total Amount
     *
     * @returns {number}
     */
    HirePurchasePlan.prototype.getEffectiveInterestRate = function () {
        return this._effectiveInterestRate;
    };
    /**
     * Set Nominal Interest Rate
     *
     * @param {number} nominalInterestRate
     * @returns {HirePurchase}
     */
    HirePurchasePlan.prototype.setNominalInterestRate = function (nominalInterestRate) {
        this._nominalInterestRate = nominalInterestRate;
        return this;
    };
    /**
     * Get Nominal Interest Rate
     *
     * @returns {number}
     */
    HirePurchasePlan.prototype.getNominalInterestRate = function () {
        return this._nominalInterestRate;
    };
    /**
     * Set Fee First Rate
     *
     * @param {number} feeFirstRate
     * @returns {HirePurchase}
     */
    HirePurchasePlan.prototype.setFeeFirstRate = function (feeFirstRate) {
        this._feeFirstRate = feeFirstRate;
        return this;
    };
    /**
     * Get Nominal Interest Rate
     *
     * @returns {number}
     */
    HirePurchasePlan.prototype.getFeeFirstRate = function () {
        return this._feeFirstRate;
    };
    /**
     * Set Fee Per Rate
     *
     * @param {number} feePerRate
     * @returns {HirePurchase}
     */
    HirePurchasePlan.prototype.setFeePerRate = function (feePerRate) {
        this._feePerRate = feePerRate;
        return this;
    };
    /**
     * Get Nominal Interest Rate
     *
     * @returns {number}
     */
    HirePurchasePlan.prototype.getFeePerRate = function () {
        return this._feePerRate;
    };
    /**
     * Set Monthly Rate
     *
     * @param {number} monthlyRate
     * @returns {HirePurchase}
     */
    HirePurchasePlan.prototype.setMonthlyRate = function (monthlyRate) {
        this._monthlyRate = monthlyRate;
        return this;
    };
    /**
     * Get Monthly Rate
     *
     * @returns {number}
     */
    HirePurchasePlan.prototype.getMonthlyRate = function () {
        return this._monthlyRate;
    };
    /**
     * Set Last Rate
     *
     * @param {number} lastRate
     * @returns {HirePurchase}
     */
    HirePurchasePlan.prototype.setLastRate = function (lastRate) {
        this._lastRate = lastRate;
        return this;
    };
    /**
     * Get Monthly Rate
     *
     * @returns {number}
     */
    HirePurchasePlan.prototype.getLastRate = function () {
        return this._lastRate;
    };
    /**
     * Get url end point
     *
     * @returns {string}
     */
    HirePurchasePlan.prototype.getTypeUrl = function () {
        return apiURL.URL_TYPE_HIRE_PURCHASE_PLANS;
    };
    /**
     * Get Payload
     *
     * @returns
     */
    HirePurchasePlan.prototype.getPayload = function () {
        return {};
    };
    return HirePurchasePlan;
}(AbstractPaymentType_1.default));
exports.default = HirePurchasePlan;
//# sourceMappingURL=HirePurchasePlan.js.map