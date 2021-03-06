import Resources from './Resources';
import Processing from './Processing';
export default class Recurring {
    private _redirectUrl;
    private _returnUrl;
    private _date;
    private _resources;
    private _processing;
    constructor();
    /**
     * Get redirectUrl
     *
     * @returns {string}
     */
    getRedirectUrl(): string;
    /**
     * Set redirectUrl
     *
     * @param {string} redirectUrl
     * @returns {Recurring}
     */
    setRedirectUrl(redirectUrl: string): Recurring;
    /**
     * Get returnUrl
     *
     * @returns {string}
     */
    getReturnUrl(): string;
    /**
     * Set returnUrl
     *
     * @param {string} returnUrl
     * @returns {Recurring}
     */
    setReturnUrl(returnUrl: string): Recurring;
    /**
     * Get date
     *
     * @returns {string}
     */
    getDate(): string;
    /**
     * Set date
     *
     * @param {string} date
     * @returns {Recurring}
     */
    setDate(date: string): Recurring;
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
export declare type recurringObject = {
    returnUrl: string;
    customerId?: string;
    metadataId?: string;
};
