import AbstractPayment from "./AbstractPayment";
import Resources from "./Resources";
import Heidelpay from "../../Heidelpay";
import Processing from "./Processing";
export default class Shipment extends AbstractPayment {
    private amount;
    private orderId;
    private invoiceId;
    private resources;
    private processing;
    constructor(heidelpay: Heidelpay);
    /**
     * Get Amount
     *
     * @returns {string}
     */
    getAmount(): string;
    /**
     * Set Amount
     *
     * @param {string} amount
     */
    setAmount(amount: string): void;
    /**
     * Get Order Id
     *
     * @returns {string}
     */
    getOrderId(): string;
    /**
     * Set Order Id
     *
     * @param {string} orderId
     */
    setOrderId(orderId: string): void;
    /**
     * Get Invoice Id
     *
     * @returns {string}
     */
    getInvoiceId(): string;
    /**
     * Set Invoice Id
     *
     * @param {string} invoiceId
     */
    setInvoiceId(invoiceId: string): void;
    /**
     * Get resources
     *
     * @returns {Resources}
     */
    getResources(): Resources;
    /**
     * Set resources
     *
     * @param {*} resources
     */
    setResources(resources: any): void;
    /**
     * Get Processing
     *
     * @returns {Processing}
     */
    getProcessing(): Processing;
    /**
     * Set Processing
     *
     * @param {*} processing
     */
    setProcessing(processing: any): void;
}
export declare type shipmentObject = {
    orderId?: string;
    invoiceId?: string;
};
