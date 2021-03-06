import AbstractPaymentType from './AbstractPaymentType';
import PaymentType from './PaymentType';
export default class Ideal extends AbstractPaymentType implements PaymentType {
    private _bic;
    /**
     * Set BIC
     *
     * @param {string} bic
     * @returns {Ideal}
     */
    setBic(bic: string): Ideal;
    /**
     * Get BIC
     *
     * @returns {string}
     */
    getBic(): string;
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
        bic: string;
    };
}
