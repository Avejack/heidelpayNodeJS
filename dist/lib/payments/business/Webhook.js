"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractPayment_1 = require("./AbstractPayment");
var Resources_1 = require("./Resources");
var Webhook = /** @class */ (function (_super) {
    __extends(Webhook, _super);
    function Webhook(heidelpay) {
        var _this = _super.call(this, heidelpay) || this;
        _this.resources = new Resources_1.default();
        return _this;
    }
    /**
     * Get Url
     *
     * @returns {string}
     */
    Webhook.prototype.getUrl = function () {
        return this.url;
    };
    /**
     * Set Url
     *
     * @param {string} url
     */
    Webhook.prototype.setUrl = function (url) {
        this.url = url;
    };
    /**
     * Get Event
     *
     * @returns {string}
     */
    Webhook.prototype.getEvent = function () {
        return this.event;
    };
    /**
     * Set Event
     *
     * @param {string} event
     */
    Webhook.prototype.setEvent = function (event) {
        this.event = event;
    };
    /**
     * Get EventList
     *
     * @returns {Array<any>}
     */
    Webhook.prototype.getEventList = function () {
        return this.eventList;
    };
    /**
     * Set Event
     *
     * @param {Array<string>} eventList
     */
    Webhook.prototype.setEventList = function (eventList) {
        this.eventList = eventList;
    };
    /**
     * Get resources
     *
     * @returns {Resources}
     */
    Webhook.prototype.getResources = function () {
        return this.resources;
    };
    /**
     * Get id by event name
     *
     * @param {string} event
     * @returns {string}
     */
    Webhook.prototype.getIdByEventName = function (event) {
        if (this.eventList.length === 0) {
            return 'Event list does not exist';
        }
        var filteredEvent = this.eventList.filter(function (listEvent) { return listEvent.event === event; });
        if (filteredEvent.length === 0) {
            return 'Passed event has not been registered';
        }
        return filteredEvent[0].id;
    };
    /**
     * Get url by event name
     *
     * @param {string} event
     * @returns {string}
     */
    Webhook.prototype.getUrlByEventName = function (event) {
        if (this.eventList.length === 0) {
            return 'Event list does not exist';
        }
        var filteredEvent = this.eventList.filter(function (listEvent) { return listEvent.event === event; });
        if (filteredEvent.length === 0) {
            return 'Passed event has not been registered';
        }
        return filteredEvent[0].url;
    };
    return Webhook;
}(AbstractPayment_1.default));
exports.default = Webhook;
//# sourceMappingURL=Webhook.js.map