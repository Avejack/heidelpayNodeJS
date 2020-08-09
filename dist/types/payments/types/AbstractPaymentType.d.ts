import Heidelpay from '../../Heidelpay';
import Authorization, { authorizeObject } from '../business/Authorization';
import Charge, { chargeObject } from '../business/Charge';
export default abstract class AbstractPaymentType {
    private _id;
    private _heidelpay;
    private _geoLocation;
    private _email;
    abstract getTypeUrl(): string;
    abstract getPayload(): any;
    /**
     * Set Heidelpay instance
     *
     * @param {Heidelpay} heidelpay
     */
    setHeidelpay(heidelpay: Heidelpay): void;
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
     * Authorize with payment card
     *
     * @param {authorizeObject} args
     * @returns {Promise<Authorization>}
     */
    authorize(args: authorizeObject): Promise<Authorization>;
    /**
     * Charge on authorize
     *
     * @param {chargeAuthorizeObject} args
     * @returns {Promise<Charge>}
     */
    charge(args: chargeObject): Promise<Charge>;
    /**
     * Get geoLocation
     *
     * @returns {any}
     */
    getGeoLocation(): any;
    /**
     * Set geoLocation
     *
     * @param {any} geoLocation
     * @returns {any}
     */
    setGeoLocation(geoLocation: any): any;
    /**
     * Set PayPal email
     *
     * @param {string} email
     */
    setEmail(email: string): void;
    /**
     * Get PayPal email
     *
     * @returns {string}
     */
    getEmail(): string;
}
