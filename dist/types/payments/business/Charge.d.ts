import Heidelpay from '../../Heidelpay';
import AbstractPayment from './AbstractPayment';
import { Customer } from '../Customer';
import Resources from './Resources';
import PaymentType from '../types/PaymentType';
import Cancel from './Cancel';
import Processing from './Processing';
export default class Charge extends AbstractPayment {
    private amount;
    private orderId;
    private currency;
    private returnUrl;
    private paymentReference;
    private card3ds;
    private resources;
    private cancelList;
    private processing;
    private invoiceId;
    constructor(heidelpay: Heidelpay);
    /**
     * Set amount
     *
     * @param {string} amount
     */
    setAmount(amount: string): void;
    /**
     * Get amount
     *
     * @returns {string}
     */
    getAmount(): string;
    /**
     * Get Order Id
     *
     * @returns {string}
     */
    getOrderId(): string;
    /**
     * Set Order Id
     *
     * @param {string} orderId
     */
    setOrderId(orderId: string): void;
    /**
     * Get Invoice Id
     *
     * @returns {string}
     */
    getInvoiceId(): string;
    /**
     * Set Invoice Id
     *
     * @param {string} invoiceId
     */
    setInvoiceId(invoiceId: string): void;
    /**
     * Set currency
     *
     * @param {string} currency
     */
    setCurrency(currency: string): void;
    /**
     * Get currency
     *
     * @returns
     */
    getCurrency(): string;
    /**
     * Set return url
     *
     * @param {string} returnUrl
     */
    setReturnUrl(returnUrl: string): void;
    /**
     * Get return url
     */
    getReturnUrl(): string;
    /**
     * Set Payment Reference
     *
     * @param {string} paymentReference
     */
    setPaymentReference(paymentReference: string): void;
    /**
     * Get Payment Reference
     *
     * @returns
     */
    getPaymentReference(): string;
    /**
     * Set 3ds option
     *
     * @param {string} returnUrl
     */
    setCard3ds(card3ds: boolean): void;
    /**
     * Get 3ds option
     */
    getCard3ds(): boolean;
    /**
     * Get resources
     *
     * @returns {Resources}
     */
    getResources(): Resources;
    /**
     * Set resources
     *
     * @param {*} resources
     */
    setResources(resources: any): void;
    /**
     * Get Processing
     *
     * @returns {Processing}
     */
    getProcessing(): Processing;
    /**
     * Set Processing
     *
     * @param {*} processing
     */
    setProcessing(processing: any): void;
    /**
     * Get cancel transaction
     *
     * @param {string} cancelId
     * @returns {Cancel}
     */
    getCancel(cancelId: string): Cancel;
    /**
     * Get list of cancel transactions
     *
     * @returns {Array<Cancel>}
     */
    getCancelList(): Array<Cancel>;
    /**
     * Set list of cancel transactions
     *
     * @param {Array<Cancel>} cancelList
     */
    setCancelList(cancelList: Array<Cancel>): void;
    /**
     * Refund (Cancel of charge)
     *
     * @param {number} [amount]
     * @returns {Promise<Cancel>}
     */
    cancel(amount?: number): Promise<Cancel>;
}
export declare type chargeObject = {
    amount: number;
    orderId?: string;
    invoiceId?: string;
    currency: string;
    returnUrl: string;
    paymentReference?: string;
    card3ds?: boolean;
    typeId: string | PaymentType;
    customerId?: string | Customer;
    metadataId?: string;
    basketId?: string;
};
