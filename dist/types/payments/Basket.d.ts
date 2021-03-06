declare class Basket {
    private _id;
    private _amountTotalGross;
    private _amountTotalDiscount;
    private _amountTotalVat;
    private _currencyCode;
    private _orderId;
    private _note;
    private _payload;
    private _basketItems;
    constructor();
    /**
     * Set Id
     * @param {string} id
     */
    setId(id: string): Basket;
    /**
     * Get Id
     *
     * @type {string}
     */
    getId(): string;
    /**
     * Set payload object
     *
     * @param {*} payload
     * @returns
     */
    setPayload(payload: any): any;
    /**
     * Get payload object
     *
     * @returns {*}
     */
    getPayload(): any;
    /**
     * Get Request Payload
     */
    getRequestPayload(): {
        amountTotalGross: string;
        amountTotalDiscount: string;
        amountTotalVat: string;
        currencyCode: string;
        orderId: string;
        note: string;
        basketItems: basketItemObject[];
    };
    /**
     * Set amount total
     * @param {string} value
     * @returns {Basket}
     */
    setAmountTotalGross(value: string): Basket;
    /**
     * Get amount total
     * @param {string} value
     */
    getAmountTotalGross(): string;
    /**
     * Set amount total discount
     * @param {string} value
     * @returns {Basket}
     */
    setAmountTotalDiscount(value: string): Basket;
    /**
     * Get amount total discount
     * @param {string} value
     */
    getAmountTotalDiscount(): string;
    /**
     * Set amount total vat
     * @param {string} value
     * @returns {Basket}
     */
    setAmountTotalVat(value: string): Basket;
    /**
     * Get amount total vat
     * @param {string} value
     */
    getAmountTotalVat(): string;
    /**
     * Set currency code
     * @param {string} value
     * @returns {Basket}
     */
    setCurrencyCode(value: string): Basket;
    /**
     * Get currency code
     * @param {string} value
     */
    getCurrencyCode(): string;
    /**
     * Set order Id
     * @param {string} value
     * @returns {Basket}
     */
    setOrderId(value: string): Basket;
    /**
     * Get Order Id
     * @param {string} value
     */
    getOrderId(): string;
    /**
     * Set basket note
     * @param {string} value
     * @returns {Basket}
     */
    setNote(value: string): Basket;
    /**
     * Get note for basket
     * @param {string} value
     */
    getNote(): string;
    /**
     * Add basket Item
     * @param {basketItemObject} item
     */
    addItem(item: basketItemObject): void;
    /**
     * Get basket Item
     * @param {basketItemObject} item
     * @returns {Array<basketItemObject>}
     */
    getItems(): Array<basketItemObject>;
}
export declare type basketItemObject = {
    title: string;
    basketItemReferenceId: string;
    quantity: number;
    amountPerUnit: string;
    amountNet: string;
    subTitle?: string;
    unit?: string;
    amountDiscount?: string;
    vat?: string;
    imageUrl?: string;
    amountGross?: string;
    amountVat?: string;
    type?: string;
};
export default Basket;
