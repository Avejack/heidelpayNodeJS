import Heidelpay from '../../Heidelpay';
import AbstractPayment from './AbstractPayment';
import { Customer } from '../Customer';
import Charge from './Charge';
import Resources from './Resources';
import Cancel from './Cancel';
import PaymentType from '../types/PaymentType';
import Processing from './Processing';
import Basket from '../Basket';
export default class Authorization extends AbstractPayment {
    private amount;
    private orderId;
    private currency;
    private returnUrl;
    private paymentReference;
    private resources;
    private processing;
    constructor(heidelpay: Heidelpay);
    /**
     * Get Amount
     *
     * @returns {string}
     */
    getAmount(): string;
    /**
     * Set Amount
     *
     * @param {string} amount
     */
    setAmount(amount: string): void;
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
     * Charge after authorize
     *
     * @param {number} [amount]
     * @returns {Promise<Charge>}
     */
    charge(amount?: number): Promise<Charge>;
    /**
     * Reversal (Cancel of authorization)
     *
     * @param {number} [amount]
     * @returns {Promise<Cancel>}
     */
    cancel(amount?: number): Promise<Cancel>;
}
export declare type authorizeObject = {
    amount: number;
    orderId?: string;
    currency: string;
    typeId: string | PaymentType;
    returnUrl: string;
    paymentReference?: string;
    customerId?: string | Customer;
    metadataId?: string;
    basketId?: string | Basket;
    effectiveInterestRate?: number;
};
export declare type chargeAuthorizeObject = {
    paymentId: string;
    paymentReference?: string;
    amount?: number;
};
