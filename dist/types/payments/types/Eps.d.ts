import AbstractPaymentType from './AbstractPaymentType';
import PaymentType from './PaymentType';
export default class Eps extends AbstractPaymentType implements PaymentType {
    private _bic;
    /**
     * Set BIC
     *
     * @param {string} bic
     * @returns {Eps}
     */
    setBic(bic: string): Eps;
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
        bic?: undefined;
    } | {
        bic: string;
    };
}
