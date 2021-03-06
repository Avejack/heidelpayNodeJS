import Heidelpay from '../../Heidelpay';
import AbstractPayment from './AbstractPayment';
import { Customer } from '../Customer';
import Resources from './Resources';
import PaymentType from '../types/PaymentType';
import Processing from './Processing';
export default class Payout extends AbstractPayment {
    private amount;
    private orderId;
    private currency;
    private returnUrl;
    private paymentReference;
    private resources;
    private processing;
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
     * Get Order OId
     *
     * @returns {string}
     */
    getOrderId(): string;
    /**
     * Set Amount
     *
     * @param {string} amount
     */
    setOrderId(orderId: string): void;
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
}
export declare type payoutObject = {
    amount: number;
    orderId?: string;
    currency: string;
    returnUrl: string;
    typeId: string | PaymentType;
    paymentReference?: string;
    customerId?: string | Customer;
    metadataId?: string;
};
