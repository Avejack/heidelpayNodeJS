import AbstractPaymentType from './AbstractPaymentType';
import PaymentType from './PaymentType';
export default class Bancontact extends AbstractPaymentType implements PaymentType {
    private _holder;
    /**
     * Get url end point
     *
     * @returns {string}
     */
    getTypeUrl(): string;
    /**
   * Set holder
   *
   * @param {string} cardHolder
   * @returns {Card}
   */
    setHolder(holder: string): Bancontact;
    /**
     * Get holder
     *
     * @returns {string}
     */
    getHolder(): string;
    /**
     * Get Payload
     *
     * @returns
     */
    getPayload(): {
        holder?: undefined;
    } | {
        holder: string;
    };
}
