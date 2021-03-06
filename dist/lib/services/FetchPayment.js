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
var Payment_1 = require("../payments/business/Payment");
var Utils_1 = require("../utils/Utils");
var FetchCancel_1 = require("./FetchCancel");
var FetchCharge_1 = require("./FetchCharge");
var FetchAuthorization_1 = require("./FetchAuthorization");
var ResponseErrorsMapper_1 = require("./mappers/ResponseErrorsMapper");
exports.default = (function (paymentId, paymentService) {
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var response, payment, _a, _b, _c, _d, _e, _f, error_1;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    _g.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, paymentService
                            .getRequestAdapter()
                            .get(apiURL.URL_PAYMENT + "/" + paymentId, paymentService.getHeidelpay().getPrivateKey())
                        // Handle errors response
                    ];
                case 1:
                    response = _g.sent();
                    // Handle errors response
                    if (response.errors) {
                        return [2 /*return*/, reject(ResponseErrorsMapper_1.default(response))];
                    }
                    payment = new Payment_1.default(paymentService.getHeidelpay());
                    // Set payment Id
                    payment.setId(response.id);
                    // Set resources
                    payment.setResources(response.resources);
                    // Fetch authorization transaction and set to payment object
                    _b = (_a = payment).setAuthorization;
                    return [4 /*yield*/, _fetchAuthorization(response.transactions, paymentService)];
                case 2:
                    // Fetch authorization transaction and set to payment object
                    _b.apply(_a, [_g.sent()]);
                    // Fetch cancel list transaction and set to payment object
                    _d = (_c = payment).setCancelList;
                    return [4 /*yield*/, _fetchCancelList(payment, response.transactions, paymentService)];
                case 3:
                    // Fetch cancel list transaction and set to payment object
                    _d.apply(_c, [_g.sent()]);
                    // Fetch charge list transaction and set to payment object
                    _f = (_e = payment).setChargeList;
                    return [4 /*yield*/, _fetchChargeList(payment, response.transactions, paymentService)];
                case 4:
                    // Fetch charge list transaction and set to payment object
                    _f.apply(_e, [_g.sent()]);
                    // Set Payload
                    payment.setPayload(response);
                    // Resolve final result
                    resolve(payment);
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _g.sent();
                    // Reject with error object
                    reject(error_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); });
});
var _fetchAuthorization = function (transactions, paymentService) {
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var authorizeItem, authorization;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    authorizeItem = transactions.find(function (item) { return item.type === 'authorize'; });
                    if (!(typeof authorizeItem === 'undefined')) return [3 /*break*/, 1];
                    resolve(); // No authorize Item found
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, FetchAuthorization_1.default(authorizeItem.url, paymentService)
                    // Resolve final result
                ];
                case 2:
                    authorization = _a.sent();
                    // Resolve final result
                    resolve(authorization);
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); });
};
var _fetchChargeList = function (payment, transactions, paymentService) {
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var chargeListItem, chargeList, cancelList, promiseCharge;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    chargeListItem = transactions.filter(function (item) { return item.type === 'charge'; });
                    chargeList = [];
                    cancelList = payment.getCancelList();
                    promiseCharge = chargeListItem.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                        var charge;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, FetchCharge_1.default(item.url, paymentService)
                                    // Set payment object in cancel
                                ];
                                case 1:
                                    charge = _a.sent();
                                    // Set payment object in cancel
                                    charge.setPayment(payment);
                                    // Set cancel list for charge object
                                    charge.setCancelList(cancelList.filter(function (itemCancel) { return itemCancel.getRefundId() === charge.getId(); }));
                                    // Push charge instance to chargeList array
                                    chargeList.push(charge);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    // Await util charge service fetch done
                    return [4 /*yield*/, Promise.all(promiseCharge)
                        // Resolve final result
                    ];
                case 1:
                    // Await util charge service fetch done
                    _a.sent();
                    // Resolve final result
                    resolve(chargeList);
                    return [2 /*return*/];
            }
        });
    }); });
};
var _fetchCancelList = function (payment, transactions, paymentService) {
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var cancelListItem, cancelList, promiseCancel;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cancelListItem = transactions.filter(function (item) { return item.type === 'cancel' || item.type === 'cancel-charge' || item.type === 'cancel-authorize'; });
                    cancelList = [];
                    promiseCancel = cancelListItem.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                        var cancel;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, FetchCancel_1.default(item.url, paymentService)
                                    // Set payment object in cancel
                                ];
                                case 1:
                                    cancel = _a.sent();
                                    // Set payment object in cancel
                                    cancel.setPayment(payment);
                                    // Set refund Id of cancel
                                    cancel.setRefundId(Utils_1.getRefundIdOfCancel(item.url));
                                    // Push charge instance to cancelList array
                                    cancelList.push(cancel);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    // Await util charge service fetch done
                    return [4 /*yield*/, Promise.all(promiseCancel)
                        // Resolve final result
                    ];
                case 1:
                    // Await util charge service fetch done
                    _a.sent();
                    // Resolve final result
                    resolve(cancelList);
                    return [2 /*return*/];
            }
        });
    }); });
};
//# sourceMappingURL=FetchPayment.js.map