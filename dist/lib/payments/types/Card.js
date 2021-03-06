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
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card(number, expiryDate) {
        if (number === void 0) { number = ''; }
        if (expiryDate === void 0) { expiryDate = ''; }
        var _this = _super.call(this) || this;
        _this._number = number;
        _this._expiryDate = expiryDate;
        _this._cardHolder = '';
        _this._cardDetails = {};
        return _this;
    }
    /**
     * Get url end point
     *
     * @returns {string}
     */
    Card.prototype.getTypeUrl = function () {
        return apiURL.URL_TYPE_CARD;
    };
    /**
     * Get Payload
     *
     * @returns
     */
    Card.prototype.getPayload = function () {
        var payload = {
            number: this.getNumber(),
            cvc: this.getCVC(),
            expiryDate: this.getExpiryDate()
        };
        if (this.get3ds() !== undefined) {
            payload['3ds'] = this.get3ds();
        }
        return payload;
    };
    /**
     * Set pan number
     *
     * @param {string} number
     * @returns {Card}
     */
    Card.prototype.setNumber = function (number) {
        this._number = number;
        return this;
    };
    /**
     * Get pan number
     *
     * @returns {string}
     */
    Card.prototype.getNumber = function () {
        return this._number;
    };
    /**
     * Set CVC number
     *
     * @param {string} cvc
     * @returns {Card}
     */
    Card.prototype.setCVC = function (cvc) {
        this._cvc = cvc;
        return this;
    };
    /**
     * Get CVC
     *
     * @returns {string}
     */
    Card.prototype.getCVC = function () {
        return this._cvc;
    };
    /**
     * Set expiry date
     *
     * @param {string} expiryDate
     * @returns {Card}
     */
    Card.prototype.setExpiryDate = function (expiryDate) {
        this._expiryDate = expiryDate;
        return this;
    };
    /**
     * Get expirty Date
     *
     * @returns {string}
     */
    Card.prototype.getExpiryDate = function () {
        return this._expiryDate;
    };
    /**
     * Set card holder
     *
     * @param {string} cardHolder
     * @returns {Card}
     */
    Card.prototype.setCardHolder = function (cardHolder) {
        this._cardHolder = cardHolder;
        return this;
    };
    /**
     * Get card holder
     *
     * @returns {string}
     */
    Card.prototype.getCardHolder = function () {
        return this._cardHolder;
    };
    /**
     * Set brand name
     *
     * @param {string} brand
     * @returns {Card}
     */
    Card.prototype.setBrand = function (brand) {
        this._brand = brand;
        return this;
    };
    /**
     * Get brand name
     *
     * @returns {string}
     */
    Card.prototype.getBrand = function () {
        return this._brand;
    };
    /**
     * Set recurring option
     *
     * @param {string} recurring
     * @returns {Card}
     */
    Card.prototype.setRecurring = function (recurring) {
        this._recurring = recurring;
        return this;
    };
    /**
     * Get recurring option
     *
     * @returns {string}
     */
    Card.prototype.getRecurring = function () {
        return this._recurring;
    };
    /**
     * Set card detail
     *
     * @param {object} cardDetail
     * @returns {Card}
     */
    Card.prototype.setCardDetails = function (cardDetails) {
        this._cardDetails = cardDetails;
        return this;
    };
    /**
     * Get card detail
     *
     * @returns {object}
     */
    Card.prototype.getCardDetails = function () {
        return this._cardDetails;
    };
    /**
     * Set 3ds option
     *
     * @param {string} expiryDate
     * @returns {Card}
     */
    Card.prototype.set3ds = function (secure) {
        this._3ds = secure;
        return this;
    };
    /**
     * Get 3ds option
     *
     * @returns {string}
     */
    Card.prototype.get3ds = function () {
        return this._3ds;
    };
    return Card;
}(AbstractPaymentType_1.default));
exports.default = Card;
//# sourceMappingURL=Card.js.map