import PaymentType from './PaymentType';
import AbstractPaymentType from './AbstractPaymentType';
export default class Paypal extends AbstractPaymentType implements PaymentType {
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
    getPayload(): {};
}
