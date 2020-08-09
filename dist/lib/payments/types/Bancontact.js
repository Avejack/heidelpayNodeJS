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
var apiURL = require("../../configs/ApiUrls");
var AbstractPaymentType_1 = require("./AbstractPaymentType");
var Bancontact = /** @class */ (function (_super) {
    __extends(Bancontact, _super);
    function Bancontact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get url end point
     *
     * @returns {string}
     */
    Bancontact.prototype.getTypeUrl = function () {
        return apiURL.URL_TYPE_BANCONTACT;
    };
    /**
   * Set holder
   *
   * @param {string} cardHolder
   * @returns {Card}
   */
    Bancontact.prototype.setHolder = function (holder) {
        this._holder = holder;
        return this;
    };
    /**
     * Get holder
     *
     * @returns {string}
     */
    Bancontact.prototype.getHolder = function () {
        return this._holder;
    };
    /**
     * Get Payload
     *
     * @returns
     */
    Bancontact.prototype.getPayload = function () {
        if (typeof this.getHolder() === 'undefined') {
            return {};
        }
        return {
            holder: this._holder
        };
    };
    return Bancontact;
}(AbstractPaymentType_1.default));
exports.default = Bancontact;
//# sourceMappingURL=Bancontact.js.map