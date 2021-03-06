import { FetchAdapter } from '../adapters/FetchAdapter';
import Heidelpay from '../Heidelpay';
import PaymentType from '../payments/types/PaymentType';
import { Customer } from '../payments/Customer';
import Metadata from '../payments/Metadata';
import Basket from '../payments/Basket';
import Authorization, { authorizeObject, chargeAuthorizeObject } from '../payments/business/Authorization';
import Cancel, { cancelAuthorizeObject, cancelChargeObject } from '../payments/business/Cancel';
import Charge, { chargeObject } from '../payments/business/Charge';
import Paypage from '../payments/paypage/Paypage';
import Linkpay from '../payments/paypage/Linkpay';
import Payment from '../payments/business/Payment';
import AbstractPaymentType from '../payments/types/AbstractPaymentType';
import Shipment, { shipmentObject } from '../payments/business/Shipment';
import Payout, { payoutObject } from '../payments/business/Payout';
import Recurring, { recurringObject } from '../payments/business/Recurring';
import HirePurchasePlan from '../payments/types/HirePurchasePlan';
import HirePurchase, { updateHirePurchaseObject } from '../payments/types/HirePurchase';
import Webhook, { webhookObject } from '../payments/business/Webhook';
export default class PaymentService {
    private requestAdapter;
    private heidelpay;
    constructor(heidelpay: Heidelpay, locale?: string, env?: string);
    /**
     * Get Heidelpay instance
     *
     * @returns {Heidelpay}
     */
    getHeidelpay(): Heidelpay;
    /**
     * Get request adapter
     *
     * @returns {FetchAdapter}
     */
    getRequestAdapter(): FetchAdapter;
    /**
     * Create payment type
     *
     * @param {PaymentType} paymentType
     * @returns {Promise<PaymentType>}
     */
    createPaymentType(paymentType: AbstractPaymentType): Promise<PaymentType>;
    /**
     * Fetch a payment
     *
     * @param {string} paymentId
     * @returns {Promise<Payment>}
     */
    fetchPayment(paymentId: string): Promise<Payment>;
    /**
     * Fetch a payment type
     *
     * @param {string} paymentTypeId
     * @returns {Promise<PaymentType>}
     */
    fetchPaymentType(paymentTypeId: string): Promise<PaymentType>;
    /**
     * Create customer
     *
     * @param {Customer} customer
     * @returns {Promise<Customer>}
     */
    createCustomer(customer: Customer): Promise<Customer>;
    /**
     * Fetch customer info by customer Id
     *
     * @param {string} customerId
     * @returns {Promise<Customer>}
     */
    fetchCustomer(customerId: string): Promise<Customer>;
    /**
     * Update data customer
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
     * @returns {Promise<Metadata>}
     */
    createMetadata(metadata: Metadata): Promise<Metadata>;
    /**
     * Fetch metadata
     *
     * @param {Metadata} metadata
     * @returns {Promise<Metadata>}
     */
    fetchMetadata(metadataId: string): Promise<Metadata>;
    /**
     * Create basket
     *
     * @param {Basket} baskset
     * @returns {Promise<Basket>}
     */
    createBasket(basket: Basket): Promise<Basket>;
    /**
     * Fetch basket
     *
     * @param {Basket} baskset
     * @returns {Promise<Basket>}
     */
    fetchBasket(basketId: string): Promise<Basket>;
    /**
     * Fetch basket
     *
     * @param {Basket} baskset
     * @returns {Promise<Basket>}
     */
    updateBasket(basketId: string, basket: Basket): Promise<Basket>;
    /**
     * Authorize a payment
     *
     * @param {authorizeObject} args
     * @returns {Promise<Authorization>}
     */
    authorize(args: authorizeObject): Promise<Authorization>;
    /**
     * Charge a payment
     *
     * @param {chargeObject} args
     * @returns {Promise<Charge>}
     */
    charge(args: chargeObject): Promise<Charge>;
    /**
     * Charge after authorization
     *
     * @param {chargeAuthorizeObject} args
     * @returns {Promise<Charge>}
     */
    chargeAuthorization(args: chargeAuthorizeObject): Promise<Charge>;
    /**
     * Reversal a payment
     *
     * @param {cancelAuthorizeObject} args
     * @returns {Promise<Cancel>}
     */
    cancelAuthorization(args: cancelAuthorizeObject): Promise<Cancel>;
    /**
     * Refund a payment
     *
     * @param {cancelChargeObject} args
     * @returns {Promise<Cancel>}
     */
    cancelCharge(args: cancelChargeObject): Promise<Cancel>;
    /**
     * Shipment
     *
     * @param {string} paymentId
     * @returns {Promise<Shipment>}
     */
    shipment(paymentId: string, args: shipmentObject): Promise<Shipment>;
    /**
     * Init authorize paypage
     *
     * @param {Paypage} paypage
     * @returns {Promise<Paypage>}
     */
    initAuthorizePaypage(paypage: Paypage): Promise<Paypage>;
    /**
     * Init charge paypage
     *
     * @param {Paypage} paypage
     * @returns {Promise<Paypage>}
     */
    initChargePaypage(paypage: Paypage): Promise<Paypage>;
    /**
     * Init authorize linkpay
     *
     * @param {Linkpay} linkpay
     * @returns {Promise<Linkpay>}
     */
    initAuthorizeLinkpay(linkpay: Linkpay): Promise<Linkpay>;
    /**
     * Init charge linkpay
     *
     * @param {Linkpay} linkpay
     * @returns {Promise<Linkpay>}
     */
    initChargeLinkpay(linkpay: Linkpay): Promise<Linkpay>;
    /**
     * Update linkpay
     *
     * @param {string} linkpayIdOrAlias
     * @param {updateLinkpayObject} linkpayObj
     * @returns {Promise<Linkpay>}
     */
    updateLinkpay(linkpayIdOrAlias: string, linkpay: Linkpay): Promise<Linkpay>;
    /**
     * Delete linkpay
     *
     * @param {string} linkpayIdOrAlias
     * @returns {Promise<boolean>}
     */
    deleteLinkpay(linkpayIdOrAlias: string): Promise<boolean>;
    /**
     * Init charge paypage
     *
     * @param {Paypage} paypage
     * @returns {Promise<Paypage>}
     */
    payout(args: payoutObject): Promise<Payout>;
    /**
     * Fetch a payout object
     *
     * @param {string} paymentId
     * @param {string} payoutId
     * @returns {Promise<Payment>}
     */
    fetchPayout(paymentId: string, payoutId: string): Promise<Payout>;
    /**
     * Fetch hire purchase plans
     *
     * @param {string} amount
     * @param {string} currency
     * @param {string} effectiveInterestRate
     * @param {string} orderDate
     * @returns {Promise<Payment>}
     */
    fetchHirePurchasePlan(amount: string, currency: string, effectiveInterestRate: string, orderDate: string): Promise<Array<HirePurchasePlan>>;
    /**
    * Update HirePurchase
    *
    * @param {string} hirePurchaseId
    * @param {updateHirePurchaseObject} hirePurchase
    * @returns {Promise<HirePurchase>}
    */
    updateHirePurchase(hirePurchaseId: string, hirePurchase: updateHirePurchaseObject): Promise<HirePurchase>;
    /**
     * Start Recurring
     *
     * @param {string} paymentId
     * @param {recurringObj} args
     */
    startRecurring(paymentId: string, args: recurringObject): Promise<Recurring>;
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
