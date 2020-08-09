import Heidelpay from '../../Heidelpay';
import Resources from './Resources';
import Payment from './Payment';
export default abstract class AbstractPayment {
    private _id;
    private _heidelpay;
    private _payment;
    private _payload;
    constructor(heidelpay: Heidelpay);
    /**
     * Set a payment object
     *
     * @param {Payment} payment
     */
    setPayment(payment: Payment): void;
    /**
     * Get payment object
     *
     * @returns {Payment}
     */
    getPayment(): Payment;
    /**
     * Get instance Heidelpay
     *
     * @returns {Heidelpay}
     */
    getHeidelpay(): Heidelpay;
    /**
     * Set Payment Id
     *
     * @param {string} paymentId
     */
    setId(paymentId: string): void;
    /**
     * Get Payment Id
     *
     * @returns {string}
     */
    getId(): string;
    /**
     * Get payload object
     *
     * @returns {*}
     */
    getPayload(): any;
    /**
     * Set payload object
     *
     * @param {*} payload
     * @returns
     */
    setPayload(payload: any): any;
    abstract getResources(): Resources;
}
