"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FetchAdapter_1 = require("../adapters/FetchAdapter");
var CreatePaymentType_1 = require("./CreatePaymentType");
var FetchPayment_1 = require("./FetchPayment");
var FetchPaymentType_1 = require("./FetchPaymentType");
var CreateCustomer_1 = require("./CreateCustomer");
var UpdateCustomer_1 = require("./UpdateCustomer");
var DeleteCustomer_1 = require("./DeleteCustomer");
var FetchCustomer_1 = require("./FetchCustomer");
var CreateMetadata_1 = require("./CreateMetadata");
var FetchMetadata_1 = require("./FetchMetadata");
var CreateBasket_1 = require("./CreateBasket");
var FetchBasket_1 = require("./FetchBasket");
var UpdateBasket_1 = require("./UpdateBasket");
var CreateRecurring_1 = require("./CreateRecurring");
var Authorization_1 = require("./Authorization");
var Charge_1 = require("./Charge");
var ChargeAuthorization_1 = require("./ChargeAuthorization");
var CancelAuthorization_1 = require("./CancelAuthorization");
var CancelCharge_1 = require("./CancelCharge");
var Shipment_1 = require("./Shipment");
var InitPaypage_1 = require("./InitPaypage");
var InitLinkpay_1 = require("./InitLinkpay");
var UpdateLinkpay_1 = require("./UpdateLinkpay");
var DeleteLinkpay_1 = require("./DeleteLinkpay");
var Payout_1 = require("./Payout");
var FetchPayout_1 = require("./FetchPayout");
var FetchHirePurchasePlan_1 = require("./FetchHirePurchasePlan");
var UpdateHirePurchase_1 = require("./UpdateHirePurchase");
var RegisterWebhook_1 = require("./RegisterWebhook");
var FetchWebhook_1 = require("./FetchWebhook");
var UpdateWebhook_1 = require("./UpdateWebhook");
var DeleteWebhook_1 = require("./DeleteWebhook");
var PaymentService = /** @class */ (function () {
    function PaymentService(heidelpay, locale, env) {
        this.heidelpay = heidelpay;
        this.requestAdapter = new FetchAdapter_1.FetchAdapter(locale, env);
    }
    /**
     * Get Heidelpay instance
     *
     * @returns {Heidelpay}
     */
    PaymentService.prototype.getHeidelpay = function () {
        return this.heidelpay;
    };
    /**
     * Get request adapter
     *
     * @returns {FetchAdapter}
     */
    PaymentService.prototype.getRequestAdapter = function () {
        return this.requestAdapter;
    };
    /**
     * Create payment type
     *
     * @param {PaymentType} paymentType
     * @returns {Promise<PaymentType>}
     */
    PaymentService.prototype.createPaymentType = function (paymentType) {
        return CreatePaymentType_1.default(paymentType, this);
    };
    /**
     * Fetch a payment
     *
     * @param {string} paymentId
     * @returns {Promise<Payment>}
     */
    PaymentService.prototype.fetchPayment = function (paymentId) {
        return FetchPayment_1.default(paymentId, this);
    };
    /**
     * Fetch a payment type
     *
     * @param {string} paymentTypeId
     * @returns {Promise<PaymentType>}
     */
    PaymentService.prototype.fetchPaymentType = function (paymentTypeId) {
        return FetchPaymentType_1.default(paymentTypeId, this);
    };
    /**
     * Create customer
     *
     * @param {Customer} customer
     * @returns {Promise<Customer>}
     */
    PaymentService.prototype.createCustomer = function (customer) {
        return CreateCustomer_1.default(customer, this);
    };
    /**
     * Fetch customer info by customer Id
     *
     * @param {string} customerId
     * @returns {Promise<Customer>}
     */
    PaymentService.prototype.fetchCustomer = function (customerId) {
        return FetchCustomer_1.default(customerId, this);
    };
    /**
     * Update data customer
     *
     * @param {string} customerId
     * @param {Customer} customer
     * @returns {Promise<Customer>}
     */
    PaymentService.prototype.updateCustomer = function (customerId, customer) {
        return UpdateCustomer_1.default(customerId, customer, this);
    };
    /**
     * Delete a customer
     *
     * @param {string} customerId
     * @returns {Promise<boolean>}
     */
    PaymentService.prototype.deleteCustomer = function (customerId) {
        return DeleteCustomer_1.default(customerId, this);
    };
    /**
     * Create metadata
     *
     * @param {Metadata} metadata
     * @returns {Promise<Metadata>}
     */
    PaymentService.prototype.createMetadata = function (metadata) {
        return CreateMetadata_1.default(metadata, this);
    };
    /**
     * Fetch metadata
     *
     * @param {Metadata} metadata
     * @returns {Promise<Metadata>}
     */
    PaymentService.prototype.fetchMetadata = function (metadataId) {
        return FetchMetadata_1.default(metadataId, this);
    };
    /**
     * Create basket
     *
     * @param {Basket} baskset
     * @returns {Promise<Basket>}
     */
    PaymentService.prototype.createBasket = function (basket) {
        return CreateBasket_1.default(basket, this);
    };
    /**
     * Fetch basket
     *
     * @param {Basket} baskset
     * @returns {Promise<Basket>}
     */
    PaymentService.prototype.fetchBasket = function (basketId) {
        return FetchBasket_1.default(basketId, this);
    };
    /**
     * Fetch basket
     *
     * @param {Basket} baskset
     * @returns {Promise<Basket>}
     */
    PaymentService.prototype.updateBasket = function (basketId, basket) {
        return UpdateBasket_1.default(basketId, basket, this);
    };
    /**
     * Authorize a payment
     *
     * @param {authorizeObject} args
     * @returns {Promise<Authorization>}
     */
    PaymentService.prototype.authorize = function (args) {
        return Authorization_1.default(args, this);
    };
    /**
     * Charge a payment
     *
     * @param {chargeObject} args
     * @returns {Promise<Charge>}
     */
    PaymentService.prototype.charge = function (args) {
        return Charge_1.default(args, this);
    };
    /**
     * Charge after authorization
     *
     * @param {chargeAuthorizeObject} args
     * @returns {Promise<Charge>}
     */
    PaymentService.prototype.chargeAuthorization = function (args) {
        return ChargeAuthorization_1.default(args, this);
    };
    /**
     * Reversal a payment
     *
     * @param {cancelAuthorizeObject} args
     * @returns {Promise<Cancel>}
     */
    PaymentService.prototype.cancelAuthorization = function (args) {
        return CancelAuthorization_1.default(args, this);
    };
    /**
     * Refund a payment
     *
     * @param {cancelChargeObject} args
     * @returns {Promise<Cancel>}
     */
    PaymentService.prototype.cancelCharge = function (args) {
        return CancelCharge_1.default(args, this);
    };
    /**
     * Shipment
     *
     * @param {string} paymentId
     * @returns {Promise<Shipment>}
     */
    PaymentService.prototype.shipment = function (paymentId, args) {
        return Shipment_1.default(paymentId, args, this);
    };
    /**
     * Init authorize paypage
     *
     * @param {Paypage} paypage
     * @returns {Promise<Paypage>}
     */
    PaymentService.prototype.initAuthorizePaypage = function (paypage) {
        return InitPaypage_1.default(paypage, 'authorize', this);
    };
    /**
     * Init charge paypage
     *
     * @param {Paypage} paypage
     * @returns {Promise<Paypage>}
     */
    PaymentService.prototype.initChargePaypage = function (paypage) {
        return InitPaypage_1.default(paypage, 'charge', this);
    };
    /**
     * Init authorize linkpay
     *
     * @param {Linkpay} linkpay
     * @returns {Promise<Linkpay>}
     */
    PaymentService.prototype.initAuthorizeLinkpay = function (linkpay) {
        return InitLinkpay_1.default(linkpay, 'authorize', this);
    };
    /**
     * Init charge linkpay
     *
     * @param {Linkpay} linkpay
     * @returns {Promise<Linkpay>}
     */
    PaymentService.prototype.initChargeLinkpay = function (linkpay) {
        return InitLinkpay_1.default(linkpay, 'charge', this);
    };
    /**
     * Update linkpay
     *
     * @param {string} linkpayIdOrAlias
     * @param {updateLinkpayObject} linkpayObj
     * @returns {Promise<Linkpay>}
     */
    PaymentService.prototype.updateLinkpay = function (linkpayIdOrAlias, linkpay) {
        return UpdateLinkpay_1.default(linkpayIdOrAlias, linkpay, this);
    };
    /**
     * Delete linkpay
     *
     * @param {string} linkpayIdOrAlias
     * @returns {Promise<boolean>}
     */
    PaymentService.prototype.deleteLinkpay = function (linkpayIdOrAlias) {
        return DeleteLinkpay_1.default(linkpayIdOrAlias, this);
    };
    /**
     * Init charge paypage
     *
     * @param {Paypage} paypage
     * @returns {Promise<Paypage>}
     */
    PaymentService.prototype.payout = function (args) {
        return Payout_1.default(args, this);
    };
    /**
     * Fetch a payout object
     *
     * @param {string} paymentId
     * @param {string} payoutId
     * @returns {Promise<Payment>}
     */
    PaymentService.prototype.fetchPayout = function (paymentId, payoutId) {
        return FetchPayout_1.default(paymentId, payoutId, this);
    };
    /**
     * Fetch hire purchase plans
     *
     * @param {string} amount
     * @param {string} currency
     * @param {string} effectiveInterestRate
     * @param {string} orderDate
     * @returns {Promise<Payment>}
     */
    PaymentService.prototype.fetchHirePurchasePlan = function (amount, currency, effectiveInterestRate, orderDate) {
        return FetchHirePurchasePlan_1.default(amount, currency, effectiveInterestRate, orderDate, this);
    };
    /**
    * Update HirePurchase
    *
    * @param {string} hirePurchaseId
    * @param {updateHirePurchaseObject} hirePurchase
    * @returns {Promise<HirePurchase>}
    */
    PaymentService.prototype.updateHirePurchase = function (hirePurchaseId, hirePurchase) {
        return UpdateHirePurchase_1.default(hirePurchaseId, hirePurchase, this);
    };
    /**
     * Start Recurring
     *
     * @param {string} paymentId
     * @param {recurringObj} args
     */
    PaymentService.prototype.startRecurring = function (paymentId, args) {
        return CreateRecurring_1.default(paymentId, args, this);
    };
    /**
     * Register Webhook
     *
     * @param {webhookObject} args
     * @returns {Promise<Webhook>}
     */
    PaymentService.prototype.registerWebhook = function (args) {
        return RegisterWebhook_1.default(args, this);
    };
    /**
    * Fetch Webhook
    *
    * @param {string} id
    * @returns {Promise<Webhook>}
    */
    PaymentService.prototype.fetchWebhook = function (id) {
        return FetchWebhook_1.default(this, id);
    };
    /**
    * Update Webhook
    *
    * @param {string} id
    * @returns {Promise<Webhook>}
    */
    PaymentService.prototype.updateWebhook = function (id, args) {
        return UpdateWebhook_1.default(id, args, this);
    };
    /**
    * Delete Webhook
    *
    * @param {string} id
    * @returns {Promise<Webhook>}
    */
    PaymentService.prototype.deleteWebhook = function (id) {
        return DeleteWebhook_1.default(this, id);
    };
    return PaymentService;
}());
exports.default = PaymentService;
//# sourceMappingURL=PaymentService.js.map