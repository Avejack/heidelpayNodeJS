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
var FetchPayment_1 = require("./FetchPayment");
var Authorization_1 = require("../payments/business/Authorization");
var ResponseErrorsMapper_1 = require("./mappers/ResponseErrorsMapper");
exports.default = (function (args, paymentService) {
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var amount, orderId, currency, typeId, customerId, returnUrl, paymentReference, metadataId, basketId, effectiveInterestRate, payload, response, authorization, _a, _b, error_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 3, , 4]);
                    amount = args.amount, orderId = args.orderId, currency = args.currency, typeId = args.typeId, customerId = args.customerId, returnUrl = args.returnUrl, paymentReference = args.paymentReference, metadataId = args.metadataId, basketId = args.basketId, effectiveInterestRate = args.effectiveInterestRate;
                    payload = {
                        amount: amount,
                        currency: currency,
                        returnUrl: returnUrl,
                        resources: {
                            typeId: typeId
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
                    if (effectiveInterestRate) {
                        payload.effectiveInterestRate = effectiveInterestRate;
                    }
                    // Add customer Id into payload if its passed
                    if (customerId) {
                        payload.resources.customerId = customerId;
                    }
                    // Add metadta Id into payload if its passed
                    if (metadataId) {
                        payload.resources.metadataId = metadataId;
                    }
                    if (basketId) {
                        payload.resources.basketId = basketId;
                    }
                    return [4 /*yield*/, paymentService
                            .getRequestAdapter()
                            .post(apiURL.URL_PAYMENT_AUTHORIZE, payload, paymentService.getHeidelpay().getPrivateKey())];
                case 1:
                    response = _c.sent();
                    if (response.errors) {
                        return [2 /*return*/, reject(ResponseErrorsMapper_1.default(response))];
                    }
                    authorization = new Authorization_1.default(paymentService.getHeidelpay());
                    // Set authorization Id
                    authorization.setId(response.id);
                    // Set amount
                    authorization.setAmount(response.amount);
                    // Set order Id
                    if (response.orderId) {
                        authorization.setOrderId(response.orderId);
                    }
                    // Set currency
                    authorization.setCurrency(response.currency);
                    // Set return URL
                    authorization.setReturnUrl(response.returnUrl);
                    // Set payment reference
                    if (response.paymentReference) {
                        authorization.setPaymentReference(response.paymentReference);
                    }
                    // Set resources
                    authorization.setResources(response.resources);
                    // Set Processing
                    authorization.setProcessing(response.processing);
                    // Set payment object
                    _b = (_a = authorization).setPayment;
                    return [4 /*yield*/, FetchPayment_1.default(response.resources.paymentId, paymentService)];
                case 2:
                    // Set payment object
                    _b.apply(_a, [_c.sent()]);
                    // Set Payload
                    authorization.setPayload(response);
                    // Resolve final result
                    resolve(authorization);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _c.sent();
                    // Reject with error object
                    return [2 /*return*/, reject(error_1)];
                case 4: return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=Authorization.js.map