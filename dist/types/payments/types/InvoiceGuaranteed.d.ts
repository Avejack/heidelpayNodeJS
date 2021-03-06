import AbstractPaymentType from './AbstractPaymentType';
import PaymentType from './PaymentType';
export default class InvoiceGuaranteed extends AbstractPaymentType implements PaymentType {
    private _invoiceId;
    /**
     * Get url end point
     *
     * @returns {string}
     */
    getTypeUrl(): string;
    /**
     * Set Invoice Id
     *
     * @param {string} invoiceId
     */
    setInvoiceId(invoiceId: string): void;
    /**
     * Get Invoice Id
     *
     * @returns {string}
     */
    getInvoiceId(): string;
    /**
     * Get Payload
     *
     * @returns
     */
    getPayload(): {
        invoiceId?: undefined;
    } | {
        invoiceId: string;
    };
}
