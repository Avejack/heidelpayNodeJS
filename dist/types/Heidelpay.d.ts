import { Customer } from './payments/Customer';
import Metadata from './payments/Metadata';
import Basket from './payments/Basket';
import PaymentType from './payments/types/PaymentType';
import Authorization, { authorizeObject, chargeAuthorizeObject } from './payments/business/Authorization';
import Payout, { payoutObject } from './payments/business/Payout';
import Charge, { chargeObject } from './payments/business/Charge';
import Cancel, { cancelAuthorizeObject, cancelChargeObject } from './payments/business/Cancel';
import Paypage from './payments/paypage/Paypage';
import Linkpay from './payments/paypage/Linkpay';
import Payment from './payments/business/Payment';
import AbstractPaymentType from './payments/types/AbstractPaymentType';
import Shipment, { shipmentObject } from './payments/business/Shipment';
import Recurring, { recurringObject } from './payments/business/Recurring';
import HirePurchasePlan from './payments/types/HirePurchasePlan';
import HirePurchase, { updateHirePurchaseObject } from './payments/types/HirePurchase';
import Webhook, { webhookObject } from './payments/business/Webhook';
export default class Heidelpay {
    private paymentService;
    private privateKey;
    constructor(privateKey: string, locale?: string, env?: string);
    /**
     * Get SDK Version
     *
     * @returns {string}
     */
    getVersion(): string;
    /**
     * Get private key
     *
     * @returns {string}
     */
    getPrivateKey(): string;
    /**
     * Create a payment
     *
     * @param {PaymentType} paymentType
     * @returns {PaymentType}
     */
    createPaymentType(paymentType: AbstractPaymentType): Promise<PaymentType>;
    /**
     * Create new customer
     *
     * @param {Customer} customer
     * @returns {Customer}
     */
    createCustomer(customer: Customer): Promise<Customer>;
    /**
     * Fetch a customer
     *
     * @param {string} customerId
     * @returns {Promise}
     */
    fetchCustomer(customerId: string): Promise<Customer>;
    /**
     * Update customer
     *
     * @param {string} customerId
     * @param {Customer} customer
     * @returns {Promise<Customer>}
     */
    updateCustomer(customerId: string, customer: Customer): Promise<Customer>;
    /**
     * Delete a customer
     *
     * @param {string} customerId
     * @returns {Promise<boolean>}
     */
    deleteCustomer(customerId: string): Promise<boolean>;
    /**
     * Create metadata
     *
     * @param {Metadata} metadata
     */
    createMetadata(metadata: Metadata): Promise<Metadata>;
    /**
     * Fetch metadata information
     *
     * @param metadataId
     */
    fetchMetadata(metadataId: string): Promise<Metadata>;
    /**
     * Create a basket
     *
     * @param {Basket} basket
     * @returns {Basket}
     */
    createBasket(basket: Basket): Promise<Basket>;
    /**
     * Fetch a basket
     *
     * @param {Basket} basket
     * @returns {Basket}
     */
    fetchBasket(basketId: string): Promise<Basket>;
    /**
     * Update basket
     *
     * @param {Basket} basket
     * @returns {Basket}
     */
    updateBasket(basketId: string, basket: Basket): Promise<Basket>;
    /**
     * Fetch a payment
     *
     * @param {string} orderId
     * @returns {Promise}
     */
    fetchPaymentType(paymentTypeId: string): Promise<PaymentType>;
    /**
     * Fetch a payment
     *
     * @param {string} orderId
     * @returns {Promise}
     */
    fetchPayment(paymentId: string): Promise<Payment>;
    /**
     * Fetch authorization transaction
     *
     * @param {string} paymentId
     * @returns {Promise<Authorization>}
     */
    fetchAuthorization(paymentId: string): Promise<Authorization>;
    /**
     * Fetch charge transaction
     *
     * @param {string} paymentId
     * @param {string} chargeId
     * @returns {Promise<Charge>}
     */
    fetchCharge(paymentId: string, chargeId: string): Promise<Charge>;
    /**
     * Fetch cancel transaction
     *
     * @param {string} paymentId
     * @param {string} refundId
     * @param {string} cancelId
     * @returns {Promise<Cancel>}
     */
    fetchCancel(paymentId: string, cancelId: string, refundId?: string): Promise<Cancel>;
    /**
     * Heidelpay Authorize
     *
     * @param {authorizeObject} args
     * @returns {Authorization}
     */
    authorize(args: authorizeObject): Promise<Authorization>;
    /**
     * Heidelpay Charge
     *
     * @param {chargeObject} args
     * @returns {Promise<Charge>}
     */
    charge(args: chargeObject): Promise<Charge>;
    /**
     * Heidelpay Charge after authorization
     *
     * @param {chargeAuthorizeObject} args
     * @returns {Promise<Charge>}
     */
    chargeAuthorization(args: chargeAuthorizeObject): Promise<Charge>;
    /**
     * Reversal (Cancel of authorize)
     *
     * @param {cancelAuthorizeObject} args
     * @returns {Promise<Cancel>}
     */
    cancelAuthorization(args: cancelAuthorizeObject): Promise<Cancel>;
    /**
     * Cancel charge
     *
     * @param {cancelChargeObject} args
     * @returns {Promise<Cancel>}
     */
    cancelCharge(args: cancelChargeObject): Promise<Cancel>;
    /**
     * Shipment
     *
     * @param paymentId
     */
    shipment(paymentId: string, args: shipmentObject): Promise<Shipment>;
    /**
     * Start recurring
     *
     * @param {string} paymentId
     * @param {recurringObj} args
     */
    startRecurring(paymentId: string, args: recurringObject): Promise<Recurring>;
    /**
     * Init Paypage with authorize
     *
     * @param {Paypage} paypage
     * @returns {Promise<Paypage>}
     */
    initAuthorizePaypage(paypage: Paypage): Promise<Paypage>;
    /**
     * Init Paypage with charge
     *
     * @param {Paypage} paypage
     * @returns {Promise<Paypage>}
     */
    initChargePaypage(paypage: Paypage): Promise<Paypage>;
    /**
     * Init Linkpay with authorize
     *
     * @param {Linkpay} linkpay
     * @returns {Promise<Linkpay>}
     */
    initAuthorizeLinkpay(linkpay: Linkpay): Promise<Linkpay>;
    /**
     * Init Linkpay with charge
     *
     * @param {Linkpay} linkpay
     * @returns {Promise<Linkpay>}
     */
    initChargeLinkpay(linkpay: Linkpay): Promise<Linkpay>;
    /**
     * Update Linkpay
     *
     * @param {string} linkpayIdOrAlias
     * @param {Linkpay} linkpay
     * @returns {Promise<Linkpay>}
     */
    updateLinkpay(linkpayIdOrAlias: string, linkpay: Linkpay): Promise<Linkpay>;
    /**
     * Delete Linkpay
     *
     * @param {string} linkpayIdOrAlias
     * @returns {Promise<boolean>}
     */
    deleteLinkpay(linkpayIdOrAlias: string): Promise<boolean>;
    /**
     * Heidelpay Payout
     *
     * @param {payoutObject} args
     * @returns {Payout}
     */
    payout(args: payoutObject): Promise<Payout>;
    /**
     * Fetch payout transaction
     *
     * @param {string} paymentId
     * @param {string} payoutId
     * @returns {Promise<Payout>}
     */
    fetchPayout(paymentId: string, payoutId: string): Promise<Payout>;
    /**
     * Fetch hire purchase plans
     *
     * @param {string} amount
     * @param {string} currency
     * @param {string} effectiveInterestRate
     * @param {string} orderDate
     * @returns {Promise<Payout>}
     */
    fetchHirePurchasePlan(amount: string, currency: string, effectiveInterestRate: string, orderDate: string): Promise<Array<HirePurchasePlan>>;
    updateHirePurchase(hirePurchaseId: string, hirePurchase: updateHirePurchaseObject): Promise<HirePurchase>;
    /**
    * Register Webhook
    *
    * @param {webhookObject} args
    * @returns {Promise<Webhook>}
    */
    registerWebhook(args: webhookObject): Promise<Webhook>;
    /**
    * Fetch Webhook
    *
    * @param {string} id
    * @returns {Promise<Webhook>}
    */
    fetchWebhook(id?: string): Promise<Webhook>;
    /**
    * Update Webhook
    *
    * @param {any} args
    * @param {string} id
    * @returns {Promise<Webhook>}
    */
    updateWebhook(id: string, args: any): Promise<Webhook>;
    /**
    * Delete Webhook
    *
    * @param {string} id
    * @returns {Promise<Webhook>}
    */
    deleteWebhook(id?: string): Promise<any>;
}
