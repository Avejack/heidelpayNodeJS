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
var Invoice = /** @class */ (function (_super) {
    __extends(Invoice, _super);
    function Invoice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get url end point
     *
     * @returns {string}
     */
    Invoice.prototype.getTypeUrl = function () {
        return apiURL.URL_TYPE_INVOICE;
    };
    /**
     * Get Payload
     *
     * @returns
     */
    Invoice.prototype.getPayload = function () {
        return {};
    };
    return Invoice;
}(AbstractPaymentType_1.default));
exports.default = Invoice;
//# sourceMappingURL=Invoice.js.map