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
var Pis = /** @class */ (function (_super) {
    __extends(Pis, _super);
    function Pis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get url end point
     *
     * @returns {string}
     */
    Pis.prototype.getTypeUrl = function () {
        return apiURL.URL_TYPE_PIS;
    };
    /**
     * Get Payload
     *
     * @returns
     */
    Pis.prototype.getPayload = function () {
        return {};
    };
    return Pis;
}(AbstractPaymentType_1.default));
exports.default = Pis;
//# sourceMappingURL=Pis.js.map