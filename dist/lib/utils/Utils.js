"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alipay_1 = require("../payments/types/Alipay");
var Bancontact_1 = require("../payments/types/Bancontact");
var Card_1 = require("../payments/types/Card");
var Eps_1 = require("../payments/types/Eps");
var Giropay_1 = require("../payments/types/Giropay");
var HirePurchase_1 = require("../payments/types/HirePurchase");
var Ideal_1 = require("../payments/types/Ideal");
var Invoice_1 = require("../payments/types/Invoice");
var InvoiceFactoring_1 = require("../payments/types/InvoiceFactoring");
var InvoiceGuaranteed_1 = require("../payments/types/InvoiceGuaranteed");
var InvoiceSecured_1 = require("../payments/types/InvoiceSecured");
var Paypal_1 = require("../payments/types/Paypal");
var Pis_1 = require("../payments/types/Pis");
var Prepayment_1 = require("../payments/types/Prepayment");
var Przelewy24_1 = require("../payments/types/Przelewy24");
var SepaDirectDebit_1 = require("../payments/types/SepaDirectDebit");
var SepaDirectDebitGuaranteed_1 = require("../payments/types/SepaDirectDebitGuaranteed");
var SepaDirectDebitSecured_1 = require("../payments/types/SepaDirectDebitSecured");
var Sofort_1 = require("../payments/types/Sofort");
var WechatPay_1 = require("../payments/types/WechatPay");
/**
 * Replace URL with parameters: {paymentId} => s-pay-1781
 *
 * @param {string} url
 * @param {*} args
 * @returns
 */
exports.replaceUrl = function (url, args) {
    var regex = /{([a-zA-Z]+)}/gm;
    var urlReplaced = url.replace(regex, function (matches, item) {
        return args[item] || '';
    });
    return urlReplaced;
};
/**
 * Get refund id from url
 *
 * Ex:
 * <domain>payments/s-pay-3883/charges/s-chg-1/cancels/s-cnl-1
 * It should return s-chg-1 as refund Id of this cancel
 *
 * @param {string} url
 * @returns
 */
exports.getRefundIdOfCancel = function (url) {
    var regex = /\/([a-zA-Z-0-9]+)\/cancels/gm;
    var matches = regex.exec(url);
    return matches ? matches[1] : '';
};
/**
 * Get payment type from typeId
 * Ex:
 * crd => Card()
 * gro => GrioPay()
 * @param {string} typeId
 * @returns {AbstractPaymentType}
 */
exports.getPaymentTypeFromTypeId = function (typeId) {
    if (typeId.length < 5) {
        throw new Error("Type " + typeId + " is currently not supported by the SDK");
    }
    var paymentType = typeId.substring(2, 5);
    switch (paymentType) {
        case 'crd':
            return new Card_1.default();
        case 'eps':
            return new Eps_1.default();
        case 'gro':
            return new Giropay_1.default();
        case 'ppl':
            return new Paypal_1.default();
        case 'idl':
            return new Ideal_1.default();
        case 'ivc':
            return new Invoice_1.default();
        case 'ivg':
            return new InvoiceGuaranteed_1.default();
        case 'ivs':
            return new InvoiceSecured_1.default();
        case 'ivf':
            return new InvoiceFactoring_1.default();
        case 'ppy':
            return new Prepayment_1.default();
        case 'p24':
            return new Przelewy24_1.default();
        case 'sdd':
            return new SepaDirectDebit_1.default("");
        case 'ddg':
            return new SepaDirectDebitGuaranteed_1.default("");
        case 'dds':
            return new SepaDirectDebitSecured_1.default("");
        case 'sft':
            return new Sofort_1.default();
        case 'pis':
            return new Pis_1.default();
        case 'ali':
            return new Alipay_1.default();
        case 'wcp':
            return new WechatPay_1.default();
        case 'bct':
            return new Bancontact_1.default();
        case 'hdd':
            return new HirePurchase_1.default();
        default:
            throw new Error("Type " + typeId + " is currently not supported by the SDK");
    }
};
/**
 * Map response with propery payment Type
 *
 * @param {*} response
 * @returns {AbstractPaymentType}
 */
