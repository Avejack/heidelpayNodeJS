export default class Resources {
    private typeId;
    private customerId;
    private metadataId;
    private paymentId;
    private basketId;
    private traceId;
    /**
     * Get type Id
     *
     * @returns
     */
    getTypeId(): string;
    /**
     * Set type Id
     *
     * @param {string} typeId
     * @returns
     */
    setTypeId(typeId: string): this;
    /**
     * Get customer Id
     *
     * @returns {string}
     */
    getCustomerId(): string;
    /**
     * Set customer Id
     *
     * @param {string} customerId
     * @returns {Resources}
     */
    setCustomerId(customerId: string): Resources;
    /**
     * Get meta data Id
     *
     * @returns {string}
     */
    getMetadataId(): string;
    /**
     * Set meta data Id
     *
     * @param {string} metadataId
     * @returns {Resources}
     */
    setMetadataId(metadataId: string): Resources;
    /**
     * Get payment Id
     *
     * @returns {string}
     */
    getPaymentId(): string;
    /**
     * Set Payment Id
     *
     * @param {string} paymentId
     * @returns {Resources}
     */
    setPaymentId(paymentId: string): Resources;
    /**
     * Get Basket Id
     *
     * @returns {string}
     */
    getBasketId(): string;
    /**
     * Set Trace Id
     *
     * @param {string} traceId
     * @returns {Resources}
     */
    setTraceId(traceId: string): Resources;
    /**
     * Get Trace Id
     *
     * @returns {string}
     */
    getTraceId(): string;
    /**
     * Set Basket Id
     *
     * @param {string} paymentId
     * @returns {Resources}
     */
    setBasketId(basketId: string): Resources;
}
