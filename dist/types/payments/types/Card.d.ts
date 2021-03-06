import AbstractPaymentType from './AbstractPaymentType';
import PaymentType from './PaymentType';
export default class Card extends AbstractPaymentType implements PaymentType {
    private _recurring;
    private _brand;
    private _number;
    private _cvc;
    private _expiryDate;
    private _cardHolder;
    private _3ds;
    private _cardDetails;
    constructor(number?: string, expiryDate?: string);
    /**
     * Get url end point
     *
     * @returns {string}
     */
    getTypeUrl(): string;
    /**
     * Get Payload
     *
     * @returns
     */
    getPayload(): any;
    /**
     * Set pan number
     *
     * @param {string} number
     * @returns {Card}
     */
    setNumber(number: string): Card;
    /**
     * Get pan number
     *
     * @returns {string}
     */
    getNumber(): string;
    /**
     * Set CVC number
     *
     * @param {string} cvc
     * @returns {Card}
     */
    setCVC(cvc: string): Card;
    /**
     * Get CVC
     *
     * @returns {string}
     */
    getCVC(): string;
    /**
     * Set expiry date
     *
     * @param {string} expiryDate
     * @returns {Card}
     */
    setExpiryDate(expiryDate: string): Card;
    /**
     * Get expirty Date
     *
     * @returns {string}
     */
    getExpiryDate(): string;
    /**
     * Set card holder
     *
     * @param {string} cardHolder
     * @returns {Card}
     */
    setCardHolder(cardHolder: string): Card;
    /**
     * Get card holder
     *
     * @returns {string}
     */
    getCardHolder(): string;
    /**
     * Set brand name
     *
     * @param {string} brand
     * @returns {Card}
     */
    setBrand(brand: string): Card;
    /**
     * Get brand name
     *
     * @returns {string}
     */
    getBrand(): string;
    /**
     * Set recurring option
     *
     * @param {string} recurring
     * @returns {Card}
     */
    setRecurring(recurring: boolean): Card;
    /**
     * Get recurring option
     *
     * @returns {string}
     */
    getRecurring(): boolean;
    /**
     * Set card detail
     *
     * @param {object} cardDetail
     * @returns {Card}
     */
    setCardDetails(cardDetails: any): Card;
    /**
     * Get card detail
     *
     * @returns {object}
     */
    getCardDetails(): any;
    /**
     * Set 3ds option
     *
     * @param {string} expiryDate
     * @returns {Card}
     */
    set3ds(secure: boolean): Card;
    /**
     * Get 3ds option
     *
     * @returns {string}
     */
    get3ds(): boolean;
}
