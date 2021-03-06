import PaymentType from './PaymentType';
import AbstractPaymentType from './AbstractPaymentType';
export default class SepaDirectDebit extends AbstractPaymentType implements PaymentType {
    private _iban;
    private _bic;
    private _holder;
    constructor(iban?: string);
    /**
     * Set iban number
     *
     * @param {string} iban
     * @returns {SepaDirectDebit}
     */
    setIban(iban: string): SepaDirectDebit;
    /**
     * Get iban number
     *
     * @returns {string}
     */
    getIban(): string;
    /**
     * Set bic number
     *
     * @param {string} bic
     * @returns {Card}
     */
    setBic(bic: string): SepaDirectDebit;
    /**
     * Get bic number
     *
     * @returns {string}
     */
    getBic(): string;
    /**
     * Set holder
     *
     * @param {string} holder
     * @returns {Card}
     */
    setHolder(holder: string): SepaDirectDebit;
    /**
     * Get holder
     *
     * @returns {string}
     */
    getHolder(): string;
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
    getPayload(): {
        iban: string;
        bic: string;
        holder: string;
    };
}
