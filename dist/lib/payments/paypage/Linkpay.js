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
var Linkpay = /** @class */ (function (_super) {
    __extends(Linkpay, _super);
    function Linkpay() {
        var _this = _super.call(this) || this;
        _this.additionalAttributes = {};
        _this.resources = new Resources_1.default();
        _this.payloadObj = {};
        return _this;
    }
    /**
     * Get url end point
     *
     * @returns {string}
     */
    Linkpay.prototype.getTypeUrl = function () {
        return this.typeUrl;
    };
    /**
     * Get url end point
     *
     * @returns {string}
     */
    Linkpay.prototype.resetPayload = function () {
        this.payloadObj = {};
        return this;
    };
    /**
     * Get Payload
     *
     * @returns {any}
     */
    Linkpay.prototype.getPayload = function () {
        return this.payloadObj;
    };
    /**
     * Get Amount
     *
     * @param {string} amount
     * @returns {string}
     */
    Linkpay.prototype.getAmount = function () {
        return this.amount;
    };
    /**
     * Set amount
     *
     * @param {string} amount
     * @returns {Card}
     */
    Linkpay.prototype.setAmount = function (amount) {
        this.amount = amount;
        this.payloadObj.amount = amount;
        return this;
    };
    /**
     * Get currency
     *
     * @returns {string}
     */
    Linkpay.prototype.getCurrency = function () {
        return this.currency;
    };
    /**
     * Set currency
     *
     * @param {string} currency
     * @returns {Linkpay}
     */
    Linkpay.prototype.setCurrency = function (currency) {
        this.currency = currency;
        this.payloadObj.currency = currency;
        return this;
    };
    /**
     * Get return URL
     *
     * @returns {string}
     */
    Linkpay.prototype.getReturnUrl = function () {
        return this.returnUrl;
    };
    /**
     * Set return URL
     *
     * @param {string} returnUrl
     * @returns {Linkpay}
     */
    Linkpay.prototype.setReturnUrl = function (returnUrl) {
        this.returnUrl = returnUrl;
        this.payloadObj.returnUrl = returnUrl;
        return this;
    };
    /**
     * Get logo image
     *
     * @returns {string}
     */
    Linkpay.prototype.getLogoImage = function () {
        return this.logoImage;
    };
    /**
     * Set logo image
     *
     * @param {string} logoImage
     * @returns {Linkpay}
     */
    Linkpay.prototype.setLogoImage = function (logoImage) {
        this.logoImage = logoImage;
        this.payloadObj.logoImage = logoImage;
        return this;
    };
    /**
     * Get fullpage image
     *
     * @returns {string}
     */
    Linkpay.prototype.getFullPageImage = function () {
        return this.fullPageImage;
    };
    /**
     * Set fullpage image
     *
     * @param {string} fullPageImage
     * @returns {Linkpay}
     */
    Linkpay.prototype.setFullPageImage = function (fullPageImage) {
        this.fullPageImage = fullPageImage;
        this.payloadObj.fullPageImage = fullPageImage;
        return this;
    };
    /**
     * Get shop name
     *
     * @returns {string}
     */
    Linkpay.prototype.getShopName = function () {
        return this.shopName;
    };
    /**
     * Set shop name
     *
     * @param {string} shopName
     * @returns {Linkpay}
     */
    Linkpay.prototype.setShopName = function (shopName) {
        this.shopName = shopName;
        this.payloadObj.shopName = shopName;
        return this;
    };
    /**
     * Get shop description
     *
     * @returns {string}
     */
    Linkpay.prototype.getShopDescription = function () {
        return this.shopDescription;
    };
    /**
     * Set shop description
     *
     * @param {string} shopDescription
     * @returns {Linkpay}
     */
    Linkpay.prototype.setShopDescription = function (shopDescription) {
        this.shopDescription = shopDescription;
        this.payloadObj.shopDescription = shopDescription;
        return this;
    };
    /**
     * Get tagline
     *
     * @returns {string}
     */
    Linkpay.prototype.getTagline = function () {
        return this.tagline;
    };
    /**
     * Set tagline
     *
     * @param {string} tagline
     * @returns {Linkpay}
     */
    Linkpay.prototype.setTagline = function (tagline) {
        this.tagline = tagline;
        this.payloadObj.tagline = tagline;
        return this;
    };
    /**
     * Get card3ds
     *
     * @returns {string}
     */
    Linkpay.prototype.getCard3ds = function () {
        return this.card3ds;
    };
    /**
     * Set card3ds
     *
     * @param {string} card3ds
     * @returns {Linkpay}
     */
    Linkpay.prototype.setCard3ds = function (card3ds) {
        this.card3ds = card3ds;
        this.payloadObj.card3ds = card3ds;
        return this;
    };
    /**
     * Get Invoice Id
     *
     * @returns {string}
     */
    Linkpay.prototype.getInvoiceId = function () {
        return this.invoiceId;
    };
    /**
     * Set Additional attributes
     *
     * @param {object} additionalAttributes
     * @returns {Linkpay}
     */
    Linkpay.prototype.setAdditionalAttributes = function (additionalAttributes) {
        this.additionalAttributes = additionalAttributes;
        this.payloadObj.additionalAttributes = additionalAttributes;
        return this;
    };
    /**
     * Get Additional attributes
     *
     * @returns {object}
     */
    Linkpay.prototype.getAdditionalAttributes = function () {
        return this.additionalAttributes;
    };
    /**
     * Set Invoice Id
     *
     * @param {string} invoiceId
     * @returns {Linkpay}
     */
    Linkpay.prototype.setInvoiceId = function (invoiceId) {
        this.invoiceId = invoiceId;
        this.payloadObj.invoiceId = invoiceId;
        return this;
    };
    /**
     * Get terms and condition URL
     *
     * @returns {string}
     */
    Linkpay.prototype.getTermsAndConditionUrl = function () {
        return this.termsAndConditionUrl;
    };
    /**
     * Set terms and condition URL
     *
     * @param {string} termsAndConditionUrl
     * @returns {Linkpay}
     */
    Linkpay.prototype.setTermsAndConditionUrl = function (termsAndConditionUrl) {
        this.termsAndConditionUrl = termsAndConditionUrl;
        this.payloadObj.termsAndConditionUrl = termsAndConditionUrl;
        return this;
    };
    /**
     * Get privacy URL
     *
     * @returns {string}
     */
    Linkpay.prototype.getPrivacyPolicyUrl = function () {
        return this.privacyPolicyUrl;
    };
    /**
     * Set privacy URL
     *
     * @param {string} privacyPolicyUrl
     * @returns {Linkpay}
     */
    Linkpay.prototype.setPrivacyPolicyUrl = function (privacyPolicyUrl) {
        this.privacyPolicyUrl = privacyPolicyUrl;
        this.payloadObj.privacyPolicyUrl = privacyPolicyUrl;
        return this;
    };
    /**
     * Get Imprint URL
     *
     * @returns {string}
     */
    Linkpay.prototype.getImprintUrl = function () {
        return this.imprintUrl;
    };
    /**
     * Set Imprint URL
     *
     * @param {string} imprintUrl
     * @returns {Linkpay}
     */
    Linkpay.prototype.setImprintUrl = function (imprintUrl) {
        this.imprintUrl = imprintUrl;
        this.payloadObj.imprintUrl = imprintUrl;
        return this;
    };
    /**
     * Get Help URL
     *
     * @returns {string}
     */
    Linkpay.prototype.getHelpUrl = function () {
        return this.helpUrl;
    };
    /**
     * Set Help URL
     *
     * @param {string} helpUrl
     * @returns {Linkpay}
     */
    Linkpay.prototype.setHelpUrl = function (helpUrl) {
        this.helpUrl = helpUrl;
        this.payloadObj.helpUrl = helpUrl;
        return this;
    };
    /**
     * Set contact URL
     *
     * @returns {string}
     */
    Linkpay.prototype.getContactUrl = function () {
        return this.contactUrl;
    };
    /**
     * Set contact URL
     *
     * @param {string} contactUrl
     * @returns {Linkpay}
     */
    Linkpay.prototype.setContactUrl = function (contactUrl) {
        this.contactUrl = contactUrl;
        this.payloadObj.contactUrl = contactUrl;
        return this;
    };
    /**
     * Get redirectUrl
     *
     * @returns {string}
     */
    Linkpay.prototype.getRedirectUrl = function () {
        return this.redirectUrl;
    };
    /**
     * Set redirectUrl
     *
     * @param {string} redirectUrl
     * @returns {Linkpay}
     */
    Linkpay.prototype.setRedirectUrl = function (redirectUrl) {
        this.redirectUrl = redirectUrl;
        return this;
    };
    /**
     * Get action
     *
     * @returns {string}
     */
    Linkpay.prototype.getAction = function () {
        return this.action;
    };
    /**
     * Set redirectUrl
     *
     * @param {string} redirectUrl
     * @returns {Linkpay}
     */
    Linkpay.prototype.setAction = function (action) {
        this.action = action;
        return this;
    };
    /**
     * Get resources
     *
     * @returns {Resources}
     */
    Linkpay.prototype.getResources = function () {
        return this.resources;
    };
    /**
     * Set excludeTypes
     *
     * @param {Array<string>} excludeTypes
     * @returns {Linkpay}
     */
    Linkpay.prototype.setExcludeTypes = function (excludeTypes) {
        this.excludeTypes = excludeTypes;
        this.payloadObj.excludeTypes = excludeTypes;
        return this;
    };
    /**
     * Get excludeTypes
     *
     * @returns {Array<string>}
     */
    Linkpay.prototype.getExcludeTypes = function () {
        return this.excludeTypes;
    };
    /**
     * Set alias
     *
     * @param {string} alias
     * @returns {Linkpay}
     */
    Linkpay.prototype.setAlias = function (alias) {
        this.alias = alias;
        this.payloadObj.alias = alias;
        return this;
    };
    /**
     * Get alias
     *
     * @returns {string}
     */
    Linkpay.prototype.getAlias = function () {
        return this.alias;
    };
    /**
     * Set invoiceIdRequired
     *
     * @param {string} invoiceIdRequired
     * @returns {Linkpay}
     */
    Linkpay.prototype.setInvoiceIdRequired = function (invoiceIdRequired) {
        this.invoiceIdRequired = invoiceIdRequired;
        this.payloadObj.invoiceIdRequired = invoiceIdRequired;
        return this;
    };
    /**
     * Get invoiceIdRequired
     *
     * @returns {string}
     */
    Linkpay.prototype.getInvoiceIdRequired = function () {
        return this.invoiceIdRequired;
    };
    /**
     * Set orderId
     *
     * @param {string} orderId
     * @returns {Linkpay}
     */
    Linkpay.prototype.setOrderId = function (orderId) {
        this.orderId = orderId;
        this.payloadObj.orderId = orderId;
        return this;
    };
    /**
     * Get orderId
     *
     * @returns {string}
     */
    Linkpay.prototype.getOrderId = function () {
        return this.orderId;
    };
    /**
     * Set orderIdRequired
     *
     * @param {string} orderIdRequired
     * @returns {Linkpay}
     */
    Linkpay.prototype.setOrderIdRequired = function (orderIdRequired) {
        this.orderIdRequired = orderIdRequired;
        this.payloadObj.orderIdRequired = orderIdRequired;
        return this;
    };
    /**
     * Get orderIdRequired
     *
     * @returns {string}
     */
    Linkpay.prototype.getOrderIdRequired = function () {
        return this.orderIdRequired;
    };
    /**
     * Set billingAddressRequired
     *
     * @param {string} billingAddressRequired
     * @returns {Linkpay}
     */
    Linkpay.prototype.setBillingAddressRequired = function (billingAddressRequired) {
        this.billingAddressRequired = billingAddressRequired;
        this.payloadObj.billingAddressRequired = billingAddressRequired;
        return this;
    };
    /**
     * Get billingAddressRequired
     *
     * @returns {string}
     */
    Linkpay.prototype.getBillingAddressRequired = function () {
        return this.billingAddressRequired;
    };
    /**
     * Set shippingAddressRequired
     *
     * @param {string} shippingAddressRequired
     * @returns {Linkpay}
     */
    Linkpay.prototype.setShippingAddressRequired = function (shippingAddressRequired) {
        this.shippingAddressRequired = shippingAddressRequired;
        this.payloadObj.shippingAddressRequired = shippingAddressRequired;
        return this;
    };
    /**
     * Get shippingAddressRequired
     *
     * @returns {string}
     */
    Linkpay.prototype.getShippingAddressRequired = function () {
        return this.shippingAddressRequired;
    };
    /**
     * Set expirationDate
     *
     * @param {string} expirationDate
     * @returns {Linkpay}
     */
    Linkpay.prototype.setExpirationDate = function (expirationDate) {
        this.expires = expirationDate;
        this.payloadObj.expires = expirationDate;
        return this;
    };
    /**
     * Get expirationDate
     *
     * @returns {string}
     */
    Linkpay.prototype.getExpirationDate = function () {
        return this.expires;
    };
    /**
     * Set intention
     *
     * @param {string} intention
     * @returns {Linkpay}
     */
    Linkpay.prototype.setIntention = function (intention) {
        this.intention = intention;
        this.payloadObj.intention = intention;
        return this;
    };
    /**
     * Get intention
     *
     * @returns {string}
     */
    Linkpay.prototype.getIntention = function () {
        return this.intention;
    };
    /**
     * Set css
     *
     * @param {any} css
     * @returns {Linkpay}
     */
    Linkpay.prototype.setCss = function (css) {
        this.css = css;
        this.payloadObj.css = css;
        return this;
    };
    /**
     * Get css
     *
     * @returns {any}
     */
    Linkpay.prototype.getCss = function () {
        return this.css;
    };
    /**
     * Set resources
     *
     * @param {*} resources
     */
    Linkpay.prototype.setResources = function (resources) {
        var customerId = resources.customerId, metadataId = resources.metadataId, paymentId = resources.paymentId, basketId = resources.basketId;
        this.resources
            .setCustomerId(customerId)
            .setMetadataId(metadataId)
            .setPaymentId(paymentId)
            .setBasketId(basketId);
        var resourcesObj = {
            customerId: customerId,
            metadataId: metadataId,
            paymentId: paymentId,
            basketId: basketId
        };
        this.payloadObj.resources = resourcesObj;
        return this;
    };
    return Linkpay;
}(AbstractPaymentType_1.default));
exports.default = Linkpay;
//# sourceMappingURL=Linkpay.js.map