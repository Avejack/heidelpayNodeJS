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
var Ideal = /** @class */ (function (_super) {
    __extends(Ideal, _super);
    function Ideal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Set BIC
     *
     * @param {string} bic
     * @returns {Ideal}
     */
    Ideal.prototype.setBic = function (bic) {
        this._bic = bic;
        return this;
    };
    /**
     * Get BIC
     *
     * @returns {string}
     */
    Ideal.prototype.getBic = function () {
        return this._bic;
    };
    /**
     * Get url end point
     *
     * @returns {string}
     */
    Ideal.prototype.getTypeUrl = function () {
        return apiURL.URL_TYPE_IDEAL;
    };
    /**
     * Get Payload
     *
     * @returns
     */
    Ideal.prototype.getPayload = function () {
        return {
            bic: this.getBic()
        };
    };
    return Ideal;
}(AbstractPaymentType_1.default));
exports.default = Ideal;
//# sourceMappingURL=Ideal.js.map