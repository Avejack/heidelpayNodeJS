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
var SepaDirectDebitGuaranteed = /** @class */ (function (_super) {
    __extends(SepaDirectDebitGuaranteed, _super);
    function SepaDirectDebitGuaranteed(iban) {
        var _this = _super.call(this) || this;
        _this._iban = iban || '';
        return _this;
    }
    /**
     * Set iban number
     *
     * @param {string} iban
     * @returns {SepaDirectDebitGuaranteed}
     */
    SepaDirectDebitGuaranteed.prototype.setIban = function (iban) {
        this._iban = iban;
        return this;
    };
    /**
     * Get iban number
     *
     * @returns {string}
     */
    SepaDirectDebitGuaranteed.prototype.getIban = function () {
        return this._iban;
    };
    /**
     * Set bic number
     *
     * @param {string} bic
     * @returns {Card}
     */
    SepaDirectDebitGuaranteed.prototype.setBic = function (bic) {
        this._bic = bic;
        return this;
    };
    /**
     * Get bic number
     *
     * @returns {string}
     */
    SepaDirectDebitGuaranteed.prototype.getBic = function () {
        return this._bic;
    };
    /**
     * Set holder
     *
     * @param {string} holder
     * @returns {Card}
     */
    SepaDirectDebitGuaranteed.prototype.setHolder = function (holder) {
        this._holder = holder;
        return this;
    };
    /**
     * Get holder
     *
     * @returns {string}
     */
    SepaDirectDebitGuaranteed.prototype.getHolder = function () {
        return this._holder;
    };
    /**
     * Get url end point
     *
     * @returns {string}
     */
    SepaDirectDebitGuaranteed.prototype.getTypeUrl = function () {
        return apiURL.URL_TYPE_SEPA_DIRECT_DEBIT_GUARANTEED;
    };
    /**
     * Get Payload
     *
     * @returns
     */
    SepaDirectDebitGuaranteed.prototype.getPayload = function () {
        return {
            iban: this.getIban(),
            bic: this.getBic(),
            holder: this.getHolder(),
        };
    };
    return SepaDirectDebitGuaranteed;
}(AbstractPaymentType_1.default));
exports.default = SepaDirectDebitGuaranteed;
//# sourceMappingURL=SepaDirectDebitGuaranteed.js.map