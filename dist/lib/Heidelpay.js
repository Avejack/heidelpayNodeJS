"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Version_1 = require("./configs/Version");
var Customer_1 = require("./payments/Customer");
var PaymentService_1 = require("./services/PaymentService");
var ErrorMessage = require("./configs/ErrorMessage");
var AbstractPaymentType_1 = require("./payments/types/AbstractPaymentType");
var Heidelpay = /** @class */ (function () {
    function Heidelpay(privateKey, locale, env) {
        if (!privateKey) {
            throw new Error(ErrorMessage.ERROR_MISSING_PRIVATE_KEY);
        }
        this.privateKey = privateKey;
        this.paymentService = new PaymentService_1.default(this, locale, env);
    }
    /**
     * Get SDK Version
     *
     * @returns {string}
     */
    Heidelpay.prototype.getVersion = function () {
        return Version_1.SDK_VERSION;
    };
    /**
     * Get private key
     *
     * @returns {string}
     */
    Heidelpay.prototype.getPrivateKey = function () {
        return this.privateKey;
    };
    /**
     * Create a payment
     *
     * @param {PaymentType} paymentType
     * @returns {PaymentType}
     */
    Heidelpay.prototype.createPaymentType = function (paymentType) {
        return this.paymentService.createPaymentType(paymentType);
    };
    /**
     * Create new customer
     *
     * @param {Customer} customer
     * @returns {Customer}
     */
    Heidelpay.prototype.createCustomer = function (customer) {
        return this.paymentService.createCustomer(customer);
    };
    /**
     * Fetch a customer
     *
     * @param {string} customerId
     * @returns {Promise}
     */
    Heidelpay.prototype.fetchCustomer = function (customerId) {
        return this.paymentService.fetchCustomer(customerId);
    };
    /**
     * Update customer
     *
     * @param {string} customerId
     * @param {Customer} customer
     * @returns {Promise<Customer>}
     */
    Heidelpay.prototype.updateCustomer = function (customerId, customer) {
        return this.paymentService.updateCustomer(customerId, customer);
    };
    /**
     * Delete a customer
     *
     * @param {string} customerId
     * @returns {Promise<boolean>}
     */
    Heidelpay.prototype.deleteCustomer = function (customerId) {
        return this.paymentService.deleteCustomer(customerId);
    };
    /**
     * Create metadata
     *
     * @param {Metadata} metadata
     */
    Heidelpay.prototype.createMetadata = function (metadata) {
        return this.paymentService.createMetadata(metadata);
    };
    /**
     * Fetch metadata information
     *
     * @param metadataId
     */
    Heidelpay.prototype.fetchMetadata = function (metadataId) {
        return this.paymentService.fetchMetadata(metadataId);
    };
    /**
     * Create a basket
     *
     * @param {Basket} basket
     * @returns {Basket}
     */
    Heidelpay.prototype.createBasket = function (basket) {
        return this.paymentService.createBasket(basket);
    };
    /**
     * Fetch a basket
     *
     * @param {Basket} basket
     * @returns {Basket}
     */
    Heidelpay.prototype.fetchBasket = function (basketId) {
        return this.paymentService.fetchBasket(basketId);
    };
    /**
     * Update basket
     *
     * @param {Basket} basket
     * @returns {Basket}
     */
    Heidelpay.prototype.updateBasket = function (basketId, basket) {
        return this.paymentService.updateBasket(basketId, basket);
    };
    /**
     * Fetch a payment
     *
     * @param {string} orderId
     * @returns {Promise}
     */
    Heidelpay.prototype.fetchPaymentType = function (paymentTypeId) {
        return this.paymentService.fetchPaymentType(paymentTypeId);
    };
    /**
     * Fetch a payment
     *
     * @param {string} orderId
     * @returns {Promise}
     */
    Heidelpay.prototype.fetchPayment = function (paymentId) {
        return this.paymentService.fetchPayment(paymentId);
    };
    /**
     * Fetch authorization transaction
     *
     * @param {string} paymentId
     * @returns {Promise<Authorization>}
     */
    Heidelpay.prototype.fetchAuthorization = function (paymentId) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var payment, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.paymentService.fetchPayment(paymentId)];
                    case 1:
                        payment = _a.sent();
                        resolve(payment.getAuthorization());
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        reject(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     * Fetch charge transaction
     *
     * @param {string} paymentId
     * @param {string} chargeId
     * @returns {Promise<Charge>}
     */
    Heidelpay.prototype.fetchCharge = function (paymentId, chargeId) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var payment, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.paymentService.fetchPayment(paymentId)];
                    case 1:
                        payment = _a.sent();
                        resolve(payment.getCharge(chargeId));
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        reject(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     * Fetch cancel transaction
     *
     * @param {string} paymentId
     * @param {string} refundId
     * @param {string} cancelId
     * @returns {Promise<Cancel>}
     */
    Heidelpay.prototype.fetchCancel = function (paymentId, cancelId, refundId) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var payment, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.paymentService.fetchPayment(paymentId)];
                    case 1:
                        payment = _a.sent();
                        if (refundId) {
                            // Get cancel from payment with cancel Id and refund Id
                            resolve(payment.getCancel(cancelId, refundId));
                        }
                        else {
                            // Get cancel from payment with only cancel Id
                            resolve(payment.getCancel(cancelId));
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        reject(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     * Heidelpay Authorize
     *
     * @param {authorizeObject} args
     * @returns {Authorization}
     */
    Heidelpay.prototype.authorize = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var typeId, customerId, paymentType, customer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        typeId = args.typeId, customerId = args.customerId;
                        if (!(typeId instanceof AbstractPaymentType_1.default)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.createPaymentType(typeId)];
                    case 1:
                        paymentType = _a.sent();
                        typeId = paymentType.getId();
                        _a.label = 2;
                    case 2:
                        if (!(customerId instanceof Customer_1.Customer)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.createCustomer(customerId)];
                    case 3:
                        customer = _a.sent();
                        customerId = customer.getCustomerId();
                        _a.label = 4;
                    case 4: return [2 /*return*/, this.paymentService.authorize(__assign({}, args, { typeId: typeId, customerId: customerId }))];
                }
            });
        });
    };
    /**
     * Heidelpay Charge
     *
     * @param {chargeObject} args
     * @returns {Promise<Charge>}
     */
    Heidelpay.prototype.charge = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var typeId, customerId, paymentType, customer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        typeId = args.typeId, customerId = args.customerId;
                        if (!(typeId instanceof AbstractPaymentType_1.default)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.createPaymentType(typeId)];
                    case 1:
                        paymentType = _a.sent();
                        typeId = paymentType.getId();
                        _a.label = 2;
                    case 2:
                        if (!(customerId instanceof Customer_1.Customer)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.createCustomer(customerId)];
                    case 3:
                        customer = _a.sent();
                        customerId = customer.getCustomerId();
                        _a.label = 4;
                    case 4: return [2 /*return*/, this.paymentService.charge(__assign({}, args, { typeId: typeId, customerId: customerId }))];
                }
            });
        });
    };
    /**
     * Heidelpay Charge after authorization
     *
     * @param {chargeAuthorizeObject} args
     * @returns {Promise<Charge>}
     */
    Heidelpay.prototype.chargeAuthorization = function (args) {
        return this.paymentService.chargeAuthorization(args);
    };
    /**
     * Reversal (Cancel of authorize)
     *
     * @param {cancelAuthorizeObject} args
     * @returns {Promise<Cancel>}
     */
    Heidelpay.prototype.cancelAuthorization = function (args) {
        return this.paymentService.cancelAuthorization(args);
    };
    /**
     * Cancel charge
     *
     * @param {cancelChargeObject} args
     * @returns {Promise<Cancel>}
     */
    Heidelpay.prototype.cancelCharge = function (args) {
        return this.paymentService.cancelCharge(args);
    };
    /**
     * Shipment
     *
     * @param paymentId
     */
    Heidelpay.prototype.shipment = function (paymentId, args) {
        return this.paymentService.shipment(paymentId, args);
    };
    /**
     * Start recurring
     *
     * @param {string} paymentId
     * @param {recurringObj} args
     */
    Heidelpay.prototype.startRecurring = function (paymentId, args) {
        return this.paymentService.startRecurring(paymentId, args);
    };
    /**
     * Init Paypage with authorize
     *
     * @param {Paypage} paypage
     * @returns {Promise<Paypage>}
     */
    Heidelpay.prototype.initAuthorizePaypage = function (paypage) {
        return this.paymentService.initAuthorizePaypage(paypage);
    };
    /**
     * Init Paypage with charge
     *
     * @param {Paypage} paypage
     * @returns {Promise<Paypage>}
     */
    Heidelpay.prototype.initChargePaypage = function (paypage) {
        return this.paymentService.initChargePaypage(paypage);
    };
    /**
     * Init Linkpay with authorize
     *
     * @param {Linkpay} linkpay
     * @returns {Promise<Linkpay>}
     */
    Heidelpay.prototype.initAuthorizeLinkpay = function (linkpay) {
        return this.paymentService.initAuthorizeLinkpay(linkpay);
    };
    /**
     * Init Linkpay with charge
     *
     * @param {Linkpay} linkpay
     * @returns {Promise<Linkpay>}
     */
    Heidelpay.prototype.initChargeLinkpay = function (linkpay) {
        return this.paymentService.initChargeLinkpay(linkpay);
    };
    /**
     * Update Linkpay
     *
     * @param {string} linkpayIdOrAlias
     * @param {Linkpay} linkpay
     * @returns {Promise<Linkpay>}
     */
    Heidelpay.prototype.updateLinkpay = function (linkpayIdOrAlias, linkpay) {
        return this.paymentService.updateLinkpay(linkpayIdOrAlias, linkpay);
    };
    /**
     * Delete Linkpay
     *
     * @param {string} linkpayIdOrAlias
     * @returns {Promise<boolean>}
     */
    Heidelpay.prototype.deleteLinkpay = function (linkpayIdOrAlias) {
        return this.paymentService.deleteLinkpay(linkpayIdOrAlias);
    };
    /**
     * Heidelpay Payout
     *
     * @param {payoutObject} args
     * @returns {Payout}
     */
    Heidelpay.prototype.payout = function (args) {
        return this.paymentService.payout(args);
    };
    /**
     * Fetch payout transaction
     *
     * @param {string} paymentId
     * @param {string} payoutId
     * @returns {Promise<Payout>}
     */
    Heidelpay.prototype.fetchPayout = function (paymentId, payoutId) {
        return this.paymentService.fetchPayout(paymentId, payoutId);
    };
    /**
     * Fetch hire purchase plans
     *
     * @param {string} amount
     * @param {string} currency
     * @param {string} effectiveInterestRate
     * @param {string} orderDate
     * @returns {Promise<Payout>}
     */
    Heidelpay.prototype.fetchHirePurchasePlan = function (amount, currency, effectiveInterestRate, orderDate) {
        return this.paymentService.fetchHirePurchasePlan(amount, currency, effectiveInterestRate, orderDate);
    };
    Heidelpay.prototype.updateHirePurchase = function (hirePurchaseId, hirePurchase) {
        return this.paymentService.updateHirePurchase(hirePurchaseId, hirePurchase);
    };
    /**
    * Register Webhook
    *
    * @param {webhookObject} args
    * @returns {Promise<Webhook>}
    */
    Heidelpay.prototype.registerWebhook = function (args) {
        return this.paymentService.registerWebhook(args);
    };
    /**
    * Fetch Webhook
    *
    * @param {string} id
    * @returns {Promise<Webhook>}
    */
    Heidelpay.prototype.fetchWebhook = function (id) {
        return this.paymentService.fetchWebhook(id);
    };
    /**
    * Update Webhook
    *
    * @param {any} args
    * @param {string} id
    * @returns {Promise<Webhook>}
    */
    Heidelpay.prototype.updateWebhook = function (id, args) {
        return this.paymentService.updateWebhook(id, args);
    };
    /**
    * Delete Webhook
    *
    * @param {string} id
    * @returns {Promise<Webhook>}
    */
    Heidelpay.prototype.deleteWebhook = function (id) {
        return this.paymentService.deleteWebhook(id);
    };
    return Heidelpay;
}());
exports.default = Heidelpay;
//# sourceMappingURL=Heidelpay.js.map