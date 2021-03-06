import AbstractPaymentType from './AbstractPaymentType';
import PaymentType from './PaymentType';
export default class Prepayment extends AbstractPaymentType implements PaymentType {
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
