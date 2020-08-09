"use strict";
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var apiURL = require("../configs/ApiUrls");
var Charge_1 = require("../payments/business/Charge");
var FetchPayment_1 = require("./FetchPayment");
var ResponseErrorsMapper_1 = require("./mappers/ResponseErrorsMapper");
exports.default = (function (args, paymentService) {
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var amount, orderId, invoiceId, currency, returnUrl, paymentReference, customerId, typeId, metadataId, card3ds, basketId, payload, response, charge, _a, _b, error_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 3, , 4]);
                    amount = args.amount, orderId = args.orderId, invoiceId = args.invoiceId, currency = args.currency, returnUrl = args.returnUrl, paymentReference = args.paymentReference, customerId = args.customerId, typeId = args.typeId, metadataId = args.metadataId, card3ds = args.card3ds, basketId = args.basketId;
                    payload = {
                        amount: amount,
                        currency: currency,
                        returnUrl: returnUrl,
                        resources: {
                            typeId: typeId,
                            basketId: basketId,
                        }
                    };
                    // Add payment reference into payload if its passed
                    if (paymentReference) {
                        payload.paymentReference = paymentReference;
                    }
                    // Add order Id into payload if its passed
                    if (orderId) {
                        payload.orderId = orderId;
                    }
                    // Add card3ds into payload it its passed
                    if (card3ds) {
                        payload.card3ds = card3ds;
                    }
                    // Add customer Id into payload if its passed
                    if (customerId) {
                        payload.resources.customerId = customerId;
                    }
                    // Add metadta Id into payload if its passed
                    if (metadataId) {
                        payload.resources.metadataId = metadataId;
                    }
                    if (orderId) {
                        payload.orderId = orderId;
                    }
                    if (invoiceId) {
                        payload.invoiceId = invoiceId;
                    }
                    return [4 /*yield*/, paymentService
                            .getRequestAdapter()
                            .post(apiURL.URL_PAYMENT_CHARGE, payload, paymentService.getHeidelpay().getPrivateKey())
                        // Handle errors response        
                    ];
                case 1:
                    response = _c.sent();
                    // Handle errors response        
                    if (response.errors) {
                        return [2 /*return*/, reject(ResponseErrorsMapper_1.default(response))];
                    }
                    charge = new Charge_1.default(paymentService.getHeidelpay());
                    // Set chargeId
                    charge.setId(response.id);
                    // Set amount
                    charge.setAmount(response.amount);
                    // Set order Id
                    if (response.orderId) {
                        charge.setOrderId(response.orderId);
                    }
                    // Set invoice Id
                    if (response.invoiceId) {
                        charge.setInvoiceId(response.invoiceId);
                    }
                    // Set currency
                    charge.setCurrency(response.currency);
                    // Set return URL
                    charge.setReturnUrl(response.returnUrl);
                    // Set 3ds option
                    charge.setCard3ds(response.card3ds);
                    // Set resources
                    charge.setResources(response.resources);
                    // Set Processing
                    charge.setProcessing(response.processing);
                    // Set payment object
                    _b = (_a = charge).setPayment;
                    return [4 /*yield*/, FetchPayment_1.default(response.resources.paymentId, paymentService)];
                case 2:
                    // Set payment object
                    _b.apply(_a, [_c.sent()]);
                    // Set Payload
                    charge.setPayload(response);
                    // Resolve final result
                    resolve(charge);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _c.sent();
                    // Reject with error object
                    reject(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=Charge.js.map