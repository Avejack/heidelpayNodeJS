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
var InvoiceGuaranteed = /** @class */ (function (_super) {
    __extends(InvoiceGuaranteed, _super);
    function InvoiceGuaranteed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get url end point
     *
     * @returns {string}
     */
    InvoiceGuaranteed.prototype.getTypeUrl = function () {
        return apiURL.URL_TYPE_INVOICE_GUARANTEED;
    };
    /**
     * Set Invoice Id
     *
     * @param {string} invoiceId
     */
    InvoiceGuaranteed.prototype.setInvoiceId = function (invoiceId) {
        this._invoiceId = invoiceId;
    };
    /**
     * Get Invoice Id
     *
     * @returns {string}
     */
    InvoiceGuaranteed.prototype.getInvoiceId = function () {
        return this._invoiceId;
    };
    /**
     * Get Payload
     *
     * @returns
     */
    InvoiceGuaranteed.prototype.getPayload = function () {
        if (typeof this.getInvoiceId() === 'undefined') {
            return {};
        }
        return {
            invoiceId: this._invoiceId
        };
    };
    return InvoiceGuaranteed;
}(AbstractPaymentType_1.default));
exports.default = InvoiceGuaranteed;
//# sourceMappingURL=InvoiceGuaranteed.js.map