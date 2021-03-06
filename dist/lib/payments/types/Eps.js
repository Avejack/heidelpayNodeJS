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
var Eps = /** @class */ (function (_super) {
    __extends(Eps, _super);
    function Eps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Set BIC
     *
     * @param {string} bic
     * @returns {Eps}
     */
    Eps.prototype.setBic = function (bic) {
        this._bic = bic;
        return this;
    };
    /**
     * Get BIC
     *
     * @returns {string}
     */
    Eps.prototype.getBic = function () {
        return this._bic;
    };
    /**
     * Get url end point
     *
     * @returns {string}
     */
    Eps.prototype.getTypeUrl = function () {
        return apiURL.URL_TYPE_EPS;
    };
    /**
     * Get Payload
     *
     * @returns
     */
    Eps.prototype.getPayload = function () {
        if (typeof this.getBic() === 'undefined') {
            return {};
        }
        return {
            bic: this.getBic()
        };
    };
    return Eps;
}(AbstractPaymentType_1.default));
exports.default = Eps;
//# sourceMappingURL=Eps.js.map