exports.mapResponsePaymentType = function (response) {
    switch (response.method) {
        case 'card':
            var card = new Card_1.default()
                .setNumber(response.number)
                .setExpiryDate(response.expiryDate)
                .setCVC(response.cvc)
                .setBrand(response.brand)
                .setRecurring(response.recurring);
            if (response.cardHolder) {
                card.setCardHolder(response.cardHolder);
            }
            if (response.cardDetails) {
                card.setCardDetails(response.cardDetails);
            }
            card.setId(response.id);
            card.setGeoLocation(response.geoLocation);
            return card;
        case 'EPS':
            var eps = new Eps_1.default().setBic(response.bic);
            eps.setId(response.id);
            eps.setGeoLocation(response.geoLocation);
            return eps;
        case 'giropay':
            var giropay = new Giropay_1.default();
            giropay.setId(response.id);
            giropay.setGeoLocation(response.geoLocation);
            return giropay;
        case 'paypal':
            var paypal = new Paypal_1.default();
            paypal.setId(response.id);
            paypal.setGeoLocation(response.geoLocation);
            paypal.setEmail(response.email);
            return paypal;
        case 'ideal':
            var ideal = new Ideal_1.default().setBic(response.bic);
            ideal.setId(response.id);
            ideal.setGeoLocation(response.geoLocation);
            return ideal;
        case 'invoice':
            var invoice = new Invoice_1.default();
            invoice.setId(response.id);
            invoice.setGeoLocation(response.geoLocation);
            return invoice;
        case 'invoice-guaranteed':
            var invoiceGuaranteed = new InvoiceGuaranteed_1.default();
            invoiceGuaranteed.setId(response.id);
            invoiceGuaranteed.setGeoLocation(response.geoLocation);
            return invoiceGuaranteed;
        case 'invoice-secured':
            var invoiceSecured = new InvoiceSecured_1.default();
            invoiceSecured.setId(response.id);
            invoiceSecured.setGeoLocation(response.geoLocation);
            return invoiceSecured;
        case 'invoice-factoring':
            var invoiceFactoring = new InvoiceFactoring_1.default();
            invoiceFactoring.setId(response.id);
            invoiceFactoring.setGeoLocation(response.geoLocation);
            return invoiceFactoring;
        case 'przelewy24':
            var przelewy24 = new Przelewy24_1.default();
            przelewy24.setId(response.id);
            przelewy24.setGeoLocation(response.geoLocation);
            return przelewy24;
        case 'prepayment':
            var prepayment = new Prepayment_1.default();
            prepayment.setId(response.id);
            prepayment.setGeoLocation(response.geoLocation);
            return prepayment;
        case 'sepa-direct-debit':
            var sepaDirectDebit = new SepaDirectDebit_1.default(response.iban)
                .setBic(response.bic)
                .setHolder(response.holder);
            sepaDirectDebit.setId(response.id);
            sepaDirectDebit.setGeoLocation(response.geoLocation);
            return sepaDirectDebit;
        case 'sepa-direct-debit-guaranteed':
            var ddg = new SepaDirectDebitGuaranteed_1.default(response.iban)
                .setBic(response.bic)
                .setHolder(response.holder);
            ddg.setId(response.id);
            ddg.setGeoLocation(response.geoLocation);
            return ddg;
        case 'sepa-direct-debit-secured':
            var dds = new SepaDirectDebitSecured_1.default(response.iban)
                .setBic(response.bic)
                .setHolder(response.holder);
            dds.setId(response.id);
            dds.setGeoLocation(response.geoLocation);
            return dds;
        case 'sofort':
            var sofort = new Sofort_1.default();
            sofort.setId(response.id);
            sofort.setGeoLocation(response.geoLocation);
            return sofort;
        case 'PIS':
            var pis = new Pis_1.default();
            pis.setId(response.id);
            pis.setGeoLocation(response.geoLocation);
            return pis;
        case 'alipay':
            var alipay = new Alipay_1.default();
            alipay.setId(response.id);
            alipay.setGeoLocation(response.geoLocation);
            return alipay;
        case 'wechatpay':
            var wechatpay = new WechatPay_1.default();
            wechatpay.setId(response.id);
            wechatpay.setGeoLocation(response.geoLocation);
            return wechatpay;
        case 'bancontact':
            var bancontact = new Bancontact_1.default();
            if (response.holder) {
                bancontact.setHolder(response.holder);
            }
            bancontact.setId(response.id);
            bancontact.setGeoLocation(response.geoLocation);
            return bancontact;
        case 'hire-purchase-direct-debit':
            var hirePurchase = new HirePurchase_1.default();
            hirePurchase
                .setIban(response.iban)
                .setBic(response.bic)
                .setAccountHolder(response.accountHolder)
                .setOrderDate(response.orderDate)
                .setNumberOfRates(response.numberOfRates)
                .setDayOfPurchase(response.dayOfPurchase)
                .setTotalPurchaseAmount(response.totalPurchaseAmount)
                .setTotalInterestAmount(response.totalInterestAmount)
                .setEffectiveInterestRate(response.effectiveInterestRate)
                .setNominalInterestRate(response.nominalInterestRate)
                .setFeeFirstRate(response.feeFirstRate)
                .setFeePerRate(response.feePerRate)
                .setMonthlyRate(response.monthlyRate)
                .setLastRate(response.lastRate)
                .setInvoiceDate(response.invoiceDate)
                .setInvoiceDueDate(response.invoiceDueDate);
            hirePurchase.setId(response.id);
            hirePurchase.setGeoLocation(response.geoLocation);
            return hirePurchase;
        default:
            throw new Error("Type " + response.method + " is currently not supported by the SDK");
    }
};
//# sourceMappingURL=Utils.js.map