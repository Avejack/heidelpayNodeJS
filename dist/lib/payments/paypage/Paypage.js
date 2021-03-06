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
var AbstractPaymentType_1 = require("../types/AbstractPaymentType");
var Resources_1 = require("../business/Resources");
var Paypage = /** @class */ (function (_super) {
    __extends(Paypage, _super);
    function Paypage() {
        var _this = _super.call(this) || this;
        _this.additionalAttributes = {};
        _this.resources = new Resources_1.default();
        return _this;
    }
    /**
     * Get url end point
     *
     * @returns {string}
     */
    Paypage.prototype.getTypeUrl = function () {
        return this.typeUrl;
    };
    /**
     * Get Payload
     *
     * @returns
     */
    Paypage.prototype.getPayload = function () {
        var payload = {
            amount: this.getAmount(),
            currency: this.getCurrency(),
            returnUrl: this.getReturnUrl(),
            logoImage: this.getLogoImage(),
            fullPageImage: this.getFullPageImage(),
            shopName: this.getShopName(),
            shopDescription: this.getShopDescription(),
            tagline: this.getTagline(),
            card3ds: this.getCard3ds(),
            invoiceId: this.getInvoiceId(),
            termsAndConditionUrl: this.getTermsAndConditionUrl(),
            privacyPolicyUrl: this.getPrivacyPolicyUrl(),
            impressumUrl: this.getImpressumUrl(),
            helpUrl: this.getHelpUrl(),
            contactUrl: this.getContactUrl(),
            resources: this.getResources(),
            excludeTypes: this.getExcludeTypes()
        };
        return payload;
    };
    /**
     * Get Amount
     *
     * @param {string} amount
     * @returns {string}
     */
    Paypage.prototype.getAmount = function () {
        return this.amount;
    };
    /**
     * Set amount
     *
     * @param {string} amount
     * @returns {Card}
     */
    Paypage.prototype.setAmount = function (amount) {
        this.amount = amount;
        return this;
    };
    /**
     * Get currency
     *
     * @returns {string}
     */
    Paypage.prototype.getCurrency = function () {
        return this.currency;
    };
    /**
     * Set currency
     *
     * @param {string} currency
     * @returns {Paypage}
     */
    Paypage.prototype.setCurrency = function (currency) {
        this.currency = currency;
        return this;
    };
    /**
     * Get return URL
     *
     * @returns {string}
     */
    Paypage.prototype.getReturnUrl = function () {
        return this.returnUrl;
    };
    /**
     * Set return URL
     *
     * @param {string} returnUrl
     * @returns {Paypage}
     */
    Paypage.prototype.setReturnUrl = function (returnUrl) {
        this.returnUrl = returnUrl;
        return this;
    };
    /**
     * Get logo image
     *
     * @returns {string}
     */
    Paypage.prototype.getLogoImage = function () {
        return this.logoImage;
    };
    /**
     * Set logo image
     *
     * @param {string} logoImage
     * @returns {Paypage}
     */
    Paypage.prototype.setLogoImage = function (logoImage) {
        this.logoImage = logoImage;
        return this;
    };
    /**
     * Get fullpage image
     *
     * @returns {string}
     */
    Paypage.prototype.getFullPageImage = function () {
        return this.fullPageImage;
    };
    /**
     * Set fullpage image
     *
     * @param {string} fullPageImage
     * @returns {Paypage}
     */
    Paypage.prototype.setFullPageImage = function (fullPageImage) {
        this.fullPageImage = fullPageImage;
        return this;
    };
    /**
     * Get shop name
     *
     * @returns {string}
     */
    Paypage.prototype.getShopName = function () {
        return this.shopName;
    };
    /**
     * Set shop name
     *
     * @param {string} shopName
     * @returns {Paypage}
     */
    Paypage.prototype.setShopName = function (shopName) {
        this.shopName = shopName;
        return this;
    };
    /**
     * Get shop description
     *
     * @returns {string}
     */
    Paypage.prototype.getShopDescription = function () {
        return this.shopDescription;
    };
    /**
     * Set shop description
     *
     * @param {string} shopDescription
     * @returns {Paypage}
     */
    Paypage.prototype.setShopDescription = function (shopDescription) {
        this.shopDescription = shopDescription;
        return this;
    };
    /**
     * Get tagline
     *
     * @returns {string}
     */
    Paypage.prototype.getTagline = function () {
        return this.tagline;
    };
    /**
     * Set tagline
     *
     * @param {string} tagline
     * @returns {Paypage}
     */
    Paypage.prototype.setTagline = function (tagline) {
        this.tagline = tagline;
        return this;
    };
    /**
     * Get card3ds
     *
     * @returns {string}
     */
    Paypage.prototype.getCard3ds = function () {
        return this.card3ds;
    };
    /**
     * Set card3ds
     *
     * @param {string} card3ds
     * @returns {Paypage}
     */
    Paypage.prototype.setCard3ds = function (card3ds) {
        this.card3ds = card3ds;
        return this;
    };
    /**
     * Get Invoice Id
     *
     * @returns {string}
     */
    Paypage.prototype.getInvoiceId = function () {
        return this.invoiceId;
    };
    /**
     * Set Additional attributes
     *
     * @param {object} additionalAttributes
     * @returns {Paypage}
     */
    Paypage.prototype.setAdditionalAttributes = function (additionalAttributes) {
        this.additionalAttributes = additionalAttributes;
        return this;
    };
    /**
     * Get Additional attributes
     *
     * @returns {object}
     */
    Paypage.prototype.getAdditionalAttributes = function () {
        return this.additionalAttributes;
    };
    /**
     * Set Invoice Id
     *
     * @param {string} invoiceId
     * @returns {Paypage}
     */
    Paypage.prototype.setInvoiceId = function (invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    };
    /**
     * Get terms and condition URL
     *
     * @returns {string}
     */
    Paypage.prototype.getTermsAndConditionUrl = function () {
        return this.termsAndConditionUrl;
    };
    /**
     * Set terms and condition URL
     *
     * @param {string} termsAndConditionUrl
     * @returns {Paypage}
     */
    Paypage.prototype.setTermsAndConditionUrl = function (termsAndConditionUrl) {
        this.termsAndConditionUrl = termsAndConditionUrl;
        return this;
    };
    /**
     * Get privacy URL
     *
     * @returns {string}
     */
    Paypage.prototype.getPrivacyPolicyUrl = function () {
        return this.privacyPolicyUrl;
    };
    /**
     * Set privacy URL
     *
     * @param {string} privacyPolicyUrl
     * @returns {Paypage}
     */
    Paypage.prototype.setPrivacyPolicyUrl = function (privacyPolicyUrl) {
        this.privacyPolicyUrl = privacyPolicyUrl;
        return this;
    };
    /**
     * Get Impressum URL
     *
     * @returns {string}
     */
    Paypage.prototype.getImpressumUrl = function () {
        return this.impressumUrl;
    };
    /**
     * Set Impresssum URL
     *
     * @param {string} impressumUrl
     * @returns {Paypage}
     */
    Paypage.prototype.setImpressumUrl = function (impressumUrl) {
        this.impressumUrl = impressumUrl;
        return this;
    };
    /**
     * Get Help URL
     *
     * @returns {string}
     */
    Paypage.prototype.getHelpUrl = function () {
        return this.helpUrl;
    };
    /**
     * Set Help URL
     *
     * @param {string} helpUrl
     * @returns {Paypage}
     */
    Paypage.prototype.setHelpUrl = function (helpUrl) {
        this.helpUrl = helpUrl;
        return this;
    };
    /**
     * Set contact URL
     *
     * @returns {string}
     */
    Paypage.prototype.getContactUrl = function () {
        return this.contactUrl;
    };
    /**
     * Set contact URL
     *
     * @param {string} contactUrl
     * @returns {Paypage}
     */
    Paypage.prototype.setContactUrl = function (contactUrl) {
        this.contactUrl = contactUrl;
        return this;
    };
    /**
     * Get redirectUrl
     *
     * @returns {string}
     */
    Paypage.prototype.getRedirectUrl = function () {
        return this.redirectUrl;
    };
    /**
     * Set redirectUrl
     *
     * @param {string} redirectUrl
     * @returns {Paypage}
     */
    Paypage.prototype.setRedirectUrl = function (redirectUrl) {
        this.redirectUrl = redirectUrl;
        return this;
    };
    /**
     * Get action
     *
     * @returns {string}
     */
    Paypage.prototype.getAction = function () {
        return this.action;
    };
    /**
     * Set redirectUrl
     *
     * @param {string} redirectUrl
     * @returns {Paypage}
     */
    Paypage.prototype.setAction = function (action) {
        this.action = action;
        return this;
    };
    /**
     * Get resources
     *
     * @returns {Resources}
     */
    Paypage.prototype.getResources = function () {
        return this.resources;
    };
    /**
     * Set excludeTypes
     *
     * @param {Array<string>} excludeTypes
     * @returns {Paypage}
     */
    Paypage.prototype.setExcludeTypes = function (excludeTypes) {
        this.excludeTypes = excludeTypes;
        return this;
    };
    /**
     * Get excludeTypes
     *
     * @returns {Array<string>}
     */
    Paypage.prototype.getExcludeTypes = function () {
        return this.excludeTypes;
    };
    /**
     * Set resources
     *
     * @param {*} resources
     */
    Paypage.prototype.setResources = function (resources) {
        this.resources
            .setCustomerId(resources.customerId)
            .setMetadataId(resources.metadataId)
            .setPaymentId(resources.paymentId)
            .setBasketId(resources.basketId);
    };
    return Paypage;
}(AbstractPaymentType_1.default));
exports.default = Paypage;
//# sourceMappingURL=Paypage.js.map