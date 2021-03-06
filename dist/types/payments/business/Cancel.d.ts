import AbstractPayment from './AbstractPayment';
import Heidelpay from '../../Heidelpay';
import Resources from './Resources';
import Processing from './Processing';
export default class Cancel extends AbstractPayment {
    private amount;
    private orderId;
    private refundId;
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
     * Get refund Id
     *
     * @returns {string}
     */
    getRefundId(): string;
    /**
     * Set refund Id
     *
     * @param {string} refund Id
     */
    setRefundId(refundId: string): void;
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
}
export declare type cancelAuthorizeObject = {
    paymentId: string;
    paymentReference?: string;
    authorizationId: string;
    amount?: number;
};
export declare type cancelChargeObject = {
    paymentId: string;
    paymentReference?: string;
    chargeId: string;
    amount?: number;
    amountGross?: string;
    amountNet?: string;
    amountVat?: string;
};
