import AbstractPayment from './AbstractPayment';
import Heidelpay from '../../Heidelpay';
import Resources from './Resources';
export default class Webhook extends AbstractPayment {
    private url;
    private event;
    private eventList;
    private resources;
    constructor(heidelpay: Heidelpay);
    /**
     * Get Url
     *
     * @returns {string}
     */
    getUrl(): string;
    /**
     * Set Url
     *
     * @param {string} url
     */
    setUrl(url: string): void;
    /**
     * Get Event
     *
     * @returns {string}
     */
    getEvent(): string;
    /**
     * Set Event
     *
     * @param {string} event
     */
    setEvent(event: string): void;
    /**
     * Get EventList
     *
     * @returns {Array<any>}
     */
    getEventList(): Array<any>;
    /**
     * Set Event
     *
     * @param {Array<string>} eventList
     */
    setEventList(eventList: Array<any>): void;
    /**
     * Get resources
     *
     * @returns {Resources}
     */
    getResources(): Resources;
    /**
     * Get id by event name
     *
     * @param {string} event
     * @returns {string}
     */
    getIdByEventName(event: string): string;
    /**
     * Get url by event name
     *
     * @param {string} event
     * @returns {string}
     */
    getUrlByEventName(event: string): string;
}
export declare type webhookObject = {
    url: string;
    event?: string;
    eventList?: Array<string>;
};
