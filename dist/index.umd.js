(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.index = {})));
}(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
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
    }

    var SDK_TYPE = 'HeidelpayNodeJS';
    var SDK_VERSION = '1.3.1';

    var Customer = /** @class */ (function () {
        function Customer(firstName, lastName) {
            if (firstName === void 0) { firstName = ''; }
            if (lastName === void 0) { lastName = ''; }
            this._firstName = firstName;
            this._lastName = lastName;
        }
        /**
         * Get Request Payload
         */
        Customer.prototype.getRequestPayload = function () {
            return {
                lastname: this.getLastName(),
                firstname: this.getFirstName(),
                salutation: this.getSalutation(),
                birthDate: this.getBirthDate(),
                company: this.getCompany(),
                email: this.getEmail(),
                phone: this.getPhone(),
                mobile: this.getMobile(),
                billingAddress: this.getBillingAddress(),
                shippingAddress: this.getShippingAddress(),
                companyInfo: this.getCompanyInfo(),
            };
        };
        /**
         * Set FirstName
         *
         * @param {string} value
         * @returns {Customer}
         */
        Customer.prototype.setFirstName = function (value) {
            this._firstName = value;
            return this;
        };
        /**
         * Get first name property
         *
         * @type {string}
         */
        Customer.prototype.getFirstName = function () {
            return this._firstName;
        };
        /**
         * Set LastName
         *
         * @param {string} value
         * @returns {Customer}
         */
        Customer.prototype.setLastName = function (value) {
            this._lastName = value;
            return this;
        };
        /**
         * Get last name property
         *
         * @type {string}
         */
        Customer.prototype.getLastName = function () {
            return this._lastName;
        };
        /**
         * Set Salutation
         *
         * @param {string} value
         * @returns {Customer}
         */
        Customer.prototype.setSalutation = function (value) {
            this._salutation = value;
            return this;
        };
        /**
         * Get salutation
         *
         * @type {Salutation}
         */
        Customer.prototype.getSalutation = function () {
            return this._salutation;
        };
        /**
         * Set CustomerId
         *
         * @param {string} value
         * @returns {Customer}
         */
        Customer.prototype.setCustomerId = function (value) {
            this._customerId = value;
            return this;
        };
        /**
         * Get customer Id
         *
         * @type {string}
         */
        Customer.prototype.getCustomerId = function () {
            return this._customerId;
        };
        /**
         * Set Company
         *
         * @param {string} value
         * @returns {Customer}
         */
        Customer.prototype.setCompany = function (value) {
            this._company = value;
            return this;
        };
        /**
         * Get Company
         *
         * @type {string}
         */
        Customer.prototype.getCompany = function () {
            return this._company;
        };
        /**
         * Set Birthday
         *
         * @param {string} value
         * @returns {Customer}
         */
        Customer.prototype.setBirthDate = function (value) {
            this._birthDate = value;
            return this;
        };
        /**
         * Get birthdate
         *
         * @type {Date}
         */
        Customer.prototype.getBirthDate = function () {
            return this._birthDate;
        };
        /**
         * Set Emaile
         *
         * @param {string} value
         * @returns {Customer}
         */
        Customer.prototype.setEmail = function (value) {
            this._email = value;
            return this;
        };
        /**
         * Get email
         *
         * @type {string}
         */
        Customer.prototype.getEmail = function () {
            return this._email;
        };
        /**
         * Set Phone
         *
         * @param {string} value
         * @returns {Customer}
         */
        Customer.prototype.setPhone = function (value) {
            this._phone = value;
            return this;
        };
        /**
         * Get phone
         *
         * @type {string}
         */
        Customer.prototype.getPhone = function () {
            return this._phone;
        };
        /**
         * Set Mobile
         *
         * @param {string} value
         * @returns {Customer}
         */
        Customer.prototype.setMobile = function (value) {
            this._mobile = value;
            return this;
        };
        /**
         * Get mobile
         *
         * @type {string}
         */
        Customer.prototype.getMobile = function () {
            return this._mobile;
        };
        /**
         * Set Address
         *
         * @param {Address} value
         * @returns {Customer}
         */
        Customer.prototype.setBillingAddress = function (value) {
            this._billingAddress = value;
            return this;
        };
        /**
         * Get address
         *
         * @type {Address}
         */
        Customer.prototype.getBillingAddress = function () {
            return this._billingAddress;
        };
        /**
         * Set Shipping Address
         * @param value
         */
        Customer.prototype.setShippingAddress = function (value) {
            this._shippingAddress = value;
            return this;
        };
        /**
         * Set Shipping Address
         * @param value
         */
        Customer.prototype.getShippingAddress = function () {
            return this._shippingAddress;
        };
        /**
         * Set Company Information
         *
         * @param {CompanyInfo} companyInfo
         * @returns {Customer}
         */
        Customer.prototype.setCompanyInfo = function (companyInfo) {
            this._companyInfo = companyInfo;
            return this;
        };
        /**
         * Get Company Information
         *
         * @type {CompanyInfo}
         */
        Customer.prototype.getCompanyInfo = function () {
            return this._companyInfo;
        };
        return Customer;
    }());
    (function (Salutation) {
        Salutation["mr"] = "mr";
        Salutation["mrs"] = "mrs";
        Salutation["unknown"] = "unknown";
    })(exports.Salutation || (exports.Salutation = {}));

    var Environment = {
        development: {
            apiProtocol: 'https',
            apiHost: 'dev-api.heidelpay.com',
            apiVersion: 'v1',
        },
        staging: {
            apiProtocol: 'https',
            apiHost: 'stg-api.heidelpay.com',
            apiVersion: 'v1',
        },
        production: {
            apiProtocol: 'https',
            apiHost: 'api.heidelpay.com',
            apiVersion: 'v1',
        },
    };

    var Base64 = require('js-base64').Base64;
    require('es6-promise').polyfill();
    require('isomorphic-fetch');
    /**
     * Fetch Adapter
     *
     * @export
     * @class FetchAdapter
     */
    var FetchAdapter = /** @class */ (function () {
        function FetchAdapter(locale, env) {
            var argsConfig;
            switch (env) {
                case 'development':
                    argsConfig = Environment['development'];
                    break;
                case 'staging':
                    argsConfig = Environment['staging'];
                    break;
                default:
                    argsConfig = Environment['production'];
            }
            var config = {
                apiProtocol: argsConfig.apiProtocol,
                apiHost: argsConfig.apiHost,
                apiVersion: argsConfig.apiVersion,
            };
            this.locale = locale;
            this.api = config.apiProtocol + "://" + config.apiHost + "/" + config.apiVersion;
        }
        /**
         * @param  {string} url
         */
        FetchAdapter.prototype.get = function (url, privateKey, isRawUrl) {
            if (isRawUrl === void 0) { isRawUrl = false; }
            return this._fetch(url, {
                method: 'GET'
            }, privateKey, isRawUrl);
        };
        /**
         * @param  {string} url
         * @param  {object} body
         */
        FetchAdapter.prototype.post = function (url, body, privateKey, isRawUrl) {
            if (isRawUrl === void 0) { isRawUrl = false; }
            return this._fetch(url, {
                method: 'POST',
                body: JSON.stringify(body)
            }, privateKey, isRawUrl);
        };
        /**
         * @param  {string} url
         * @param  {object} body
         */
        FetchAdapter.prototype.put = function (url, body, privateKey) {
            return this._fetch(url, {
                method: 'PUT',
                body: JSON.stringify(body)
            }, privateKey);
        };
        /**
         * @param  {string} url
         * @param  {object} body
         */
        FetchAdapter.prototype.delete = function (url, body, privateKey) {
            return this._fetch(url, {
                method: 'DELETE',
                body: JSON.stringify(body)
            }, privateKey);
        };
        FetchAdapter.prototype._fetch = function (url, options, privateKey, isRawUrl) {
            if (options === void 0) { options = {}; }
            if (isRawUrl === void 0) { isRawUrl = false; }
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var password = '';
                            var basicAuthValue = Base64.encode(privateKey + ":" + password);
                            var requestUrl = isRawUrl === true ? url : "" + _this.api + url;
                            fetch(requestUrl, __assign({ headers: {
                                    'SDK-TYPE': SDK_TYPE,
                                    'SDK-VERSION': SDK_VERSION,
                                    'Authorization': "Basic " + basicAuthValue,
                                    'Accept-Language': _this.locale || 'en_US',
                                    'Content-Type': 'application/json'
                                } }, options))
                                .then(function (response) {
                                if (options.method === 'DELETE') {
                                    resolve(_this._parseJSON(response));
                                }
                                else {
                                    resolve(response.json());
                                }
                            })
                                .catch(function (error) {
                                reject(error);
                            });
                        })];
                });
            });
        };
        FetchAdapter.prototype._parseJSON = function (response) {
            return response.text().then(function (text) {
                return text ? JSON.parse(text) : '';
            });
        };
        return FetchAdapter;
    }());

    var ResponseErrorsMapper = (function (response) {
        throw new Error(JSON.stringify(response.errors));
    });

    var _this = this;
    var CreatePaymentType = (function (paymentType, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .post(paymentType.getTypeUrl(), paymentType.getPayload(), paymentService.getHeidelpay().getPrivateKey())
                            // Handle errors response    
                        ];
                    case 1:
                        response = _a.sent();
                        // Handle errors response    
                        if (response.errors) {
                            return [2 /*return*/, reject(ResponseErrorsMapper(response))];
                        }
                        // Set Heidelpay instance
                        paymentType.setHeidelpay(paymentService.getHeidelpay());
                        // Set Payment Id
                        paymentType.setId(response.id);
                        if (response.geoLocation) {
                            paymentType.setGeoLocation(response.geoLocation);
                        }
                        // Resolve final result
                        resolve(paymentType);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        // Reject with error object
                        return [2 /*return*/, reject(error_1)];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });

    var URL_PAYMENT = '/payments';
    var URL_PAYMENT_AUTHORIZE = URL_PAYMENT + "/authorize";
    var URL_PAYMENT_AUTHORIZE_CANCEL = URL_PAYMENT + "/{paymentId}/authorize/{authorizationId}/cancels";
    var URL_PAYMENT_CHARGE = URL_PAYMENT + "/charges";
    var URL_PAYMENT_CHARGE_AUTHORIZE = URL_PAYMENT + "/{paymentId}/charges";
    var URL_PAYMENT_CHARGE_CANCEL = URL_PAYMENT + "/{paymentId}/charges/{chargeId}/cancels";
    var URL_PAYMENT_SHIPMENT = URL_PAYMENT + "/{paymentId}/shipments";
    var URL_PAYMENT_PAYOUT = URL_PAYMENT + "/payouts";
    var URL_CUSTOMER = '/customers';
    var URL_METADATA = '/metadata';
    var URL_BASKET = '/baskets';
    var URL_RECURRING = "/types/{typeId}/recurring";
    var URL_TYPE_BANCONTACT = '/types/bancontact';
    var URL_TYPE_CARD = '/types/card';
    var URL_TYPE_EPS = '/types/eps';
    var URL_TYPE_GIROPAY = '/types/giropay';
    var URL_TYPE_IDEAL = '/types/ideal';
    var URL_TYPE_INVOICE = '/types/invoice';
    var URL_TYPE_INVOICE_GUARANTEED = '/types/invoice-guaranteed';
    var URL_TYPE_INVOICE_SECURED = '/types/invoice-secured';
    var URL_TYPE_INVOICE_FACTORING = '/types//invoice-factoring';
    var URL_TYPE_PAYPAL = '/types/paypal';
    var URL_TYPE_PREPAYMENT = '/types/prepayment';
    var URL_TYPE_PRZELEWY24 = '/types/przelewy24';
    var URL_TYPE_SEPA_DIRECT_DEBIT = '/types/sepa-direct-debit';
    var URL_TYPE_SEPA_DIRECT_DEBIT_GUARANTEED = '/types/sepa-direct-debit-guaranteed';
    var URL_TYPE_SEPA_DIRECT_DEBIT_SECURED = '/types/sepa-direct-debit-secured';
    var URL_TYPE_SOFORT = '/types/sofort';
    var URL_TYPE_PIS = '/types/pis';
    var URL_TYPE_ALIPAY = '/types/alipay';
    var URL_TYPE_WECHATPAY = '/types/wechatpay';
    var URL_TYPE_HIRE_PURCHASE = '/types/hire-purchase-direct-debit';
    var URL_TYPE_HIRE_PURCHASE_PLANS = '/types/hire-purchase-direct-debit/plans';
    var URL_PAYPAGE_CHARGE = '/paypage/charge';
    var URL_PAYPAGE_AUTHORIZE = '/paypage/authorize';
    var URL_WEBHOOK = '/webhooks';
    var URL_LINKPAY = '/linkpay';
    var URL_LINKPAY_CHARGE = '/linkpay/charge';
    var URL_LINKPAY_AUTHORIZE = '/linkpay/authorize';

    var AbstractPayment = /** @class */ (function () {
        function AbstractPayment(heidelpay) {
            this._heidelpay = heidelpay;
            this._id = '';
        }
        /**
         * Set a payment object
         *
         * @param {Payment} payment
         */
        AbstractPayment.prototype.setPayment = function (payment) {
            this._payment = payment;
        };
        /**
         * Get payment object
         *
         * @returns {Payment}
         */
        AbstractPayment.prototype.getPayment = function () {
            return this._payment;
        };
        /**
         * Get instance Heidelpay
         *
         * @returns {Heidelpay}
         */
        AbstractPayment.prototype.getHeidelpay = function () {
            return this._heidelpay;
        };
        /**
         * Set Payment Id
         *
         * @param {string} paymentId
         */
        AbstractPayment.prototype.setId = function (paymentId) {
            this._id = paymentId;
        };
        /**
         * Get Payment Id
         *
         * @returns {string}
         */
        AbstractPayment.prototype.getId = function () {
            return this._id;
        };
        /**
         * Get payload object
         *
         * @returns {*}
         */
        AbstractPayment.prototype.getPayload = function () {
            return this._payload;
        };
        /**
         * Set payload object
         *
         * @param {*} payload
         * @returns
         */
        AbstractPayment.prototype.setPayload = function (payload) {
            return this._payload = payload;
        };
        return AbstractPayment;
    }());

    var Resources = /** @class */ (function () {
        function Resources() {
        }
        /**
         * Get type Id
         *
         * @returns
         */
        Resources.prototype.getTypeId = function () {
            return this.typeId;
        };
        /**
         * Set type Id
         *
         * @param {string} typeId
         * @returns
         */
        Resources.prototype.setTypeId = function (typeId) {
            this.typeId = typeId;
            return this;
        };
        /**
         * Get customer Id
         *
         * @returns {string}
         */
        Resources.prototype.getCustomerId = function () {
            return this.customerId;
        };
        /**
         * Set customer Id
         *
         * @param {string} customerId
         * @returns {Resources}
         */
        Resources.prototype.setCustomerId = function (customerId) {
            this.customerId = customerId;
            return this;
        };
        /**
         * Get meta data Id
         *
         * @returns {string}
         */
        Resources.prototype.getMetadataId = function () {
            return this.metadataId;
        };
        /**
         * Set meta data Id
         *
         * @param {string} metadataId
         * @returns {Resources}
         */
        Resources.prototype.setMetadataId = function (metadataId) {
            this.metadataId = metadataId;
            return this;
        };
        /**
         * Get payment Id
         *
         * @returns {string}
         */
        Resources.prototype.getPaymentId = function () {
            return this.paymentId;
        };
        /**
         * Set Payment Id
         *
         * @param {string} paymentId
         * @returns {Resources}
         */
        Resources.prototype.setPaymentId = function (paymentId) {
            this.paymentId = paymentId;
            return this;
        };
        /**
         * Get Basket Id
         *
         * @returns {string}
         */
        Resources.prototype.getBasketId = function () {
            return this.basketId;
        };
        /**
         * Set Trace Id
         *
         * @param {string} traceId
         * @returns {Resources}
         */
        Resources.prototype.setTraceId = function (traceId) {
            this.traceId = traceId;
            return this;
        };
        /**
         * Get Trace Id
         *
         * @returns {string}
         */
        Resources.prototype.getTraceId = function () {
            return this.traceId;
        };
        /**
         * Set Basket Id
         *
         * @param {string} paymentId
         * @returns {Resources}
         */
        Resources.prototype.setBasketId = function (basketId) {
            this.basketId = basketId;
            return this;
        };
        return Resources;
    }());

    var Payment = /** @class */ (function (_super) {
        __extends(Payment, _super);
        function Payment(heidelpay) {
            var _this = _super.call(this, heidelpay) || this;
            _this.resources = new Resources();
            return _this;
        }
        /**
         * Get resources
         *
         * @returns {Resources}
         */
        Payment.prototype.getResources = function () {
            return this.resources;
        };
        /**
         * Set resources
         *
         * @param {*} resources
         */
        Payment.prototype.setResources = function (resources) {
            this.resources
                .setCustomerId(resources.customerId)
                .setMetadataId(resources.metadataId)
                .setPaymentId(resources.paymentId)
                .setTypeId(resources.typeId)
                .setTraceId(resources.traceId);
        };
        /**
         * Set authorize transaction
         *
         * @param {Authorization} authorization
         */
        Payment.prototype.setAuthorization = function (authorization) {
            this.authorization = authorization;
        };
        /**
         * Get authorize transaction
         *
         * @returns {Authorization}
         */
        Payment.prototype.getAuthorization = function () {
            return this.authorization;
        };
        /**
         * Set list charge transactions
         *
         * @param {Array<Charge>} chargeList
         */
        Payment.prototype.setChargeList = function (chargeList) {
            this.chargeList = chargeList;
        };
        /**
         * Get list charge transactions
         *
         * @returns {Array<Charge>}
         */
        Payment.prototype.getChargeList = function () {
            return this.chargeList;
        };
        /**
         * Get charge transaction
         *
         * @param {string} chargeId
         * @returns {Charge}
         */
        Payment.prototype.getCharge = function (chargeId) {
            var chargeItem = this.getChargeList().find(function (item) { return item.getId() === chargeId; });
            if (chargeItem && chargeItem.getId()) {
                return chargeItem;
            }
            throw new Error("Charge Id is not found in list of transaction");
        };
        /**
         * Set list cancel transactions
         *
         * @param {Array<Cancel>} chargeList
         */
        Payment.prototype.setCancelList = function (cancelList) {
            this.cancelList = cancelList;
        };
        /**
         * Get list cancel transactions
         *
         * @returns {Array<Cancel>}
         */
        Payment.prototype.getCancelList = function () {
            return this.cancelList;
        };
        /**
         * Get cancel transaction
         *
         * @param {string} cancelId
         * @returns {Cancel}
         */
        Payment.prototype.getCancel = function (cancelId, refundId) {
            var cancelItem;
            if (refundId) {
                // Find item in list of cancel with cancel Id and refund Id
                cancelItem = this.getCancelList().find(function (item) { return item.getId() === cancelId && item.getRefundId() === refundId; });
            }
            else {
                // Find item in list of cancel with only cancel Id
                cancelItem = this.getCancelList().find(function (item) { return item.getId() === cancelId; });
            }
            if (cancelItem && cancelItem.getId()) {
                return cancelItem;
            }
            throw new Error("Cancel Id is not found in list of transaction");
        };
        return Payment;
    }(AbstractPayment));

    var AbstractPaymentType = /** @class */ (function () {
        function AbstractPaymentType() {
        }
        /**
         * Set Heidelpay instance
         *
         * @param {Heidelpay} heidelpay
         */
        AbstractPaymentType.prototype.setHeidelpay = function (heidelpay) {
            this._heidelpay = heidelpay;
        };
        /**
         * Get instance Heidelpay
         *
         * @returns {Heidelpay}
         */
        AbstractPaymentType.prototype.getHeidelpay = function () {
            return this._heidelpay;
        };
        /**
         * Set Payment Id
         *
         * @param {string} paymentId
         */
        AbstractPaymentType.prototype.setId = function (paymentId) {
            this._id = paymentId;
        };
        /**
         * Get Payment Id
         *
         * @returns {string}
         */
        AbstractPaymentType.prototype.getId = function () {
            return this._id;
        };
        /**
         * Authorize with payment card
         *
         * @param {authorizeObject} args
         * @returns {Promise<Authorization>}
         */
        AbstractPaymentType.prototype.authorize = function (args) {
            return this.getHeidelpay().authorize(args);
        };
        /**
         * Charge on authorize
         *
         * @param {chargeAuthorizeObject} args
         * @returns {Promise<Charge>}
         */
        AbstractPaymentType.prototype.charge = function (args) {
            return this.getHeidelpay().charge(args);
        };
        /**
         * Get geoLocation
         *
         * @returns {any}
         */
        AbstractPaymentType.prototype.getGeoLocation = function () {
            return this._geoLocation;
        };
        /**
         * Set geoLocation
         *
         * @param {any} geoLocation
         * @returns {any}
         */
        AbstractPaymentType.prototype.setGeoLocation = function (geoLocation) {
            this._geoLocation = geoLocation;
        };
        /**
         * Set PayPal email
         *
         * @param {string} email
         */
        AbstractPaymentType.prototype.setEmail = function (email) {
            this._email = email;
        };
        /**
         * Get PayPal email
         *
         * @returns {string}
         */
        AbstractPaymentType.prototype.getEmail = function () {
            return this._email;
        };
        return AbstractPaymentType;
    }());

    var Alipay = /** @class */ (function (_super) {
        __extends(Alipay, _super);
        function Alipay() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Get url end point
         *
         * @returns {string}
         */
        Alipay.prototype.getTypeUrl = function () {
            return URL_TYPE_ALIPAY;
        };
        /**
         * Get Payload
         *
         * @returns
         */
        Alipay.prototype.getPayload = function () {
            return {};
        };
        return Alipay;
    }(AbstractPaymentType));

    var Bancontact = /** @class */ (function (_super) {
        __extends(Bancontact, _super);
        function Bancontact() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Get url end point
         *
         * @returns {string}
         */
        Bancontact.prototype.getTypeUrl = function () {
            return URL_TYPE_BANCONTACT;
        };
        /**
       * Set holder
       *
       * @param {string} cardHolder
       * @returns {Card}
       */
        Bancontact.prototype.setHolder = function (holder) {
            this._holder = holder;
            return this;
        };
        /**
         * Get holder
         *
         * @returns {string}
         */
        Bancontact.prototype.getHolder = function () {
            return this._holder;
        };
        /**
         * Get Payload
         *
         * @returns
         */
        Bancontact.prototype.getPayload = function () {
            if (typeof this.getHolder() === 'undefined') {
                return {};
            }
            return {
                holder: this._holder
            };
        };
        return Bancontact;
    }(AbstractPaymentType));

    var Card = /** @class */ (function (_super) {
        __extends(Card, _super);
        function Card(number, expiryDate) {
            if (number === void 0) { number = ''; }
            if (expiryDate === void 0) { expiryDate = ''; }
            var _this = _super.call(this) || this;
            _this._number = number;
            _this._expiryDate = expiryDate;
            _this._cardHolder = '';
            _this._cardDetails = {};
            return _this;
        }
        /**
         * Get url end point
         *
         * @returns {string}
         */
        Card.prototype.getTypeUrl = function () {
            return URL_TYPE_CARD;
        };
        /**
         * Get Payload
         *
         * @returns
         */
        Card.prototype.getPayload = function () {
            var payload = {
                number: this.getNumber(),
                cvc: this.getCVC(),
                expiryDate: this.getExpiryDate()
            };
            if (this.get3ds() !== undefined) {
                payload['3ds'] = this.get3ds();
            }
            return payload;
        };
        /**
         * Set pan number
         *
         * @param {string} number
         * @returns {Card}
         */
        Card.prototype.setNumber = function (number) {
            this._number = number;
            return this;
        };
        /**
         * Get pan number
         *
         * @returns {string}
         */
        Card.prototype.getNumber = function () {
            return this._number;
        };
        /**
         * Set CVC number
         *
         * @param {string} cvc
         * @returns {Card}
         */
        Card.prototype.setCVC = function (cvc) {
            this._cvc = cvc;
            return this;
        };
        /**
         * Get CVC
         *
         * @returns {string}
         */
        Card.prototype.getCVC = function () {
            return this._cvc;
        };
        /**
         * Set expiry date
         *
         * @param {string} expiryDate
         * @returns {Card}
         */
        Card.prototype.setExpiryDate = function (expiryDate) {
            this._expiryDate = expiryDate;
            return this;
        };
        /**
         * Get expirty Date
         *
         * @returns {string}
         */
        Card.prototype.getExpiryDate = function () {
            return this._expiryDate;
        };
        /**
         * Set card holder
         *
         * @param {string} cardHolder
         * @returns {Card}
         */
        Card.prototype.setCardHolder = function (cardHolder) {
            this._cardHolder = cardHolder;
            return this;
        };
        /**
         * Get card holder
         *
         * @returns {string}
         */
        Card.prototype.getCardHolder = function () {
            return this._cardHolder;
        };
        /**
         * Set brand name
         *
         * @param {string} brand
         * @returns {Card}
         */
        Card.prototype.setBrand = function (brand) {
            this._brand = brand;
            return this;
        };
        /**
         * Get brand name
         *
         * @returns {string}
         */
        Card.prototype.getBrand = function () {
            return this._brand;
        };
        /**
         * Set recurring option
         *
         * @param {string} recurring
         * @returns {Card}
         */
        Card.prototype.setRecurring = function (recurring) {
            this._recurring = recurring;
            return this;
        };
        /**
         * Get recurring option
         *
         * @returns {string}
         */
        Card.prototype.getRecurring = function () {
            return this._recurring;
        };
        /**
         * Set card detail
         *
         * @param {object} cardDetail
         * @returns {Card}
         */
        Card.prototype.setCardDetails = function (cardDetails) {
            this._cardDetails = cardDetails;
            return this;
        };
        /**
         * Get card detail
         *
         * @returns {object}
         */
        Card.prototype.getCardDetails = function () {
            return this._cardDetails;
        };
        /**
         * Set 3ds option
         *
         * @param {string} expiryDate
         * @returns {Card}
         */
        Card.prototype.set3ds = function (secure) {
            this._3ds = secure;
            return this;
        };
        /**
         * Get 3ds option
         *
         * @returns {string}
         */
        Card.prototype.get3ds = function () {
            return this._3ds;
        };
        return Card;
    }(AbstractPaymentType));

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
            return URL_TYPE_EPS;
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
    }(AbstractPaymentType));

    var Giropay = /** @class */ (function (_super) {
        __extends(Giropay, _super);
        function Giropay() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Get url end point
         *
         * @returns {string}
         */
        Giropay.prototype.getTypeUrl = function () {
            return URL_TYPE_GIROPAY;
        };
        /**
         * Get Payload
         *
         * @returns
         */
        Giropay.prototype.getPayload = function () {
            return {};
        };
        return Giropay;
    }(AbstractPaymentType));

    var HirePurchase = /** @class */ (function (_super) {
        __extends(HirePurchase, _super);
        function HirePurchase() {
            return _super.call(this) || this;
        }
        /**
         * Set Iban
         *
         * @param {string} iban
         * @returns {HirePurchase}
         */
        HirePurchase.prototype.setIban = function (iban) {
            this._iban = iban;
            return this;
        };
        /**
         * Get Iban
         *
         * @returns {string}
         */
        HirePurchase.prototype.getIban = function () {
            return this._iban;
        };
        /**
         * Set BIC
         *
         * @param {string} bic
         * @returns {HirePurchase}
         */
        HirePurchase.prototype.setBic = function (bic) {
            this._bic = bic;
            return this;
        };
        /**
         * Get Bic
         *
         * @returns {string}
         */
        HirePurchase.prototype.getBic = function () {
            return this._bic;
        };
        /**
         * Set Account Holader
         *
         * @param {string} accountHolder
         * @returns {HirePurchase}
         */
        HirePurchase.prototype.setAccountHolder = function (accountHolder) {
            this._accountHolder = accountHolder;
            return this;
        };
        /**
         * Get Account Holder
         *
         * @returns {string}
         */
        HirePurchase.prototype.getAccountHolder = function () {
            return this._accountHolder;
        };
        /**
         * Set Invoice Date
         *
         * @param {string} invoiceDate
         * @returns {HirePurchase}
         */
        HirePurchase.prototype.setInvoiceDate = function (invoiceDate) {
            this._invoiceDate = invoiceDate;
            return this;
        };
        /**
         * Get Invoice Date
         *
         * @returns {string}
         */
        HirePurchase.prototype.getInvoiceDate = function () {
            return this._invoiceDate;
        };
        /**
         * Set Invoice Due Date
         *
         * @param {string} invoiceDueDate
         * @returns {HirePurchase}
         */
        HirePurchase.prototype.setInvoiceDueDate = function (invoiceDueDate) {
            this._invoiceDueDate = invoiceDueDate;
            return this;
        };
        /**
         * Get Invoice Due Date
         *
         * @returns {string}
         */
        HirePurchase.prototype.getInvoiceDueDate = function () {
            return this._invoiceDueDate;
        };
        /**
         * Set Number of Rate
         *
         * @param {string} numberOfRates
         * @returns {HirePurchase}
         */
        HirePurchase.prototype.setNumberOfRates = function (numberOfRates) {
            this._numberOfRates = numberOfRates;
            return this;
        };
        /**
         * Get Number of Rate
         *
         * @returns {string}
         */
        HirePurchase.prototype.getNumberOfRates = function () {
            return this._numberOfRates;
        };
        /**
         * Set Day of purchase
         *
         * @param {string} dayOfPurchase
         * @returns {HirePurchase}
         */
        HirePurchase.prototype.setDayOfPurchase = function (dayOfPurchase) {
            this._dayOfPurchase = dayOfPurchase;
            return this;
        };
        /**
         * Get Day of Purchase
         *
         * @returns {string}
         */
        HirePurchase.prototype.getDayOfPurchase = function () {
            return this._dayOfPurchase;
        };
        /**
         * Set Order Date
         *
         * @param {string} orderDate
         * @returns {HirePurchase}
         */
        HirePurchase.prototype.setOrderDate = function (orderDate) {
            this._orderDate = orderDate;
            return this;
        };
        /**
         * Get Order Date
         *
         * @returns {string}
         */
        HirePurchase.prototype.getOrderDate = function () {
            return this._orderDate;
        };
        /**
         * Set Total Amount
         *
         * @param {number} totalPurchaseAmount
         * @returns {HirePurchase}
         */
        HirePurchase.prototype.setTotalPurchaseAmount = function (totalPurchaseAmount) {
            this._totalPurchaseAmount = totalPurchaseAmount;
            return this;
        };
        /**
         * Get Total Amount
         *
         * @returns {number}
         */
        HirePurchase.prototype.getTotalPurchaseAmount = function () {
            return this._totalPurchaseAmount;
        };
        /**
         * Set Interest Amount
         *
         * @param {number} totalInterestAmount
         * @returns {HirePurchase}
         */
        HirePurchase.prototype.setTotalInterestAmount = function (totalInterestAmount) {
            this._totalInterestAmount = totalInterestAmount;
            return this;
        };
        /**
         * Get Interest Amount
         *
         * @returns {number}
         */
        HirePurchase.prototype.getTotalInterestAmount = function () {
            return this._totalInterestAmount;
        };
        /**
         * Set Total Amount
         *
         * @param {number} totalAmount
         * @returns {HirePurchase}
         */
        HirePurchase.prototype.setTotalAmount = function (totalAmount) {
            this._totalAmount = totalAmount;
            return this;
        };
        /**
         * Get Total Amount
         *
         * @returns {number}
         */
        HirePurchase.prototype.getTotalAmount = function () {
            return this._totalAmount;
        };
        /**
         * Set Total Amount
         *
         * @param {number} totalAmount
         * @returns {HirePurchase}
         */
        HirePurchase.prototype.setEffectiveInterestRate = function (effectiveInterestRate) {
            this._effectiveInterestRate = effectiveInterestRate;
            return this;
        };
        /**
         * Get Total Amount
         *
         * @returns {number}
         */
        HirePurchase.prototype.getEffectiveInterestRate = function () {
            return this._effectiveInterestRate;
        };
        /**
         * Set Nominal Interest Rate
         *
         * @param {number} nominalInterestRate
         * @returns {HirePurchase}
         */
        HirePurchase.prototype.setNominalInterestRate = function (nominalInterestRate) {
            this._nominalInterestRate = nominalInterestRate;
            return this;
        };
        /**
         * Get Nominal Interest Rate
         *
         * @returns {number}
         */
        HirePurchase.prototype.getNominalInterestRate = function () {
            return this._nominalInterestRate;
        };
        /**
         * Set Fee First Rate
         *
         * @param {number} feeFirstRate
         * @returns {HirePurchase}
         */
        HirePurchase.prototype.setFeeFirstRate = function (feeFirstRate) {
            this._feeFirstRate = feeFirstRate;
            return this;
        };
        /**
         * Get Nominal Interest Rate
         *
         * @returns {number}
         */
        HirePurchase.prototype.getFeeFirstRate = function () {
            return this._feeFirstRate;
        };
        /**
         * Set Fee Per Rate
         *
         * @param {number} feePerRate
         * @returns {HirePurchase}
         */
        HirePurchase.prototype.setFeePerRate = function (feePerRate) {
            this._feePerRate = feePerRate;
            return this;
        };
        /**
         * Get Nominal Interest Rate
         *
         * @returns {number}
         */
        HirePurchase.prototype.getFeePerRate = function () {
            return this._feePerRate;
        };
        /**
         * Set Monthly Rate
         *
         * @param {number} monthlyRate
         * @returns {HirePurchase}
         */
        HirePurchase.prototype.setMonthlyRate = function (monthlyRate) {
            this._monthlyRate = monthlyRate;
            return this;
        };
        /**
         * Get Monthly Rate
         *
         * @returns {number}
         */
        HirePurchase.prototype.getMonthlyRate = function () {
            return this._monthlyRate;
        };
        /**
         * Set Last Rate
         *
         * @param {number} lastRate
         * @returns {HirePurchase}
         */
        HirePurchase.prototype.setLastRate = function (lastRate) {
            this._lastRate = lastRate;
            return this;
        };
        /**
         * Get Monthly Rate
         *
         * @returns {number}
         */
        HirePurchase.prototype.getLastRate = function () {
            return this._lastRate;
        };
        /**
         * Get url end point
         *
         * @returns {string}
         */
        HirePurchase.prototype.getTypeUrl = function () {
            return URL_TYPE_HIRE_PURCHASE;
        };
        /**
         * Get Payload
         *
         * @returns
         */
        HirePurchase.prototype.getPayload = function () {
            return {
                iban: this.getIban(),
                bic: this.getBic(),
                accountHolder: this.getAccountHolder(),
                invoiceDate: this.getInvoiceDate(),
                invoiceDueDate: this.getInvoiceDueDate(),
                numberOfRates: this.getNumberOfRates(),
                dayOfPurchase: this.getDayOfPurchase(),
                totalPurchaseAmount: this.getTotalPurchaseAmount(),
                totalInterestAmount: this.getTotalInterestAmount(),
                totalAmount: this.getTotalAmount(),
                effectiveInterestRate: this.getEffectiveInterestRate(),
                nominalInterestRate: this.getNominalInterestRate(),
                feeFirstRate: this.getFeeFirstRate(),
                feePerRate: this.getFeePerRate(),
                monthlyRate: this.getMonthlyRate(),
                lastRate: this.getLastRate(),
            };
        };
        return HirePurchase;
    }(AbstractPaymentType));

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
            return URL_TYPE_IDEAL;
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
    }(AbstractPaymentType));

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
            return URL_TYPE_INVOICE;
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
    }(AbstractPaymentType));

    var InvoiceFactoring = /** @class */ (function (_super) {
        __extends(InvoiceFactoring, _super);
        function InvoiceFactoring() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Get url end point
         *
         * @returns {string}
         */
        InvoiceFactoring.prototype.getTypeUrl = function () {
            return URL_TYPE_INVOICE_FACTORING;
        };
        /**
         * Set Invoice Id
         *
         * @param {string} invoiceId
         */
        InvoiceFactoring.prototype.setInvoiceId = function (invoiceId) {
            this._invoiceId = invoiceId;
        };
        /**
         * Get Invoice Id
         *
         * @returns {string}
         */
        InvoiceFactoring.prototype.getInvoiceId = function () {
            return this._invoiceId;
        };
        /**
         * Get Payload
         *
         * @returns
         */
        InvoiceFactoring.prototype.getPayload = function () {
            if (typeof this.getInvoiceId() === 'undefined') {
                return {};
            }
            return {
                invoiceId: this._invoiceId
            };
        };
        return InvoiceFactoring;
    }(AbstractPaymentType));

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
            return URL_TYPE_INVOICE_GUARANTEED;
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
    }(AbstractPaymentType));

    var InvoiceSecured = /** @class */ (function (_super) {
        __extends(InvoiceSecured, _super);
        function InvoiceSecured() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Get url end point
         *
         * @returns {string}
         */
        InvoiceSecured.prototype.getTypeUrl = function () {
            return URL_TYPE_INVOICE_SECURED;
        };
        /**
         * Set Invoice Id
         *
         * @param {string} invoiceId
         */
        InvoiceSecured.prototype.setInvoiceId = function (invoiceId) {
            this._invoiceId = invoiceId;
        };
        /**
         * Get Invoice Id
         *
         * @returns {string}
         */
        InvoiceSecured.prototype.getInvoiceId = function () {
            return this._invoiceId;
        };
        /**
         * Get Payload
         *
         * @returns
         */
        InvoiceSecured.prototype.getPayload = function () {
            if (typeof this.getInvoiceId() === 'undefined') {
                return {};
            }
            return {
                invoiceId: this._invoiceId
            };
        };
        return InvoiceSecured;
    }(AbstractPaymentType));

    var Paypal = /** @class */ (function (_super) {
        __extends(Paypal, _super);
        function Paypal() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Get url end point
         *
         * @returns {string}
         */
        Paypal.prototype.getTypeUrl = function () {
            return URL_TYPE_PAYPAL;
        };
        /**
         * Get Payload
         *
         * @returns
         */
        Paypal.prototype.getPayload = function () {
            return {};
        };
        return Paypal;
    }(AbstractPaymentType));

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
            return URL_TYPE_PIS;
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
    }(AbstractPaymentType));

    var Prepayment = /** @class */ (function (_super) {
        __extends(Prepayment, _super);
        function Prepayment() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Get url end point
         *
         * @returns {string}
         */
        Prepayment.prototype.getTypeUrl = function () {
            return URL_TYPE_PREPAYMENT;
        };
        /**
         * Get Payload
         *
         * @returns
         */
        Prepayment.prototype.getPayload = function () {
            return {};
        };
        return Prepayment;
    }(AbstractPaymentType));

    var Przelewy24 = /** @class */ (function (_super) {
        __extends(Przelewy24, _super);
        function Przelewy24() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Get url end point
         *
         * @returns {string}
         */
        Przelewy24.prototype.getTypeUrl = function () {
            return URL_TYPE_PRZELEWY24;
        };
        /**
         * Get Payload
         *
         * @returns
         */
        Przelewy24.prototype.getPayload = function () {
            return {};
        };
        return Przelewy24;
    }(AbstractPaymentType));

    var SepaDirectDebit = /** @class */ (function (_super) {
        __extends(SepaDirectDebit, _super);
        function SepaDirectDebit(iban) {
            var _this = _super.call(this) || this;
            _this._iban = iban || '';
            return _this;
        }
        /**
         * Set iban number
         *
         * @param {string} iban
         * @returns {SepaDirectDebit}
         */
        SepaDirectDebit.prototype.setIban = function (iban) {
            this._iban = iban;
            return this;
        };
        /**
         * Get iban number
         *
         * @returns {string}
         */
        SepaDirectDebit.prototype.getIban = function () {
            return this._iban;
        };
        /**
         * Set bic number
         *
         * @param {string} bic
         * @returns {Card}
         */
        SepaDirectDebit.prototype.setBic = function (bic) {
            this._bic = bic;
            return this;
        };
        /**
         * Get bic number
         *
         * @returns {string}
         */
        SepaDirectDebit.prototype.getBic = function () {
            return this._bic;
        };
        /**
         * Set holder
         *
         * @param {string} holder
         * @returns {Card}
         */
        SepaDirectDebit.prototype.setHolder = function (holder) {
            this._holder = holder;
            return this;
        };
        /**
         * Get holder
         *
         * @returns {string}
         */
        SepaDirectDebit.prototype.getHolder = function () {
            return this._holder;
        };
        /**
         * Get url end point
         *
         * @returns {string}
         */
        SepaDirectDebit.prototype.getTypeUrl = function () {
            return URL_TYPE_SEPA_DIRECT_DEBIT;
        };
        /**
         * Get Payload
         *
         * @returns
         */
        SepaDirectDebit.prototype.getPayload = function () {
            return {
                iban: this.getIban(),
                bic: this.getBic(),
                holder: this.getHolder(),
            };
        };
        return SepaDirectDebit;
    }(AbstractPaymentType));

    var SepaDirectDebitGuaranteed = /** @class */ (function (_super) {
        __extends(SepaDirectDebitGuaranteed, _super);
        function SepaDirectDebitGuaranteed(iban) {
            var _this = _super.call(this) || this;
            _this._iban = iban || '';
            return _this;
        }
        /**
         * Set iban number
         *
         * @param {string} iban
         * @returns {SepaDirectDebitGuaranteed}
         */
        SepaDirectDebitGuaranteed.prototype.setIban = function (iban) {
            this._iban = iban;
            return this;
        };
        /**
         * Get iban number
         *
         * @returns {string}
         */
        SepaDirectDebitGuaranteed.prototype.getIban = function () {
            return this._iban;
        };
        /**
         * Set bic number
         *
         * @param {string} bic
         * @returns {Card}
         */
        SepaDirectDebitGuaranteed.prototype.setBic = function (bic) {
            this._bic = bic;
            return this;
        };
        /**
         * Get bic number
         *
         * @returns {string}
         */
        SepaDirectDebitGuaranteed.prototype.getBic = function () {
            return this._bic;
        };
        /**
         * Set holder
         *
         * @param {string} holder
         * @returns {Card}
         */
        SepaDirectDebitGuaranteed.prototype.setHolder = function (holder) {
            this._holder = holder;
            return this;
        };
        /**
         * Get holder
         *
         * @returns {string}
         */
        SepaDirectDebitGuaranteed.prototype.getHolder = function () {
            return this._holder;
        };
        /**
         * Get url end point
         *
         * @returns {string}
         */
        SepaDirectDebitGuaranteed.prototype.getTypeUrl = function () {
            return URL_TYPE_SEPA_DIRECT_DEBIT_GUARANTEED;
        };
        /**
         * Get Payload
         *
         * @returns
         */
        SepaDirectDebitGuaranteed.prototype.getPayload = function () {
            return {
                iban: this.getIban(),
                bic: this.getBic(),
                holder: this.getHolder(),
            };
        };
        return SepaDirectDebitGuaranteed;
    }(AbstractPaymentType));

    var SepaDirectDebitSecured = /** @class */ (function (_super) {
        __extends(SepaDirectDebitSecured, _super);
        function SepaDirectDebitSecured(iban) {
            var _this = _super.call(this) || this;
            _this._iban = iban || '';
            return _this;
        }
        /**
         * Set iban number
         *
         * @param {string} iban
         * @returns {SepaDirectDebitSecured}
         */
        SepaDirectDebitSecured.prototype.setIban = function (iban) {
            this._iban = iban;
            return this;
        };
        /**
         * Get iban number
         *
         * @returns {string}
         */
        SepaDirectDebitSecured.prototype.getIban = function () {
            return this._iban;
        };
        /**
         * Set bic number
         *
         * @param {string} bic
         * @returns {Card}
         */
        SepaDirectDebitSecured.prototype.setBic = function (bic) {
            this._bic = bic;
            return this;
        };
        /**
         * Get bic number
         *
         * @returns {string}
         */
        SepaDirectDebitSecured.prototype.getBic = function () {
            return this._bic;
        };
        /**
         * Set holder
         *
         * @param {string} holder
         * @returns {Card}
         */
        SepaDirectDebitSecured.prototype.setHolder = function (holder) {
            this._holder = holder;
            return this;
        };
        /**
         * Get holder
         *
         * @returns {string}
         */
        SepaDirectDebitSecured.prototype.getHolder = function () {
            return this._holder;
        };
        /**
         * Get url end point
         *
         * @returns {string}
         */
        SepaDirectDebitSecured.prototype.getTypeUrl = function () {
            return URL_TYPE_SEPA_DIRECT_DEBIT_SECURED;
        };
        /**
         * Get Payload
         *
         * @returns
         */
        SepaDirectDebitSecured.prototype.getPayload = function () {
            return {
                iban: this.getIban(),
                bic: this.getBic(),
                holder: this.getHolder(),
            };
        };
        return SepaDirectDebitSecured;
    }(AbstractPaymentType));

    var Sofort = /** @class */ (function (_super) {
        __extends(Sofort, _super);
        function Sofort() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Get url end point
         *
         * @returns {string}
         */
        Sofort.prototype.getTypeUrl = function () {
            return URL_TYPE_SOFORT;
        };
        /**
         * Get Payload
         *
         * @returns
         */
        Sofort.prototype.getPayload = function () {
            return {};
        };
        return Sofort;
    }(AbstractPaymentType));

    var WechatPay = /** @class */ (function (_super) {
        __extends(WechatPay, _super);
        function WechatPay() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Get url end point
         *
         * @returns {string}
         */
        WechatPay.prototype.getTypeUrl = function () {
            return URL_TYPE_WECHATPAY;
        };
        /**
         * Get Payload
         *
         * @returns
         */
        WechatPay.prototype.getPayload = function () {
            return {};
        };
        return WechatPay;
    }(AbstractPaymentType));

    /**
     * Replace URL with parameters: {paymentId} => s-pay-1781
     *
     * @param {string} url
     * @param {*} args
     * @returns
     */
    var replaceUrl = function (url, args) {
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
    var getRefundIdOfCancel = function (url) {
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
    var getPaymentTypeFromTypeId = function (typeId) {
        if (typeId.length < 5) {
            throw new Error("Type " + typeId + " is currently not supported by the SDK");
        }
        var paymentType = typeId.substring(2, 5);
        switch (paymentType) {
            case 'crd':
                return new Card();
            case 'eps':
                return new Eps();
            case 'gro':
                return new Giropay();
            case 'ppl':
                return new Paypal();
            case 'idl':
                return new Ideal();
            case 'ivc':
                return new Invoice();
            case 'ivg':
                return new InvoiceGuaranteed();
            case 'ivs':
                return new InvoiceSecured();
            case 'ivf':
                return new InvoiceFactoring();
            case 'ppy':
                return new Prepayment();
            case 'p24':
                return new Przelewy24();
            case 'sdd':
                return new SepaDirectDebit("");
            case 'ddg':
                return new SepaDirectDebitGuaranteed("");
            case 'dds':
                return new SepaDirectDebitSecured("");
            case 'sft':
                return new Sofort();
            case 'pis':
                return new Pis();
            case 'ali':
                return new Alipay();
            case 'wcp':
                return new WechatPay();
            case 'bct':
                return new Bancontact();
            case 'hdd':
                return new HirePurchase();
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
    var mapResponsePaymentType = function (response) {
        switch (response.method) {
            case 'card':
                var card = new Card()
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
                var eps = new Eps().setBic(response.bic);
                eps.setId(response.id);
                eps.setGeoLocation(response.geoLocation);
                return eps;
            case 'giropay':
                var giropay = new Giropay();
                giropay.setId(response.id);
                giropay.setGeoLocation(response.geoLocation);
                return giropay;
            case 'paypal':
                var paypal = new Paypal();
                paypal.setId(response.id);
                paypal.setGeoLocation(response.geoLocation);
                paypal.setEmail(response.email);
                return paypal;
            case 'ideal':
                var ideal = new Ideal().setBic(response.bic);
                ideal.setId(response.id);
                ideal.setGeoLocation(response.geoLocation);
                return ideal;
            case 'invoice':
                var invoice = new Invoice();
                invoice.setId(response.id);
                invoice.setGeoLocation(response.geoLocation);
                return invoice;
            case 'invoice-guaranteed':
                var invoiceGuaranteed = new InvoiceGuaranteed();
                invoiceGuaranteed.setId(response.id);
                invoiceGuaranteed.setGeoLocation(response.geoLocation);
                return invoiceGuaranteed;
            case 'invoice-secured':
                var invoiceSecured = new InvoiceSecured();
                invoiceSecured.setId(response.id);
                invoiceSecured.setGeoLocation(response.geoLocation);
                return invoiceSecured;
            case 'invoice-factoring':
                var invoiceFactoring = new InvoiceFactoring();
                invoiceFactoring.setId(response.id);
                invoiceFactoring.setGeoLocation(response.geoLocation);
                return invoiceFactoring;
            case 'przelewy24':
                var przelewy24 = new Przelewy24();
                przelewy24.setId(response.id);
                przelewy24.setGeoLocation(response.geoLocation);
                return przelewy24;
            case 'prepayment':
                var prepayment = new Prepayment();
                prepayment.setId(response.id);
                prepayment.setGeoLocation(response.geoLocation);
                return prepayment;
            case 'sepa-direct-debit':
                var sepaDirectDebit = new SepaDirectDebit(response.iban)
                    .setBic(response.bic)
                    .setHolder(response.holder);
                sepaDirectDebit.setId(response.id);
                sepaDirectDebit.setGeoLocation(response.geoLocation);
                return sepaDirectDebit;
            case 'sepa-direct-debit-guaranteed':
                var ddg = new SepaDirectDebitGuaranteed(response.iban)
                    .setBic(response.bic)
                    .setHolder(response.holder);
                ddg.setId(response.id);
                ddg.setGeoLocation(response.geoLocation);
                return ddg;
            case 'sepa-direct-debit-secured':
                var dds = new SepaDirectDebitSecured(response.iban)
                    .setBic(response.bic)
                    .setHolder(response.holder);
                dds.setId(response.id);
                dds.setGeoLocation(response.geoLocation);
                return dds;
            case 'sofort':
                var sofort = new Sofort();
                sofort.setId(response.id);
                sofort.setGeoLocation(response.geoLocation);
                return sofort;
            case 'PIS':
                var pis = new Pis();
                pis.setId(response.id);
                pis.setGeoLocation(response.geoLocation);
                return pis;
            case 'alipay':
                var alipay = new Alipay();
                alipay.setId(response.id);
                alipay.setGeoLocation(response.geoLocation);
                return alipay;
            case 'wechatpay':
                var wechatpay = new WechatPay();
                wechatpay.setId(response.id);
                wechatpay.setGeoLocation(response.geoLocation);
                return wechatpay;
            case 'bancontact':
                var bancontact = new Bancontact();
                if (response.holder) {
                    bancontact.setHolder(response.holder);
                }
                bancontact.setId(response.id);
                bancontact.setGeoLocation(response.geoLocation);
                return bancontact;
            case 'hire-purchase-direct-debit':
                var hirePurchase = new HirePurchase();
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

    var Processing = /** @class */ (function () {
        function Processing() {
        }
        /**
         * Get UniqueId
         *
         * @returns {string}
         */
        Processing.prototype.getUniqueId = function () {
            return this._uniqueId;
        };
        /**
         * Set Unique Id
         *
         * @param {string} uniqueId
         * @returns {Processing}
         */
        Processing.prototype.setUniqueId = function (uniqueId) {
            this._uniqueId = uniqueId;
            return this;
        };
        /**
         * Get Short Id
         *
         * @returns {string}
         */
        Processing.prototype.getShortId = function () {
            return this._shortId;
        };
        /**
         * Set Short Id
         *
         * @param {string} shortId
         * @returns {Processing}
         */
        Processing.prototype.setShortId = function (shortId) {
            this._shortId = shortId;
            return this;
        };
        return Processing;
    }());

    var Cancel = /** @class */ (function (_super) {
        __extends(Cancel, _super);
        function Cancel(heidelpay) {
            var _this = _super.call(this, heidelpay) || this;
            _this.resources = new Resources();
            _this.processing = new Processing();
            return _this;
        }
        /**
         * Get Amount
         *
         * @returns {string}
         */
        Cancel.prototype.getAmount = function () {
            return this.amount;
        };
        /**
         * Set Amount
         *
         * @param {string} amount
         */
        Cancel.prototype.setAmount = function (amount) {
            this.amount = amount;
        };
        /**
         * Get Order OId
         *
         * @returns {string}
         */
        Cancel.prototype.getOrderId = function () {
            return this.orderId;
        };
        /**
         * Set Amount
         *
         * @param {string} amount
         */
        Cancel.prototype.setOrderId = function (orderId) {
            this.orderId = orderId;
        };
        /**
         * Get refund Id
         *
         * @returns {string}
         */
        Cancel.prototype.getRefundId = function () {
            return this.refundId;
        };
        /**
         * Set refund Id
         *
         * @param {string} refund Id
         */
        Cancel.prototype.setRefundId = function (refundId) {
            this.refundId = refundId;
        };
        /**
         * Set Payment Reference
         *
         * @param {string} paymentReference
         */
        Cancel.prototype.setPaymentReference = function (paymentReference) {
            this.paymentReference = paymentReference;
        };
        /**
         * Get Payment Reference
         *
         * @returns
         */
        Cancel.prototype.getPaymentReference = function () {
            return this.paymentReference;
        };
        /**
         * Get resources
         *
         * @returns {Resources}
         */
        Cancel.prototype.getResources = function () {
            return this.resources;
        };
        /**
         * Set resources
         *
         * @param {*} resources
         */
        Cancel.prototype.setResources = function (resources) {
            this.resources
                .setCustomerId(resources.customerId)
                .setMetadataId(resources.metadataId)
                .setPaymentId(resources.paymentId)
                .setTypeId(resources.typeId)
                .setTraceId(resources.traceId);
        };
        /**
         * Get Processing
         *
         * @returns {Processing}
         */
        Cancel.prototype.getProcessing = function () {
            return this.processing;
        };
        /**
         * Set Processing
         *
         * @param {*} processing
         */
        Cancel.prototype.setProcessing = function (processing) {
            this.processing
                .setUniqueId(processing.uniqueId)
                .setShortId(processing.shortId);
        };
        return Cancel;
    }(AbstractPayment));

    var _this$1 = this;
    var FetchCancel = (function (args, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$1, void 0, void 0, function () {
            var response, cancel, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .get(args, paymentService.getHeidelpay().getPrivateKey(), true)
                            // Handle errors response
                        ];
                    case 1:
                        response = _a.sent();
                        // Handle errors response
                        if (response.errors) {
                            return [2 /*return*/, reject(ResponseErrorsMapper(response))];
                        }
                        cancel = new Cancel(paymentService.getHeidelpay());
                        // Set cancel Id
                        cancel.setId(response.id);
                        // Set amount of cancel
                        cancel.setAmount(response.amount);
                        // Set order Id
                        if (response.orderId) {
                            cancel.setOrderId(response.orderId);
                        }
                        // Set payment reference
                        if (response.paymentReference) {
                            cancel.setPaymentReference(response.paymentReference);
                        }
                        // Set resources
                        cancel.setResources(response.resources);
                        // Set Processing
                        cancel.setProcessing(response.processing);
                        // Set Payload
                        cancel.setPayload(response);
                        // Resolve final result
                        resolve(cancel);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        // Reject with error object
                        reject(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });

    var Charge = /** @class */ (function (_super) {
        __extends(Charge, _super);
        function Charge(heidelpay) {
            var _this = _super.call(this, heidelpay) || this;
            _this.resources = new Resources();
            _this.processing = new Processing();
            return _this;
        }
        /**
         * Set amount
         *
         * @param {string} amount
         */
        Charge.prototype.setAmount = function (amount) {
            this.amount = amount;
        };
        /**
         * Get amount
         *
         * @returns {string}
         */
        Charge.prototype.getAmount = function () {
            return this.amount;
        };
        /**
         * Get Order Id
         *
         * @returns {string}
         */
        Charge.prototype.getOrderId = function () {
            return this.orderId;
        };
        /**
         * Set Order Id
         *
         * @param {string} orderId
         */
        Charge.prototype.setOrderId = function (orderId) {
            this.orderId = orderId;
        };
        /**
         * Get Invoice Id
         *
         * @returns {string}
         */
        Charge.prototype.getInvoiceId = function () {
            return this.invoiceId;
        };
        /**
         * Set Invoice Id
         *
         * @param {string} invoiceId
         */
        Charge.prototype.setInvoiceId = function (invoiceId) {
            this.invoiceId = invoiceId;
        };
        /**
         * Set currency
         *
         * @param {string} currency
         */
        Charge.prototype.setCurrency = function (currency) {
            this.currency = currency;
        };
        /**
         * Get currency
         *
         * @returns
         */
        Charge.prototype.getCurrency = function () {
            return this.currency;
        };
        /**
         * Set return url
         *
         * @param {string} returnUrl
         */
        Charge.prototype.setReturnUrl = function (returnUrl) {
            this.returnUrl = returnUrl;
        };
        /**
         * Get return url
         */
        Charge.prototype.getReturnUrl = function () {
            return this.returnUrl;
        };
        /**
         * Set Payment Reference
         *
         * @param {string} paymentReference
         */
        Charge.prototype.setPaymentReference = function (paymentReference) {
            this.paymentReference = paymentReference;
        };
        /**
         * Get Payment Reference
         *
         * @returns
         */
        Charge.prototype.getPaymentReference = function () {
            return this.paymentReference;
        };
        /**
         * Set 3ds option
         *
         * @param {string} returnUrl
         */
        Charge.prototype.setCard3ds = function (card3ds) {
            this.card3ds = card3ds;
        };
        /**
         * Get 3ds option
         */
        Charge.prototype.getCard3ds = function () {
            return this.card3ds;
        };
        /**
         * Get resources
         *
         * @returns {Resources}
         */
        Charge.prototype.getResources = function () {
            return this.resources;
        };
        /**
         * Set resources
         *
         * @param {*} resources
         */
        Charge.prototype.setResources = function (resources) {
            this.resources
                .setCustomerId(resources.customerId)
                .setMetadataId(resources.metadataId)
                .setPaymentId(resources.paymentId)
                .setTypeId(resources.typeId)
                .setBasketId(resources.basketId)
                .setTraceId(resources.traceId);
        };
        /**
         * Get Processing
         *
         * @returns {Processing}
         */
        Charge.prototype.getProcessing = function () {
            return this.processing;
        };
        /**
         * Set Processing
         *
         * @param {*} processing
         */
        Charge.prototype.setProcessing = function (processing) {
            this.processing
                .setUniqueId(processing.uniqueId)
                .setShortId(processing.shortId);
        };
        /**
         * Get cancel transaction
         *
         * @param {string} cancelId
         * @returns {Cancel}
         */
        Charge.prototype.getCancel = function (cancelId) {
            var cancelItem = this.getCancelList().find(function (item) { return item.getId() === cancelId; });
            if (cancelItem && cancelItem.getId()) {
                return cancelItem;
            }
            throw new Error("Cancel Id is not found in list of transaction");
        };
        /**
         * Get list of cancel transactions
         *
         * @returns {Array<Cancel>}
         */
        Charge.prototype.getCancelList = function () {
            return this.cancelList;
        };
        /**
         * Set list of cancel transactions
         *
         * @param {Array<Cancel>} cancelList
         */
        Charge.prototype.setCancelList = function (cancelList) {
            this.cancelList = cancelList;
        };
        /**
         * Refund (Cancel of charge)
         *
         * @param {number} [amount]
         * @returns {Promise<Cancel>}
         */
        Charge.prototype.cancel = function (amount) {
            var cancelChargePayload = {
                chargeId: this.getId(),
                paymentId: this.getResources().getPaymentId()
            };
            if (amount) {
                cancelChargePayload.amount = amount;
            }
            return this.getHeidelpay().cancelCharge(cancelChargePayload);
        };
        return Charge;
    }(AbstractPayment));

    var _this$2 = this;
    var FetchCharge = (function (args, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$2, void 0, void 0, function () {
            var response, charge, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .get(args, paymentService.getHeidelpay().getPrivateKey(), true)
                            // New Charge with Hedeipay instance
                        ];
                    case 1:
                        response = _a.sent();
                        charge = new Charge(paymentService.getHeidelpay());
                        // Set charge Id
                        charge.setId(response.id);
                        // Set amount of charge
                        charge.setAmount(response.amount);
                        // Set order Id
                        if (response.orderId) {
                            charge.setOrderId(response.orderId);
                        }
                        // Set payment reference
                        if (response.paymentReference) {
                            charge.setPaymentReference(response.paymentReference);
                        }
                        // Set currency
                        charge.setCurrency(response.currency);
                        // Set return URL
                        charge.setReturnUrl(response.returnUrl);
                        // Set resources
                        charge.setResources(response.resources);
                        // Set Processing
                        charge.setProcessing(response.processing);
                        // Set Payload
                        charge.setPayload(response);
                        // Resolve final result
                        resolve(charge);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        // Reject with error object
                        reject(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });

    var Authorization = /** @class */ (function (_super) {
        __extends(Authorization, _super);
        function Authorization(heidelpay) {
            var _this = _super.call(this, heidelpay) || this;
            _this.resources = new Resources();
            _this.processing = new Processing();
            return _this;
        }
        /**
         * Get Amount
         *
         * @returns {string}
         */
        Authorization.prototype.getAmount = function () {
            return this.amount;
        };
        /**
         * Set Amount
         *
         * @param {string} amount
         */
        Authorization.prototype.setAmount = function (amount) {
            this.amount = amount;
        };
        /**
         * Get Order OId
         *
         * @returns {string}
         */
        Authorization.prototype.getOrderId = function () {
            return this.orderId;
        };
        /**
         * Set Amount
         *
         * @param {string} amount
         */
        Authorization.prototype.setOrderId = function (orderId) {
            this.orderId = orderId;
        };
        /**
         * Set currency
         *
         * @param {string} currency
         */
        Authorization.prototype.setCurrency = function (currency) {
            this.currency = currency;
        };
        /**
         * Get currency
         *
         * @returns
         */
        Authorization.prototype.getCurrency = function () {
            return this.currency;
        };
        /**
         * Set return url
         *
         * @param {string} returnUrl
         */
        Authorization.prototype.setReturnUrl = function (returnUrl) {
            this.returnUrl = returnUrl;
        };
        /**
         * Get return url
         */
        Authorization.prototype.getReturnUrl = function () {
            return this.returnUrl;
        };
        /**
         * Set Payment Reference
         *
         * @param {string} paymentReference
         */
        Authorization.prototype.setPaymentReference = function (paymentReference) {
            this.paymentReference = paymentReference;
        };
        /**
         * Get Payment Reference
         *
         * @returns
         */
        Authorization.prototype.getPaymentReference = function () {
            return this.paymentReference;
        };
        /**
         * Get resources
         *
         * @returns {Resources}
         */
        Authorization.prototype.getResources = function () {
            return this.resources;
        };
        /**
         * Set resources
         *
         * @param {*} resources
         */
        Authorization.prototype.setResources = function (resources) {
            this.resources
                .setCustomerId(resources.customerId)
                .setMetadataId(resources.metadataId)
                .setPaymentId(resources.paymentId)
                .setTypeId(resources.typeId)
                .setTraceId(resources.traceId);
        };
        /**
         * Get Processing
         *
         * @returns {Processing}
         */
        Authorization.prototype.getProcessing = function () {
            return this.processing;
        };
        /**
         * Set Processing
         *
         * @param {*} processing
         */
        Authorization.prototype.setProcessing = function (processing) {
            this.processing
                .setUniqueId(processing.uniqueId)
                .setShortId(processing.shortId);
        };
        /**
         * Charge after authorize
         *
         * @param {number} [amount]
         * @returns {Promise<Charge>}
         */
        Authorization.prototype.charge = function (amount) {
            var chargeAuthorizePayload = {
                paymentId: this.getResources().getPaymentId()
            };
            if (amount) {
                chargeAuthorizePayload.amount = amount;
            }
            return this.getHeidelpay().chargeAuthorization(chargeAuthorizePayload);
        };
        /**
         * Reversal (Cancel of authorization)
         *
         * @param {number} [amount]
         * @returns {Promise<Cancel>}
         */
        Authorization.prototype.cancel = function (amount) {
            var cancelAuthorizePayload = {
                authorizationId: this.getId(),
                paymentId: this.getResources().getPaymentId()
            };
            if (amount) {
                cancelAuthorizePayload.amount = amount;
            }
            return this.getHeidelpay().cancelAuthorization(cancelAuthorizePayload);
        };
        return Authorization;
    }(AbstractPayment));

    var _this$3 = this;
    var FetchAuthorization = (function (args, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$3, void 0, void 0, function () {
            var response, authorization, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .get(args, paymentService.getHeidelpay().getPrivateKey(), true)
                            // New authorization with Hedeipay instance
                        ];
                    case 1:
                        response = _a.sent();
                        authorization = new Authorization(paymentService.getHeidelpay());
                        // Set authorization Id
                        authorization.setId(response.id);
                        // Set order Id
                        if (response.orderId) {
                            authorization.setOrderId(response.orderId);
                        }
                        // Set amount of authorization
                        authorization.setAmount(response.amount);
                        // Set currency
                        authorization.setCurrency(response.currency);
                        // Set return URL
                        authorization.setReturnUrl(response.returnUrl);
                        // Set payment Reference
                        authorization.setPaymentReference(response.paymentReference);
                        // Set resources
                        authorization.setResources(response.resources);
                        // Set Processing
                        authorization.setProcessing(response.processing);
                        // Set payload
                        authorization.setPayload(response);
                        // Resolve final result
                        resolve(authorization);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        // Reject with error object
                        reject(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });

    var _this$4 = this;
    var FetchPayment = (function (paymentId, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$4, void 0, void 0, function () {
            var response, payment, _a, _b, _c, _d, _e, _f, error_1;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _g.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .get(URL_PAYMENT + "/" + paymentId, paymentService.getHeidelpay().getPrivateKey())
                            // Handle errors response
                        ];
                    case 1:
                        response = _g.sent();
                        // Handle errors response
                        if (response.errors) {
                            return [2 /*return*/, reject(ResponseErrorsMapper(response))];
                        }
                        payment = new Payment(paymentService.getHeidelpay());
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
        return new Promise(function (resolve) { return __awaiter(_this$4, void 0, void 0, function () {
            var authorizeItem, authorization;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authorizeItem = transactions.find(function (item) { return item.type === 'authorize'; });
                        if (!(typeof authorizeItem === 'undefined')) return [3 /*break*/, 1];
                        resolve(); // No authorize Item found
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, FetchAuthorization(authorizeItem.url, paymentService)
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
        return new Promise(function (resolve) { return __awaiter(_this$4, void 0, void 0, function () {
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
                                    case 0: return [4 /*yield*/, FetchCharge(item.url, paymentService)
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
        return new Promise(function (resolve) { return __awaiter(_this$4, void 0, void 0, function () {
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
                                    case 0: return [4 /*yield*/, FetchCancel(item.url, paymentService)
                                        // Set payment object in cancel
                                    ];
                                    case 1:
                                        cancel = _a.sent();
                                        // Set payment object in cancel
                                        cancel.setPayment(payment);
                                        // Set refund Id of cancel
                                        cancel.setRefundId(getRefundIdOfCancel(item.url));
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

    var _this$5 = this;
    var FetchPaymentType = (function (typeId, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$5, void 0, void 0, function () {
            var paymentType, requestUrl, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        paymentType = getPaymentTypeFromTypeId(typeId);
                        // Set Heidelpay instance
                        paymentType.setHeidelpay(paymentService.getHeidelpay());
                        requestUrl = paymentType.getTypeUrl() + "/" + typeId;
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .get(requestUrl, paymentService.getHeidelpay().getPrivateKey())
                            // Resolve final result
                        ];
                    case 1:
                        response = _a.sent();
                        // Resolve final result
                        resolve(mapResponsePaymentType(response));
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        // Reject with error object
                        reject(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });

    var ResponseCustomerMapper = (function (response, customer) {
        if (customer === void 0) { customer = undefined; }
        // For create new customer
        if (customer) {
            var newCustomer_1 = new Customer()
                .setCustomerId(response.id)
                .setFirstName(customer.getFirstName())
                .setLastName(customer.getLastName())
                .setSalutation(customer.getSalutation())
                .setBirthDate(customer.getBirthDate())
                .setEmail(customer.getEmail())
                .setPhone(customer.getPhone())
                .setMobile(customer.getMobile())
                .setBillingAddress(customer.getBillingAddress())
                .setShippingAddress(customer.getShippingAddress())
                .setCompanyInfo(customer.getCompanyInfo());
            return newCustomer_1;
        }
        // For fetch or update customer
        var newCustomer = new Customer()
            .setCustomerId(response.id)
            .setFirstName(response.firstname)
            .setLastName(response.lastname)
            .setSalutation(response.salutation)
            .setBirthDate(response.birthDate)
            .setEmail(response.email)
            .setPhone(response.phone)
            .setMobile(response.mobile)
            .setBillingAddress(response.billingAddress)
            .setShippingAddress(response.shippingAddress)
            .setCompanyInfo(response.companyInfo);
        return newCustomer;
    });

    var _this$6 = this;
    var CreateCustomer = (function (customer, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$6, void 0, void 0, function () {
            var response, newCustomer, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .post(URL_CUSTOMER, customer.getRequestPayload(), paymentService.getHeidelpay().getPrivateKey())
                            // Mapper customer
                        ];
                    case 1:
                        response = _a.sent();
                        newCustomer = ResponseCustomerMapper(response, customer);
                        // Resolve final result
                        resolve(newCustomer);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        // Reject with error object
                        reject(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });

    var _this$7 = this;
    var UpdateCustomer = (function (customerId, customer, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$7, void 0, void 0, function () {
            var response, newCustomer, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .put(URL_CUSTOMER + "/" + customerId, customer.getRequestPayload(), paymentService.getHeidelpay().getPrivateKey())
                            // Mapper customer
                        ];
                    case 1:
                        response = _a.sent();
                        newCustomer = ResponseCustomerMapper(response, customer);
                        // Resolve final result
                        resolve(newCustomer);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        // Reject with error object
                        reject(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });

    var _this$8 = this;
    var DeleteCustomer = (function (customerId, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$8, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .delete(URL_CUSTOMER + "/" + customerId, {}, // send empty body when call delete customer
                            paymentService.getHeidelpay().getPrivateKey())
                            // Resolve final result
                        ];
                    case 1:
                        response = _a.sent();
                        // Resolve final result
                        resolve(response);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        // Reject with error object
                        reject(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });

    var _this$9 = this;
    var FetchCustomer = (function (customerId, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$9, void 0, void 0, function () {
            var response, newCustomer, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .get(URL_CUSTOMER + "/" + customerId, paymentService.getHeidelpay().
                                getPrivateKey())
                            // Mapper customer
                        ];
                    case 1:
                        response = _a.sent();
                        newCustomer = ResponseCustomerMapper(response);
                        // Resolve final result
                        resolve(newCustomer);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        // Reject with error object
                        reject(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });

    var Metadata = /** @class */ (function () {
        function Metadata() {
        }
        /**
         * Set Id
         * @param {string} id
         */
        Metadata.prototype.setId = function (id) {
            this._id = id;
            return this;
        };
        /**
         * Get Id
         *
         * @type {string}
         */
        Metadata.prototype.getId = function () {
            return this._id;
        };
        /**
         * Set metadata value
         *
         * @param {object} value
         * @returns {Metadata}
         */
        Metadata.prototype.setValue = function (value) {
            this._metadata = value;
            return this;
        };
        /**
         * Get metadata value
         *
         * @type {object}
         */
        Metadata.prototype.getValue = function () {
            return this._metadata;
        };
        /**
         * Get Request Payload
         */
        Metadata.prototype.getRequestPayload = function () {
            return this._metadata;
        };
        return Metadata;
    }());

    var _this$a = this;
    var CreateMetadata = (function (metadata, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$a, void 0, void 0, function () {
            var response, newMetadata, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .post(URL_METADATA, metadata.getRequestPayload(), paymentService.getHeidelpay().getPrivateKey())
                            // Mapper metadata value
                        ];
                    case 1:
                        response = _a.sent();
                        newMetadata = new Metadata();
                        newMetadata.setId(response.id);
                        // Resolve final result
                        resolve(newMetadata);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        // Reject with error object
                        reject(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });

    var _this$b = this;
    var FetchMetadata = (function (metadataId, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$b, void 0, void 0, function () {
            var response, newMetadata, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .get(URL_METADATA + "/" + metadataId, paymentService.getHeidelpay().getPrivateKey())
                            // Mapper metadata value
                        ];
                    case 1:
                        response = _a.sent();
                        newMetadata = new Metadata();
                        newMetadata.setValue(response);
                        // Resolve final result
                        resolve(newMetadata);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        // Reject with error object
                        reject(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });

    var Basket = /** @class */ (function () {
        function Basket() {
            this._basketItems = [];
        }
        /**
         * Set Id
         * @param {string} id
         */
        Basket.prototype.setId = function (id) {
            this._id = id;
            return this;
        };
        /**
         * Get Id
         *
         * @type {string}
         */
        Basket.prototype.getId = function () {
            return this._id;
        };
        /**
         * Set payload object
         *
         * @param {*} payload
         * @returns
         */
        Basket.prototype.setPayload = function (payload) {
            return this._payload = payload;
        };
        /**
         * Get payload object
         *
         * @returns {*}
         */
        Basket.prototype.getPayload = function () {
            return this._payload;
        };
        /**
         * Get Request Payload
         */
        Basket.prototype.getRequestPayload = function () {
            return {
                amountTotalGross: this.getAmountTotalGross(),
                amountTotalDiscount: this.getAmountTotalDiscount(),
                amountTotalVat: this.getAmountTotalVat(),
                currencyCode: this.getCurrencyCode(),
                orderId: this.getOrderId(),
                note: this.getNote(),
                basketItems: this.getItems(),
            };
        };
        /**
         * Set amount total
         * @param {string} value
         * @returns {Basket}
         */
        Basket.prototype.setAmountTotalGross = function (value) {
            this._amountTotalGross = value;
            return this;
        };
        /**
         * Get amount total
         * @param {string} value
         */
        Basket.prototype.getAmountTotalGross = function () {
            return this._amountTotalGross;
        };
        /**
         * Set amount total discount
         * @param {string} value
         * @returns {Basket}
         */
        Basket.prototype.setAmountTotalDiscount = function (value) {
            this._amountTotalDiscount = value;
            return this;
        };
        /**
         * Get amount total discount
         * @param {string} value
         */
        Basket.prototype.getAmountTotalDiscount = function () {
            return this._amountTotalDiscount;
        };
        /**
         * Set amount total vat
         * @param {string} value
         * @returns {Basket}
         */
        Basket.prototype.setAmountTotalVat = function (value) {
            this._amountTotalVat = value;
            return this;
        };
        /**
         * Get amount total vat
         * @param {string} value
         */
        Basket.prototype.getAmountTotalVat = function () {
            return this._amountTotalVat;
        };
        /**
         * Set currency code
         * @param {string} value
         * @returns {Basket}
         */
        Basket.prototype.setCurrencyCode = function (value) {
            this._currencyCode = value;
            return this;
        };
        /**
         * Get currency code
         * @param {string} value
         */
        Basket.prototype.getCurrencyCode = function () {
            return this._currencyCode;
        };
        /**
         * Set order Id
         * @param {string} value
         * @returns {Basket}
         */
        Basket.prototype.setOrderId = function (value) {
            this._orderId = value;
            return this;
        };
        /**
         * Get Order Id
         * @param {string} value
         */
        Basket.prototype.getOrderId = function () {
            return this._orderId;
        };
        /**
         * Set basket note
         * @param {string} value
         * @returns {Basket}
         */
        Basket.prototype.setNote = function (value) {
            this._note = value;
            return this;
        };
        /**
         * Get note for basket
         * @param {string} value
         */
        Basket.prototype.getNote = function () {
            return this._note;
        };
        /**
         * Add basket Item
         * @param {basketItemObject} item
         */
        Basket.prototype.addItem = function (item) {
            this._basketItems.push(item);
        };
        /**
         * Get basket Item
         * @param {basketItemObject} item
         * @returns {Array<basketItemObject>}
         */
        Basket.prototype.getItems = function () {
            return this._basketItems;
        };
        return Basket;
    }());

    var _this$c = this;
    var CreateBasket = (function (basket, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$c, void 0, void 0, function () {
            var response, newBasket, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .post(URL_BASKET, basket.getRequestPayload(), paymentService.getHeidelpay().getPrivateKey())];
                    case 1:
                        response = _a.sent();
                        newBasket = new Basket();
                        newBasket.setId(response.id);
                        // Resolve final result
                        resolve(newBasket);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        // Reject with error object
                        reject(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });

    var _this$d = this;
    var FetchBasket = (function (basketId, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$d, void 0, void 0, function () {
            var response, newBasket_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .get(URL_BASKET + "/" + basketId, paymentService.getHeidelpay().getPrivateKey())];
                    case 1:
                        response = _a.sent();
                        newBasket_1 = new Basket();
                        newBasket_1.setId(response.id);
                        // Set amount total
                        newBasket_1.setAmountTotalGross(response.amountTotalGross);
                        // Set Amount total discount
                        newBasket_1.setAmountTotalDiscount(response.amountTotalDiscount);
                        // Set currency code
                        newBasket_1.setCurrencyCode(response.currencyCode);
                        // Set Order Id
                        newBasket_1.setOrderId(response.orderId);
                        // Set note
                        newBasket_1.setNote(response.note);
                        // Set baskset Items
                        response.basketItems.map(function (item) { return newBasket_1.addItem(item); });
                        // Set payload
                        newBasket_1.setPayload(response);
                        // Resolve final result
                        resolve(newBasket_1);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        // Reject with error object
                        reject(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });

    var _this$e = this;
    var UpdateBasket = (function (basketId, basket, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$e, void 0, void 0, function () {
            var response, newBasket, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .put(URL_BASKET + "/" + basketId, basket.getRequestPayload(), paymentService.getHeidelpay().getPrivateKey())];
                    case 1:
                        response = _a.sent();
                        newBasket = new Basket();
                        newBasket.setId(response.id);
                        // Resolve final result
                        resolve(newBasket);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        // Reject with error object
                        reject(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });

    var Recurring = /** @class */ (function () {
        function Recurring() {
            this._resources = new Resources();
            this._processing = new Processing();
        }
        /**
         * Get redirectUrl
         *
         * @returns {string}
         */
        Recurring.prototype.getRedirectUrl = function () {
            return this._redirectUrl;
        };
        /**
         * Set redirectUrl
         *
         * @param {string} redirectUrl
         * @returns {Recurring}
         */
        Recurring.prototype.setRedirectUrl = function (redirectUrl) {
            this._redirectUrl = redirectUrl;
            return this;
        };
        /**
         * Get returnUrl
         *
         * @returns {string}
         */
        Recurring.prototype.getReturnUrl = function () {
            return this._returnUrl;
        };
        /**
         * Set returnUrl
         *
         * @param {string} returnUrl
         * @returns {Recurring}
         */
        Recurring.prototype.setReturnUrl = function (returnUrl) {
            this._returnUrl = returnUrl;
            return this;
        };
        /**
         * Get date
         *
         * @returns {string}
         */
        Recurring.prototype.getDate = function () {
            return this._date;
        };
        /**
         * Set date
         *
         * @param {string} date
         * @returns {Recurring}
         */
        Recurring.prototype.setDate = function (date) {
            this._date = date;
            return this;
        };
        /**
         * Get resources
         *
         * @returns {Resources}
         */
        Recurring.prototype.getResources = function () {
            return this._resources;
        };
        /**
         * Set resources
         *
         * @param {*} resources
         */
        Recurring.prototype.setResources = function (resources) {
            this._resources
                .setCustomerId(resources.customerId)
                .setMetadataId(resources.metadataId);
        };
        /**
         * Get Processing
         *
         * @returns {Processing}
         */
        Recurring.prototype.getProcessing = function () {
            return this._processing;
        };
        /**
         * Set Processing
         *
         * @param {*} processing
         */
        Recurring.prototype.setProcessing = function (processing) {
            this._processing
                .setUniqueId(processing.uniqueId)
                .setShortId(processing.shortId);
        };
        return Recurring;
    }());

    var _this$f = this;
    var CreateRecurring = (function (typeId, args, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$f, void 0, void 0, function () {
            var returnUrl, customerId, metadataId, payload, response, newRecurring, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        returnUrl = args.returnUrl, customerId = args.customerId, metadataId = args.metadataId;
                        payload = {
                            returnUrl: returnUrl,
                            resources: {}
                        };
                        if (customerId) {
                            payload.resources.customerId = customerId;
                        }
                        if (metadataId) {
                            payload.resources.metadataId = metadataId;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .post(replaceUrl(URL_RECURRING, {
                                typeId: typeId,
                            }), payload, paymentService.getHeidelpay().getPrivateKey())];
                    case 2:
                        response = _a.sent();
                        if (response.errors) {
                            return [2 /*return*/, reject(ResponseErrorsMapper(response))];
                        }
                        newRecurring = new Recurring();
                        newRecurring.setReturnUrl(response.returnUrl);
                        newRecurring.setRedirectUrl(response.redirectUrl);
                        newRecurring.setProcessing(response.processing);
                        newRecurring.setResources(response.resources);
                        // Resolve final result
                        resolve(newRecurring);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        // Reject with error object
                        reject(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    });

    var _this$g = this;
    var AuthorizationService = (function (args, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$g, void 0, void 0, function () {
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
                                .post(URL_PAYMENT_AUTHORIZE, payload, paymentService.getHeidelpay().getPrivateKey())];
                    case 1:
                        response = _c.sent();
                        if (response.errors) {
                            return [2 /*return*/, reject(ResponseErrorsMapper(response))];
                        }
                        authorization = new Authorization(paymentService.getHeidelpay());
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
                        return [4 /*yield*/, FetchPayment(response.resources.paymentId, paymentService)];
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

    var _this$h = this;
    var ChargeService = (function (args, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$h, void 0, void 0, function () {
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
                                .post(URL_PAYMENT_CHARGE, payload, paymentService.getHeidelpay().getPrivateKey())
                            // Handle errors response        
                        ];
                    case 1:
                        response = _c.sent();
                        // Handle errors response        
                        if (response.errors) {
                            return [2 /*return*/, reject(ResponseErrorsMapper(response))];
                        }
                        charge = new Charge(paymentService.getHeidelpay());
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
                        return [4 /*yield*/, FetchPayment(response.resources.paymentId, paymentService)];
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

    var _this$i = this;
    var ChargeAuthorization = (function (args, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$i, void 0, void 0, function () {
            var payload, paymentId, amount, paymentReference, response, charge, _a, _b, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        payload = {};
                        paymentId = args.paymentId, amount = args.amount, paymentReference = args.paymentReference;
                        if (amount) {
                            payload.amount = amount;
                        }
                        // Add payment reference into payload if its passed
                        if (paymentReference) {
                            payload.paymentReference = paymentReference;
                        }
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .post(replaceUrl(URL_PAYMENT_CHARGE_AUTHORIZE, {
                                paymentId: paymentId,
                            }), payload, paymentService.getHeidelpay().getPrivateKey())
                            // Handle errors response
                        ];
                    case 1:
                        response = _c.sent();
                        // Handle errors response
                        if (response.errors) {
                            return [2 /*return*/, reject(ResponseErrorsMapper(response))];
                        }
                        charge = new Charge(paymentService.getHeidelpay());
                        // Set charge Id
                        charge.setId(response.id);
                        // Set amount
                        charge.setAmount(response.amount);
                        // Set order Id
                        if (response.orderId) {
                            charge.setOrderId(response.orderId);
                        }
                        // Set payment reference
                        if (response.paymentReference) {
                            charge.setPaymentReference(response.paymentReference);
                        }
                        // Set resources
                        charge.setResources(response.resources);
                        // Set Processing
                        charge.setProcessing(response.processing);
                        // Set payment object
                        _b = (_a = charge).setPayment;
                        return [4 /*yield*/, FetchPayment(response.resources.paymentId, paymentService)];
                    case 2:
                        // Set payment object
                        _b.apply(_a, [_c.sent()]);
                        // Set payload
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

    var _this$j = this;
    var CancelAuthorization = (function (args, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$j, void 0, void 0, function () {
            var payload, paymentId, authorizationId, amount, paymentReference, response, cancel, _a, _b, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        payload = {};
                        paymentId = args.paymentId, authorizationId = args.authorizationId, amount = args.amount, paymentReference = args.paymentReference;
                        // Add amount into payload if its passed
                        if (amount) {
                            payload.amount = amount;
                        }
                        // Add payment reference into payload if its passed
                        if (paymentReference) {
                            payload.paymentReference = paymentReference;
                        }
                        return [4 /*yield*/, paymentService.getRequestAdapter().post(replaceUrl(URL_PAYMENT_AUTHORIZE_CANCEL, {
                                paymentId: paymentId,
                                authorizationId: authorizationId,
                            }), payload, paymentService.getHeidelpay().getPrivateKey())
                            // Handle errors response        
                        ];
                    case 1:
                        response = _c.sent();
                        // Handle errors response        
                        if (response.errors) {
                            return [2 /*return*/, reject(ResponseErrorsMapper(response))];
                        }
                        cancel = new Cancel(paymentService.getHeidelpay());
                        // Set cancel Id
                        cancel.setId(response.id);
                        // Set amount of cancel
                        cancel.setAmount(response.amount);
                        // Set order Id
                        if (response.orderId) {
                            cancel.setOrderId(response.orderId);
                        }
                        // Set payment reference
                        if (response.paymentReference) {
                            cancel.setPaymentReference(response.paymentReference);
                        }
                        // Set resources
                        cancel.setResources(response.resources);
                        // Set Processing
                        cancel.setProcessing(response.processing);
                        // Set payment object
                        _b = (_a = cancel).setPayment;
                        return [4 /*yield*/, FetchPayment(response.resources.paymentId, paymentService)];
                    case 2:
                        // Set payment object
                        _b.apply(_a, [_c.sent()]);
                        // Set payload
                        cancel.setPayload(response);
                        // Resolve final result
                        resolve(cancel);
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

    var _this$k = this;
    var CancelCharge = (function (args, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$k, void 0, void 0, function () {
            var payload, paymentId, chargeId, amount, paymentReference, amountGross, amountNet, amountVat, response, cancel, _a, _b, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        payload = {};
                        paymentId = args.paymentId, chargeId = args.chargeId, amount = args.amount, paymentReference = args.paymentReference, amountGross = args.amountGross, amountNet = args.amountNet, amountVat = args.amountVat;
                        // Add amount into payload if its passed
                        if (amount) {
                            payload.amount = amount;
                        }
                        if (amountGross) {
                            payload.amountGross = amountGross;
                        }
                        if (amountNet) {
                            payload.amountNet = amountNet;
                        }
                        if (amountVat) {
                            payload.amountVat = amountVat;
                        }
                        // Add payment reference into payload if its passed
                        if (paymentReference) {
                            payload.paymentReference = paymentReference;
                        }
                        return [4 /*yield*/, paymentService.getRequestAdapter().post(replaceUrl(URL_PAYMENT_CHARGE_CANCEL, {
                                paymentId: paymentId,
                                chargeId: chargeId,
                            }), payload, paymentService.getHeidelpay().getPrivateKey())
                            // Handle errors response        
                        ];
                    case 1:
                        response = _c.sent();
                        // Handle errors response        
                        if (response.errors) {
                            return [2 /*return*/, reject(ResponseErrorsMapper(response))];
                        }
                        cancel = new Cancel(paymentService.getHeidelpay());
                        // Set cancel Id
                        cancel.setId(response.id);
                        // Set amount of cancel
                        cancel.setAmount(response.amount);
                        // Set order Id
                        if (response.orderId) {
                            cancel.setOrderId(response.orderId);
                        }
                        // Set payment reference
                        if (response.paymentReference) {
                            cancel.setPaymentReference(response.paymentReference);
                        }
                        // Set resources
                        cancel.setResources(response.resources);
                        // Set Processing
                        cancel.setProcessing(response.processing);
                        // Set payment object
                        _b = (_a = cancel).setPayment;
                        return [4 /*yield*/, FetchPayment(response.resources.paymentId, paymentService)];
                    case 2:
                        // Set payment object
                        _b.apply(_a, [_c.sent()]);
                        // Set payload
                        cancel.setPayload(response);
                        // Resolve final result
                        resolve(cancel);
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

    var Shipment = /** @class */ (function (_super) {
        __extends(Shipment, _super);
        function Shipment(heidelpay) {
            var _this = _super.call(this, heidelpay) || this;
            _this.resources = new Resources();
            _this.processing = new Processing();
            return _this;
        }
        /**
         * Get Amount
         *
         * @returns {string}
         */
        Shipment.prototype.getAmount = function () {
            return this.amount;
        };
        /**
         * Set Amount
         *
         * @param {string} amount
         */
        Shipment.prototype.setAmount = function (amount) {
            this.amount = amount;
        };
        /**
         * Get Order Id
         *
         * @returns {string}
         */
        Shipment.prototype.getOrderId = function () {
            return this.orderId;
        };
        /**
         * Set Order Id
         *
         * @param {string} orderId
         */
        Shipment.prototype.setOrderId = function (orderId) {
            this.orderId = orderId;
        };
        /**
         * Get Invoice Id
         *
         * @returns {string}
         */
        Shipment.prototype.getInvoiceId = function () {
            return this.invoiceId;
        };
        /**
         * Set Invoice Id
         *
         * @param {string} invoiceId
         */
        Shipment.prototype.setInvoiceId = function (invoiceId) {
            this.invoiceId = invoiceId;
        };
        /**
         * Get resources
         *
         * @returns {Resources}
         */
        Shipment.prototype.getResources = function () {
            return this.resources;
        };
        /**
         * Set resources
         *
         * @param {*} resources
         */
        Shipment.prototype.setResources = function (resources) {
            this.resources
                .setCustomerId(resources.customerId)
                .setMetadataId(resources.metadataId)
                .setPaymentId(resources.paymentId)
                .setTypeId(resources.typeId)
                .setTraceId(resources.traceId);
        };
        /**
         * Get Processing
         *
         * @returns {Processing}
         */
        Shipment.prototype.getProcessing = function () {
            return this.processing;
        };
        /**
         * Set Processing
         *
         * @param {*} processing
         */
        Shipment.prototype.setProcessing = function (processing) {
            this.processing
                .setUniqueId(processing.uniqueId)
                .setShortId(processing.shortId);
        };
        return Shipment;
    }(AbstractPayment));

    var _this$l = this;
    var ShipmentService = (function (paymentId, args, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$l, void 0, void 0, function () {
            var orderId, invoiceId, payload, response, shipment, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        orderId = args.orderId, invoiceId = args.invoiceId;
                        payload = {};
                        if (orderId) {
                            payload.orderId = orderId;
                        }
                        if (invoiceId) {
                            payload.invoiceId = invoiceId;
                        }
                        return [4 /*yield*/, paymentService.getRequestAdapter().post(replaceUrl(URL_PAYMENT_SHIPMENT, {
                                paymentId: paymentId,
                            }), payload, paymentService.getHeidelpay().getPrivateKey())];
                    case 1:
                        response = _a.sent();
                        if (response.errors) {
                            return [2 /*return*/, reject(ResponseErrorsMapper(response))];
                        }
                        shipment = new Shipment(paymentService.getHeidelpay());
                        // Set shipment Id
                        shipment.setId(response.id);
                        // Set amount of charge
                        shipment.setAmount(response.amount);
                        // Set order Id
                        if (response.orderId) {
                            shipment.setOrderId(response.orderId);
                        }
                        // Set invoice Id
                        if (response.invoiceId) {
                            shipment.setInvoiceId(response.invoiceId);
                        }
                        // Set resources
                        shipment.setResources(response.resources);
                        // Set Processing
                        shipment.setProcessing(response.processing);
                        // Set Payload
                        shipment.setPayload(response);
                        // Resolve final result
                        resolve(shipment);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        // Reject with error object
                        return [2 /*return*/, reject(error_1)];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });

    var _this$m = this;
    var InitPaypage = (function (paypage, type, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$m, void 0, void 0, function () {
            var payload, additionalAttributes, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        payload = paypage.getPayload();
                        additionalAttributes = paypage.getAdditionalAttributes();
                        if (additionalAttributes && additionalAttributes.effectiveInterestRate) {
                            payload['additionalAttributes.effectiveInterestRate'] = additionalAttributes.effectiveInterestRate;
                        }
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .post(type === 'authorize' ? URL_PAYPAGE_AUTHORIZE : URL_PAYPAGE_CHARGE, payload, paymentService.getHeidelpay().getPrivateKey())
                            // Handle errors response    
                        ];
                    case 1:
                        response = _a.sent();
                        // Handle errors response    
                        if (response.errors) {
                            return [2 /*return*/, reject(ResponseErrorsMapper(response))];
                        }
                        // Set Heidelpay instance
                        paypage.setHeidelpay(paymentService.getHeidelpay());
                        // Set Payment Id
                        paypage.setId(response.id);
                        // Set Redirect URL
                        paypage.setRedirectUrl(response.redirectUrl);
                        // Set action (AUTHORIZE|CHARGE)
                        paypage.setAction(response.action);
                        // Set resources
                        paypage.setResources(response.resources);
                        // Resolve final result
                        resolve(paypage);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        // Reject with error object
                        return [2 /*return*/, reject(error_1)];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });

    var ResponseLinkpayMapper = (function (response, linkpay) {
        linkpay.setId(response.id);
        linkpay
            .setAlias(linkpay.getAlias())
            .setAmount(response.amount || linkpay.getAmount())
            .setAdditionalAttributes(response.additionalAttributes || linkpay.getAdditionalAttributes())
            .setBillingAddressRequired(response.billingAddressRequired || linkpay.getBillingAddressRequired())
            .setCurrency(response.currency || linkpay.getCurrency())
            .setCard3ds(response.card3ds || linkpay.getCard3ds())
            .setCss(response.css || linkpay.getCss())
            .setContactUrl(response.contactUrl || linkpay.getContactUrl())
            .setExcludeTypes(response.excludeTypes || linkpay.getExcludeTypes())
            .setExpirationDate(response.expires || linkpay.getExpirationDate())
            .setFullPageImage(response.fullPageImage || linkpay.getFullPageImage())
            .setHelpUrl(response.helpUrl || linkpay.getHelpUrl())
            .setInvoiceId(response.invoiceId || linkpay.getInvoiceId())
            .setInvoiceIdRequired(response.invoiceIdRequired || linkpay.getInvoiceIdRequired())
            .setImprintUrl(response.imprintUrl || linkpay.getImprintUrl())
            .setIntention(response.intention || linkpay.getIntention())
            .setLogoImage(response.logoImage || linkpay.getLogoImage())
            .setPrivacyPolicyUrl(response.privacyPolicyUrl || linkpay.getPrivacyPolicyUrl())
            .setOrderId(response.orderId || linkpay.getOrderId())
            .setOrderIdRequired(response.orderIdRequired || linkpay.getOrderIdRequired())
            .setResources(response.resources || linkpay.getResources())
            .setReturnUrl(response.returnUrl || linkpay.getReturnUrl())
            .setShopName(response.shopName || linkpay.getShopName())
            .setShopDescription(response.shopDescription || linkpay.getShopDescription())
            .setShippingAddressRequired(response.shippingAddressRequired || linkpay.getShippingAddressRequired())
            .setTagline(response.tagline || linkpay.getTagline())
            .setTermsAndConditionUrl(response.termsAndConditionUrl || linkpay.getTermsAndConditionUrl())
            .setRedirectUrl(response.redirectUrl || linkpay.getRedirectUrl())
            .setAction(response.action || linkpay.getAction());
        return linkpay;
    });

    var _this$n = this;
    var InitLinkpay = (function (linkpay, type, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$n, void 0, void 0, function () {
            var response, newLinkpay, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .post(type === 'authorize' ? URL_LINKPAY_AUTHORIZE : URL_LINKPAY_CHARGE, linkpay.getPayload(), paymentService.getHeidelpay().getPrivateKey())
                            // Handle errors response    
                        ];
                    case 1:
                        response = _a.sent();
                        // Handle errors response    
                        if (response.errors) {
                            return [2 /*return*/, reject(ResponseErrorsMapper(response))];
                        }
                        newLinkpay = ResponseLinkpayMapper(response, linkpay);
                        // Set Heidelpay instance
                        newLinkpay.setHeidelpay(paymentService.getHeidelpay());
                        // Reset payload obj to empty obj
                        newLinkpay.resetPayload();
                        // Resolve final result
                        resolve(newLinkpay);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        // Reject with error object
                        return [2 /*return*/, reject(error_1)];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });

    var _this$o = this;
    var UpdateLinkpay = (function (linkpayIdOrAlias, linkpay, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$o, void 0, void 0, function () {
            var response, updatedLinkpay, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .put(URL_LINKPAY + "/" + linkpayIdOrAlias, linkpay.getPayload(), paymentService.getHeidelpay().getPrivateKey())
                            // Map returned values to new Linkpay instance
                        ];
                    case 1:
                        response = _a.sent();
                        updatedLinkpay = ResponseLinkpayMapper(response, linkpay);
                        // Set Heidelpay instance
                        updatedLinkpay.setHeidelpay(paymentService.getHeidelpay());
                        // Reset payload obj to empty obj
                        updatedLinkpay.resetPayload();
                        // Resolve final result
                        resolve(updatedLinkpay);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        // Reject with error object
                        reject(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });

    var _this$p = this;
    var DeleteLinkpay = (function (linkpayIdOrAlias, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$p, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .delete(URL_LINKPAY + "/" + linkpayIdOrAlias, {}, // send empty body when call delete method
                            paymentService.getHeidelpay().getPrivateKey())
                            // Resolve final result
                        ];
                    case 1:
                        response = _a.sent();
                        // Resolve final result
                        resolve(response);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        // Reject with error object
                        reject(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });

    var Payout = /** @class */ (function (_super) {
        __extends(Payout, _super);
        function Payout(heidelpay) {
            var _this = _super.call(this, heidelpay) || this;
            _this.resources = new Resources();
            _this.processing = new Processing();
            return _this;
        }
        /**
         * Set amount
         *
         * @param {string} amount
         */
        Payout.prototype.setAmount = function (amount) {
            this.amount = amount;
        };
        /**
         * Get amount
         *
         * @returns {string}
         */
        Payout.prototype.getAmount = function () {
            return this.amount;
        };
        /**
         * Get Order OId
         *
         * @returns {string}
         */
        Payout.prototype.getOrderId = function () {
            return this.orderId;
        };
        /**
         * Set Amount
         *
         * @param {string} amount
         */
        Payout.prototype.setOrderId = function (orderId) {
            this.orderId = orderId;
        };
        /**
         * Set currency
         *
         * @param {string} currency
         */
        Payout.prototype.setCurrency = function (currency) {
            this.currency = currency;
        };
        /**
         * Get currency
         *
         * @returns
         */
        Payout.prototype.getCurrency = function () {
            return this.currency;
        };
        /**
         * Set Payment Reference
         *
         * @param {string} paymentReference
         */
        Payout.prototype.setPaymentReference = function (paymentReference) {
            this.paymentReference = paymentReference;
        };
        /**
         * Get Payment Reference
         *
         * @returns
         */
        Payout.prototype.getPaymentReference = function () {
            return this.paymentReference;
        };
        /**
         * Set return url
         *
         * @param {string} returnUrl
         */
        Payout.prototype.setReturnUrl = function (returnUrl) {
            this.returnUrl = returnUrl;
        };
        /**
         * Get return url
         */
        Payout.prototype.getReturnUrl = function () {
            return this.returnUrl;
        };
        /**
         * Get resources
         *
         * @returns {Resources}
         */
        Payout.prototype.getResources = function () {
            return this.resources;
        };
        /**
         * Set resources
         *
         * @param {*} resources
         */
        Payout.prototype.setResources = function (resources) {
            this.resources
                .setCustomerId(resources.customerId)
                .setMetadataId(resources.metadataId)
                .setPaymentId(resources.paymentId)
                .setTypeId(resources.typeId)
                .setTraceId(resources.traceId);
        };
        /**
         * Get Processing
         *
         * @returns {Processing}
         */
        Payout.prototype.getProcessing = function () {
            return this.processing;
        };
        /**
         * Set Processing
         *
         * @param {*} processing
         */
        Payout.prototype.setProcessing = function (processing) {
            this.processing
                .setUniqueId(processing.uniqueId)
                .setShortId(processing.shortId);
        };
        return Payout;
    }(AbstractPayment));

    var _this$q = this;
    var PayoutService = (function (args, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$q, void 0, void 0, function () {
            var amount, orderId, paymentReference, currency, typeId, customerId, returnUrl, metadataId, payload, response, payout, _a, _b, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        amount = args.amount, orderId = args.orderId, paymentReference = args.paymentReference, currency = args.currency, typeId = args.typeId, customerId = args.customerId, returnUrl = args.returnUrl, metadataId = args.metadataId;
                        payload = {
                            amount: amount,
                            currency: currency,
                            returnUrl: returnUrl,
                            resources: {
                                typeId: typeId
                            }
                        };
                        // Add order Id into payload if its passed
                        if (orderId) {
                            payload.orderId = orderId;
                        }
                        // Add payment reference into payload if its passed
                        if (paymentReference) {
                            payload.paymentReference = paymentReference;
                        }
                        // Add customer Id into payload if its passed
                        if (customerId) {
                            payload.resources.customerId = customerId;
                        }
                        // Add metadta Id into payload if its passed
                        if (metadataId) {
                            payload.resources.metadataId = metadataId;
                        }
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .post(URL_PAYMENT_PAYOUT, payload, paymentService.getHeidelpay().getPrivateKey())];
                    case 1:
                        response = _c.sent();
                        if (response.errors) {
                            return [2 /*return*/, reject(ResponseErrorsMapper(response))];
                        }
                        payout = new Payout(paymentService.getHeidelpay());
                        // Set payout Id
                        payout.setId(response.id);
                        // Set amount
                        payout.setAmount(response.amount);
                        // Set order Id
                        if (response.orderId) {
                            payout.setOrderId(response.orderId);
                        }
                        // Set payment reference
                        if (response.paymentReference) {
                            payout.setPaymentReference(response.paymentReference);
                        }
                        // Set currency
                        payout.setCurrency(response.currency);
                        // Set return URL
                        payout.setReturnUrl(response.returnUrl);
                        // Set resources
                        payout.setResources(response.resources);
                        // Set payment object
                        _b = (_a = payout).setPayment;
                        return [4 /*yield*/, FetchPayment(response.resources.paymentId, paymentService)];
                    case 2:
                        // Set payment object
                        _b.apply(_a, [_c.sent()]);
                        // Set Payload
                        payout.setPayload(response);
                        // Resolve final result
                        resolve(payout);
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

    var _this$r = this;
    var FetchPayout = (function (paymentId, payoutId, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$r, void 0, void 0, function () {
            var response, payout, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .get(URL_PAYMENT + "/" + paymentId + "/payouts/" + payoutId, paymentService.getHeidelpay().getPrivateKey())
                            // Handle errors response
                        ];
                    case 1:
                        response = _a.sent();
                        // Handle errors response
                        if (response.errors) {
                            return [2 /*return*/, reject(ResponseErrorsMapper(response))];
                        }
                        payout = new Payout(paymentService.getHeidelpay());
                        // Set payout Id
                        payout.setId(response.id);
                        // Set order Id
                        if (response.orderId) {
                            payout.setOrderId(response.orderId);
                        }
                        // Set payment reference
                        if (response.paymentReference) {
                            payout.setPaymentReference(response.paymentReference);
                        }
                        // Set amount of payout
                        payout.setAmount(response.amount);
                        // Set currency
                        payout.setCurrency(response.currency);
                        // Set return URL
                        payout.setReturnUrl(response.returnUrl);
                        // Set resources
                        payout.setResources(response.resources);
                        // Set Processing
                        payout.setProcessing(response.processing);
                        // Set payload
                        payout.setPayload(response);
                        // Resolve final result
                        resolve(payout);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        // Reject with error object
                        reject(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });

    var HirePurchasePlan = /** @class */ (function (_super) {
        __extends(HirePurchasePlan, _super);
        function HirePurchasePlan() {
            return _super.call(this) || this;
        }
        /**
         * Set Number of Rate
         *
         * @param {string} numberOfRates
         * @returns {HirePurchase}
         */
        HirePurchasePlan.prototype.setNumberOfRates = function (numberOfRates) {
            this._numberOfRates = numberOfRates;
            return this;
        };
        /**
         * Get Number of Rate
         *
         * @returns {string}
         */
        HirePurchasePlan.prototype.getNumberOfRates = function () {
            return this._numberOfRates;
        };
        /**
         * Set Day of purchase
         *
         * @param {string} dayOfPurchase
         * @returns {HirePurchase}
         */
        HirePurchasePlan.prototype.setDayOfPurchase = function (dayOfPurchase) {
            this._dayOfPurchase = dayOfPurchase;
            return this;
        };
        /**
         * Get Day of Purchase
         *
         * @returns {string}
         */
        HirePurchasePlan.prototype.getDayOfPurchase = function () {
            return this._dayOfPurchase;
        };
        /**
         * Set Order Date
         *
         * @param {string} orderDate
         * @returns {HirePurchase}
         */
        HirePurchasePlan.prototype.setOrderDate = function (orderDate) {
            this._orderDate = orderDate;
            return this;
        };
        /**
         * Get Order Date
         *
         * @returns {string}
         */
        HirePurchasePlan.prototype.getOrderDate = function () {
            return this._orderDate;
        };
        /**
         * Set Total Amount
         *
         * @param {number} totalPurchaseAmount
         * @returns {HirePurchase}
         */
        HirePurchasePlan.prototype.setTotalPurchaseAmount = function (totalPurchaseAmount) {
            this._totalPurchaseAmount = totalPurchaseAmount;
            return this;
        };
        /**
         * Get Total Amount
         *
         * @returns {number}
         */
        HirePurchasePlan.prototype.getTotalPurchaseAmount = function () {
            return this._totalPurchaseAmount;
        };
        /**
         * Set Interest Amount
         *
         * @param {number} totalInterestAmount
         * @returns {HirePurchase}
         */
        HirePurchasePlan.prototype.setTotalInterestAmount = function (totalInterestAmount) {
            this._totalInterestAmount = totalInterestAmount;
            return this;
        };
        /**
         * Get Interest Amount
         *
         * @returns {number}
         */
        HirePurchasePlan.prototype.getTotalInterestAmount = function () {
            return this._totalInterestAmount;
        };
        /**
         * Set Total Amount
         *
         * @param {number} totalAmount
         * @returns {HirePurchase}
         */
        HirePurchasePlan.prototype.setTotalAmount = function (totalAmount) {
            this._totalAmount = totalAmount;
            return this;
        };
        /**
         * Get Total Amount
         *
         * @returns {number}
         */
        HirePurchasePlan.prototype.getTotalAmount = function () {
            return this._totalAmount;
        };
        /**
         * Set Total Amount
         *
         * @param {number} totalAmount
         * @returns {HirePurchase}
         */
        HirePurchasePlan.prototype.setEffectiveInterestRate = function (effectiveInterestRate) {
            this._effectiveInterestRate = effectiveInterestRate;
            return this;
        };
        /**
         * Get Total Amount
         *
         * @returns {number}
         */
        HirePurchasePlan.prototype.getEffectiveInterestRate = function () {
            return this._effectiveInterestRate;
        };
        /**
         * Set Nominal Interest Rate
         *
         * @param {number} nominalInterestRate
         * @returns {HirePurchase}
         */
        HirePurchasePlan.prototype.setNominalInterestRate = function (nominalInterestRate) {
            this._nominalInterestRate = nominalInterestRate;
            return this;
        };
        /**
         * Get Nominal Interest Rate
         *
         * @returns {number}
         */
        HirePurchasePlan.prototype.getNominalInterestRate = function () {
            return this._nominalInterestRate;
        };
        /**
         * Set Fee First Rate
         *
         * @param {number} feeFirstRate
         * @returns {HirePurchase}
         */
        HirePurchasePlan.prototype.setFeeFirstRate = function (feeFirstRate) {
            this._feeFirstRate = feeFirstRate;
            return this;
        };
        /**
         * Get Nominal Interest Rate
         *
         * @returns {number}
         */
        HirePurchasePlan.prototype.getFeeFirstRate = function () {
            return this._feeFirstRate;
        };
        /**
         * Set Fee Per Rate
         *
         * @param {number} feePerRate
         * @returns {HirePurchase}
         */
        HirePurchasePlan.prototype.setFeePerRate = function (feePerRate) {
            this._feePerRate = feePerRate;
            return this;
        };
        /**
         * Get Nominal Interest Rate
         *
         * @returns {number}
         */
        HirePurchasePlan.prototype.getFeePerRate = function () {
            return this._feePerRate;
        };
        /**
         * Set Monthly Rate
         *
         * @param {number} monthlyRate
         * @returns {HirePurchase}
         */
        HirePurchasePlan.prototype.setMonthlyRate = function (monthlyRate) {
            this._monthlyRate = monthlyRate;
            return this;
        };
        /**
         * Get Monthly Rate
         *
         * @returns {number}
         */
        HirePurchasePlan.prototype.getMonthlyRate = function () {
            return this._monthlyRate;
        };
        /**
         * Set Last Rate
         *
         * @param {number} lastRate
         * @returns {HirePurchase}
         */
        HirePurchasePlan.prototype.setLastRate = function (lastRate) {
            this._lastRate = lastRate;
            return this;
        };
        /**
         * Get Monthly Rate
         *
         * @returns {number}
         */
        HirePurchasePlan.prototype.getLastRate = function () {
            return this._lastRate;
        };
        /**
         * Get url end point
         *
         * @returns {string}
         */
        HirePurchasePlan.prototype.getTypeUrl = function () {
            return URL_TYPE_HIRE_PURCHASE_PLANS;
        };
        /**
         * Get Payload
         *
         * @returns
         */
        HirePurchasePlan.prototype.getPayload = function () {
            return {};
        };
        return HirePurchasePlan;
    }(AbstractPaymentType));

    var _this$s = this;
    var FetchHirePurchasePlan = (function (amount, currency, effectiveInterestRate, orderDate, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$s, void 0, void 0, function () {
            var response, hirepurchasePlansList_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .get(URL_TYPE_HIRE_PURCHASE_PLANS + "/?amount=" + amount + "&currency=" + currency + "&effectiveInterest=" + effectiveInterestRate + "&orderDate=" + orderDate, paymentService.getHeidelpay().getPrivateKey())
                            // Handle errors response
                        ];
                    case 1:
                        response = _a.sent();
                        // Handle errors response
                        if (response.errors) {
                            return [2 /*return*/, reject(ResponseErrorsMapper(response))];
                        }
                        hirepurchasePlansList_1 = [];
                        response.entity.map(function (item) {
                            // Create new instance heidelpay
                            var hirePurchasePlan = new HirePurchasePlan();
                            // Set values foreach property
                            hirePurchasePlan.setNumberOfRates(item.numberOfRates);
                            hirePurchasePlan.setDayOfPurchase(item.dayOfPurchase);
                            hirePurchasePlan.setOrderDate(item.orderDate);
                            hirePurchasePlan.setTotalPurchaseAmount(item.totalPurchaseAmount);
                            hirePurchasePlan.setTotalInterestAmount(item.totalInterestAmount);
                            hirePurchasePlan.setTotalAmount(item.totalAmount);
                            hirePurchasePlan.setEffectiveInterestRate(item.effectiveInterestRate);
                            hirePurchasePlan.setNominalInterestRate(item.nominalInterestRate);
                            hirePurchasePlan.setFeeFirstRate(item.feeFirstRate);
                            hirePurchasePlan.setFeePerRate(item.feePerRate);
                            hirePurchasePlan.setMonthlyRate(item.monthlyRate);
                            hirePurchasePlan.setLastRate(item.lastRate);
                            // Add hirepurchase item to plan list
                            hirepurchasePlansList_1.push(hirePurchasePlan);
                        });
                        // Resolve final result
                        resolve(hirepurchasePlansList_1);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        // Reject with error object
                        reject(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });

    var _this$t = this;
    var UpdateHirePurchase = (function (hirePurchaseId, args, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$t, void 0, void 0, function () {
            var payload, iban, bic, accountHolder, invoiceDate, invoiceDueDate, response, hirePurchase, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        payload = {};
                        iban = args.iban, bic = args.bic, accountHolder = args.accountHolder, invoiceDate = args.invoiceDate, invoiceDueDate = args.invoiceDueDate;
                        if (iban) {
                            payload.iban = iban;
                        }
                        if (bic) {
                            payload.bic = bic;
                        }
                        if (accountHolder) {
                            payload.accountHolder = accountHolder;
                        }
                        if (invoiceDate) {
                            payload.invoiceDate = invoiceDate;
                        }
                        if (invoiceDueDate) {
                            payload.invoiceDueDate = invoiceDueDate;
                        }
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .put(URL_TYPE_HIRE_PURCHASE + "/" + hirePurchaseId, payload, paymentService.getHeidelpay().getPrivateKey())];
                    case 1:
                        response = _a.sent();
                        hirePurchase = new HirePurchase();
                        hirePurchase.setIban(response.iban);
                        hirePurchase.setBic(response.bic);
                        hirePurchase.setAccountHolder(response.accountHolder);
                        hirePurchase.setInvoiceDate(response.invoiceDate);
                        hirePurchase.setInvoiceDueDate(response.invoiceDueDate);
                        hirePurchase.setNumberOfRates(response.numberOfRates);
                        hirePurchase.setDayOfPurchase(response.dayOfPurchase);
                        hirePurchase.setOrderDate(response.orderDate);
                        hirePurchase.setTotalPurchaseAmount(response.totalPurchaseAmount);
                        hirePurchase.setTotalInterestAmount(response.totalInterestAmount);
                        hirePurchase.setTotalAmount(response.totalAmount);
                        hirePurchase.setEffectiveInterestRate(response.effectiveInterestRate);
                        hirePurchase.setNominalInterestRate(response.nominalInterestRate);
                        hirePurchase.setFeeFirstRate(response.feeFirstRate);
                        hirePurchase.setFeePerRate(response.feePerRate);
                        hirePurchase.setMonthlyRate(response.monthlyRate);
                        hirePurchase.setLastRate(response.lastRate);
                        // Resolve final result
                        resolve(hirePurchase);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        // Reject with error object
                        reject(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });

    var Webhook = /** @class */ (function (_super) {
        __extends(Webhook, _super);
        function Webhook(heidelpay) {
            var _this = _super.call(this, heidelpay) || this;
            _this.resources = new Resources();
            return _this;
        }
        /**
         * Get Url
         *
         * @returns {string}
         */
        Webhook.prototype.getUrl = function () {
            return this.url;
        };
        /**
         * Set Url
         *
         * @param {string} url
         */
        Webhook.prototype.setUrl = function (url) {
            this.url = url;
        };
        /**
         * Get Event
         *
         * @returns {string}
         */
        Webhook.prototype.getEvent = function () {
            return this.event;
        };
        /**
         * Set Event
         *
         * @param {string} event
         */
        Webhook.prototype.setEvent = function (event) {
            this.event = event;
        };
        /**
         * Get EventList
         *
         * @returns {Array<any>}
         */
        Webhook.prototype.getEventList = function () {
            return this.eventList;
        };
        /**
         * Set Event
         *
         * @param {Array<string>} eventList
         */
        Webhook.prototype.setEventList = function (eventList) {
            this.eventList = eventList;
        };
        /**
         * Get resources
         *
         * @returns {Resources}
         */
        Webhook.prototype.getResources = function () {
            return this.resources;
        };
        /**
         * Get id by event name
         *
         * @param {string} event
         * @returns {string}
         */
        Webhook.prototype.getIdByEventName = function (event) {
            if (this.eventList.length === 0) {
                return 'Event list does not exist';
            }
            var filteredEvent = this.eventList.filter(function (listEvent) { return listEvent.event === event; });
            if (filteredEvent.length === 0) {
                return 'Passed event has not been registered';
            }
            return filteredEvent[0].id;
        };
        /**
         * Get url by event name
         *
         * @param {string} event
         * @returns {string}
         */
        Webhook.prototype.getUrlByEventName = function (event) {
            if (this.eventList.length === 0) {
                return 'Event list does not exist';
            }
            var filteredEvent = this.eventList.filter(function (listEvent) { return listEvent.event === event; });
            if (filteredEvent.length === 0) {
                return 'Passed event has not been registered';
            }
            return filteredEvent[0].url;
        };
        return Webhook;
    }(AbstractPayment));

    var _this$u = this;
    var RegisterWebhook = (function (args, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$u, void 0, void 0, function () {
            var url, event_1, eventList, payload, response, webhook, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = args.url, event_1 = args.event, eventList = args.eventList;
                        payload = { url: url };
                        if (event_1) {
                            payload.event = event_1;
                        }
                        if (eventList) {
                            payload.eventList = eventList;
                        }
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .post(URL_WEBHOOK, payload, paymentService.getHeidelpay().getPrivateKey())];
                    case 1:
                        response = _a.sent();
                        if (response.errors) {
                            return [2 /*return*/, reject(ResponseErrorsMapper(response))];
                        }
                        webhook = new Webhook(paymentService.getHeidelpay());
                        if (response.events) {
                            webhook.setEventList(response.events);
                        }
                        else {
                            webhook.setUrl(response.url);
                            webhook.setEvent(response.event);
                            webhook.setId(response.id);
                        }
                        resolve(webhook);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, reject(error_1)];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });

    var _this$v = this;
    var FetchWebhook = (function (paymentService, webhookId) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$v, void 0, void 0, function () {
            var endpoint, response, webhook, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = webhookId ? URL_WEBHOOK + "/" + webhookId : URL_WEBHOOK;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .get(endpoint, paymentService.getHeidelpay().getPrivateKey())];
                    case 2:
                        response = _a.sent();
                        if (response.errors) {
                            return [2 /*return*/, reject(ResponseErrorsMapper(response))];
                        }
                        webhook = new Webhook(paymentService.getHeidelpay());
                        if (response.events) {
                            webhook.setEventList(response.events);
                        }
                        else {
                            webhook.setUrl(response.url);
                            webhook.setEvent(response.event);
                            webhook.setId(response.id);
                        }
                        resolve(webhook);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        reject(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    });

    var _this$w = this;
    var UpdateWebhook = (function (webhookId, args, paymentService) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$w, void 0, void 0, function () {
            var url, payload, response, webhook, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = args.url;
                        payload = {};
                        if (url) {
                            payload.url = url;
                        }
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .put(URL_WEBHOOK + "/" + webhookId, payload, paymentService.getHeidelpay().getPrivateKey())];
                    case 1:
                        response = _a.sent();
                        if (response.errors) {
                            return [2 /*return*/, reject(ResponseErrorsMapper(response))];
                        }
                        webhook = new Webhook(paymentService.getHeidelpay());
                        webhook.setUrl(response.url);
                        webhook.setEvent(response.event);
                        webhook.setId(response.id);
                        resolve(webhook);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        reject(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });

    var _this$x = this;
    var DeleteWebhook = (function (paymentService, webhookId) {
        return new Promise(function (resolve, reject) { return __awaiter(_this$x, void 0, void 0, function () {
            var endpoint, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = webhookId ? URL_WEBHOOK + "/" + webhookId : URL_WEBHOOK;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, paymentService
                                .getRequestAdapter()
                                .delete(endpoint, {}, paymentService.getHeidelpay().getPrivateKey())];
                    case 2:
                        response = _a.sent();
                        if (response.errors) {
                            return [2 /*return*/, reject(ResponseErrorsMapper(response))];
                        }
                        if (response.events) {
                            resolve(response.events);
                        }
                        else {
                            resolve(response.id);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        reject(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    });

    var PaymentService = /** @class */ (function () {
        function PaymentService(heidelpay, locale, env) {
            this.heidelpay = heidelpay;
            this.requestAdapter = new FetchAdapter(locale, env);
        }
        /**
         * Get Heidelpay instance
         *
         * @returns {Heidelpay}
         */
        PaymentService.prototype.getHeidelpay = function () {
            return this.heidelpay;
        };
        /**
         * Get request adapter
         *
         * @returns {FetchAdapter}
         */
        PaymentService.prototype.getRequestAdapter = function () {
            return this.requestAdapter;
        };
        /**
         * Create payment type
         *
         * @param {PaymentType} paymentType
         * @returns {Promise<PaymentType>}
         */
        PaymentService.prototype.createPaymentType = function (paymentType) {
            return CreatePaymentType(paymentType, this);
        };
        /**
         * Fetch a payment
         *
         * @param {string} paymentId
         * @returns {Promise<Payment>}
         */
        PaymentService.prototype.fetchPayment = function (paymentId) {
            return FetchPayment(paymentId, this);
        };
        /**
         * Fetch a payment type
         *
         * @param {string} paymentTypeId
         * @returns {Promise<PaymentType>}
         */
        PaymentService.prototype.fetchPaymentType = function (paymentTypeId) {
            return FetchPaymentType(paymentTypeId, this);
        };
        /**
         * Create customer
         *
         * @param {Customer} customer
         * @returns {Promise<Customer>}
         */
        PaymentService.prototype.createCustomer = function (customer) {
            return CreateCustomer(customer, this);
        };
        /**
         * Fetch customer info by customer Id
         *
         * @param {string} customerId
         * @returns {Promise<Customer>}
         */
        PaymentService.prototype.fetchCustomer = function (customerId) {
            return FetchCustomer(customerId, this);
        };
        /**
         * Update data customer
         *
         * @param {string} customerId
         * @param {Customer} customer
         * @returns {Promise<Customer>}
         */
        PaymentService.prototype.updateCustomer = function (customerId, customer) {
            return UpdateCustomer(customerId, customer, this);
        };
        /**
         * Delete a customer
         *
         * @param {string} customerId
         * @returns {Promise<boolean>}
         */
        PaymentService.prototype.deleteCustomer = function (customerId) {
            return DeleteCustomer(customerId, this);
        };
        /**
         * Create metadata
         *
         * @param {Metadata} metadata
         * @returns {Promise<Metadata>}
         */
        PaymentService.prototype.createMetadata = function (metadata) {
            return CreateMetadata(metadata, this);
        };
        /**
         * Fetch metadata
         *
         * @param {Metadata} metadata
         * @returns {Promise<Metadata>}
         */
        PaymentService.prototype.fetchMetadata = function (metadataId) {
            return FetchMetadata(metadataId, this);
        };
        /**
         * Create basket
         *
         * @param {Basket} baskset
         * @returns {Promise<Basket>}
         */
        PaymentService.prototype.createBasket = function (basket) {
            return CreateBasket(basket, this);
        };
        /**
         * Fetch basket
         *
         * @param {Basket} baskset
         * @returns {Promise<Basket>}
         */
        PaymentService.prototype.fetchBasket = function (basketId) {
            return FetchBasket(basketId, this);
        };
        /**
         * Fetch basket
         *
         * @param {Basket} baskset
         * @returns {Promise<Basket>}
         */
        PaymentService.prototype.updateBasket = function (basketId, basket) {
            return UpdateBasket(basketId, basket, this);
        };
        /**
         * Authorize a payment
         *
         * @param {authorizeObject} args
         * @returns {Promise<Authorization>}
         */
        PaymentService.prototype.authorize = function (args) {
            return AuthorizationService(args, this);
        };
        /**
         * Charge a payment
         *
         * @param {chargeObject} args
         * @returns {Promise<Charge>}
         */
        PaymentService.prototype.charge = function (args) {
            return ChargeService(args, this);
        };
        /**
         * Charge after authorization
         *
         * @param {chargeAuthorizeObject} args
         * @returns {Promise<Charge>}
         */
        PaymentService.prototype.chargeAuthorization = function (args) {
            return ChargeAuthorization(args, this);
        };
        /**
         * Reversal a payment
         *
         * @param {cancelAuthorizeObject} args
         * @returns {Promise<Cancel>}
         */
        PaymentService.prototype.cancelAuthorization = function (args) {
            return CancelAuthorization(args, this);
        };
        /**
         * Refund a payment
         *
         * @param {cancelChargeObject} args
         * @returns {Promise<Cancel>}
         */
        PaymentService.prototype.cancelCharge = function (args) {
            return CancelCharge(args, this);
        };
        /**
         * Shipment
         *
         * @param {string} paymentId
         * @returns {Promise<Shipment>}
         */
        PaymentService.prototype.shipment = function (paymentId, args) {
            return ShipmentService(paymentId, args, this);
        };
        /**
         * Init authorize paypage
         *
         * @param {Paypage} paypage
         * @returns {Promise<Paypage>}
         */
        PaymentService.prototype.initAuthorizePaypage = function (paypage) {
            return InitPaypage(paypage, 'authorize', this);
        };
        /**
         * Init charge paypage
         *
         * @param {Paypage} paypage
         * @returns {Promise<Paypage>}
         */
        PaymentService.prototype.initChargePaypage = function (paypage) {
            return InitPaypage(paypage, 'charge', this);
        };
        /**
         * Init authorize linkpay
         *
         * @param {Linkpay} linkpay
         * @returns {Promise<Linkpay>}
         */
        PaymentService.prototype.initAuthorizeLinkpay = function (linkpay) {
            return InitLinkpay(linkpay, 'authorize', this);
        };
        /**
         * Init charge linkpay
         *
         * @param {Linkpay} linkpay
         * @returns {Promise<Linkpay>}
         */
        PaymentService.prototype.initChargeLinkpay = function (linkpay) {
            return InitLinkpay(linkpay, 'charge', this);
        };
        /**
         * Update linkpay
         *
         * @param {string} linkpayIdOrAlias
         * @param {updateLinkpayObject} linkpayObj
         * @returns {Promise<Linkpay>}
         */
        PaymentService.prototype.updateLinkpay = function (linkpayIdOrAlias, linkpay) {
            return UpdateLinkpay(linkpayIdOrAlias, linkpay, this);
        };
        /**
         * Delete linkpay
         *
         * @param {string} linkpayIdOrAlias
         * @returns {Promise<boolean>}
         */
        PaymentService.prototype.deleteLinkpay = function (linkpayIdOrAlias) {
            return DeleteLinkpay(linkpayIdOrAlias, this);
        };
        /**
         * Init charge paypage
         *
         * @param {Paypage} paypage
         * @returns {Promise<Paypage>}
         */
        PaymentService.prototype.payout = function (args) {
            return PayoutService(args, this);
        };
        /**
         * Fetch a payout object
         *
         * @param {string} paymentId
         * @param {string} payoutId
         * @returns {Promise<Payment>}
         */
        PaymentService.prototype.fetchPayout = function (paymentId, payoutId) {
            return FetchPayout(paymentId, payoutId, this);
        };
        /**
         * Fetch hire purchase plans
         *
         * @param {string} amount
         * @param {string} currency
         * @param {string} effectiveInterestRate
         * @param {string} orderDate
         * @returns {Promise<Payment>}
         */
        PaymentService.prototype.fetchHirePurchasePlan = function (amount, currency, effectiveInterestRate, orderDate) {
            return FetchHirePurchasePlan(amount, currency, effectiveInterestRate, orderDate, this);
        };
        /**
        * Update HirePurchase
        *
        * @param {string} hirePurchaseId
        * @param {updateHirePurchaseObject} hirePurchase
        * @returns {Promise<HirePurchase>}
        */
        PaymentService.prototype.updateHirePurchase = function (hirePurchaseId, hirePurchase) {
            return UpdateHirePurchase(hirePurchaseId, hirePurchase, this);
        };
        /**
         * Start Recurring
         *
         * @param {string} paymentId
         * @param {recurringObj} args
         */
        PaymentService.prototype.startRecurring = function (paymentId, args) {
            return CreateRecurring(paymentId, args, this);
        };
        /**
         * Register Webhook
         *
         * @param {webhookObject} args
         * @returns {Promise<Webhook>}
         */
        PaymentService.prototype.registerWebhook = function (args) {
            return RegisterWebhook(args, this);
        };
        /**
        * Fetch Webhook
        *
        * @param {string} id
        * @returns {Promise<Webhook>}
        */
        PaymentService.prototype.fetchWebhook = function (id) {
            return FetchWebhook(this, id);
        };
        /**
        * Update Webhook
        *
        * @param {string} id
        * @returns {Promise<Webhook>}
        */
        PaymentService.prototype.updateWebhook = function (id, args) {
            return UpdateWebhook(id, args, this);
        };
        /**
        * Delete Webhook
        *
        * @param {string} id
        * @returns {Promise<Webhook>}
        */
        PaymentService.prototype.deleteWebhook = function (id) {
            return DeleteWebhook(this, id);
        };
        return PaymentService;
    }());

    var ERROR_MISSING_PRIVATE_KEY = 'Missing key to init Heidelpay SDK';

    var Heidelpay = /** @class */ (function () {
        function Heidelpay(privateKey, locale, env) {
            if (!privateKey) {
                throw new Error(ERROR_MISSING_PRIVATE_KEY);
            }
            this.privateKey = privateKey;
            this.paymentService = new PaymentService(this, locale, env);
        }
        /**
         * Get SDK Version
         *
         * @returns {string}
         */
        Heidelpay.prototype.getVersion = function () {
            return SDK_VERSION;
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
                            if (!(typeId instanceof AbstractPaymentType)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.createPaymentType(typeId)];
                        case 1:
                            paymentType = _a.sent();
                            typeId = paymentType.getId();
                            _a.label = 2;
                        case 2:
                            if (!(customerId instanceof Customer)) return [3 /*break*/, 4];
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
                            if (!(typeId instanceof AbstractPaymentType)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.createPaymentType(typeId)];
                        case 1:
                            paymentType = _a.sent();
                            typeId = paymentType.getId();
                            _a.label = 2;
                        case 2:
                            if (!(customerId instanceof Customer)) return [3 /*break*/, 4];
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

    var Paypage = /** @class */ (function (_super) {
        __extends(Paypage, _super);
        function Paypage() {
            var _this = _super.call(this) || this;
            _this.additionalAttributes = {};
            _this.resources = new Resources();
            return _this;
        }
        /**
         * Get url end point
         *
         * @returns {string}
         */
        Paypage.prototype.getTypeUrl = function () {
            return this.typeUrl;
        };
        /**
         * Get Payload
         *
         * @returns
         */
        Paypage.prototype.getPayload = function () {
            var payload = {
                amount: this.getAmount(),
                currency: this.getCurrency(),
                returnUrl: this.getReturnUrl(),
                logoImage: this.getLogoImage(),
                fullPageImage: this.getFullPageImage(),
                shopName: this.getShopName(),
                shopDescription: this.getShopDescription(),
                tagline: this.getTagline(),
                card3ds: this.getCard3ds(),
                invoiceId: this.getInvoiceId(),
                termsAndConditionUrl: this.getTermsAndConditionUrl(),
                privacyPolicyUrl: this.getPrivacyPolicyUrl(),
                impressumUrl: this.getImpressumUrl(),
                helpUrl: this.getHelpUrl(),
                contactUrl: this.getContactUrl(),
                resources: this.getResources(),
                excludeTypes: this.getExcludeTypes()
            };
            return payload;
        };
        /**
         * Get Amount
         *
         * @param {string} amount
         * @returns {string}
         */
        Paypage.prototype.getAmount = function () {
            return this.amount;
        };
        /**
         * Set amount
         *
         * @param {string} amount
         * @returns {Card}
         */
        Paypage.prototype.setAmount = function (amount) {
            this.amount = amount;
            return this;
        };
        /**
         * Get currency
         *
         * @returns {string}
         */
        Paypage.prototype.getCurrency = function () {
            return this.currency;
        };
        /**
         * Set currency
         *
         * @param {string} currency
         * @returns {Paypage}
         */
        Paypage.prototype.setCurrency = function (currency) {
            this.currency = currency;
            return this;
        };
        /**
         * Get return URL
         *
         * @returns {string}
         */
        Paypage.prototype.getReturnUrl = function () {
            return this.returnUrl;
        };
        /**
         * Set return URL
         *
         * @param {string} returnUrl
         * @returns {Paypage}
         */
        Paypage.prototype.setReturnUrl = function (returnUrl) {
            this.returnUrl = returnUrl;
            return this;
        };
        /**
         * Get logo image
         *
         * @returns {string}
         */
        Paypage.prototype.getLogoImage = function () {
            return this.logoImage;
        };
        /**
         * Set logo image
         *
         * @param {string} logoImage
         * @returns {Paypage}
         */
        Paypage.prototype.setLogoImage = function (logoImage) {
            this.logoImage = logoImage;
            return this;
        };
        /**
         * Get fullpage image
         *
         * @returns {string}
         */
        Paypage.prototype.getFullPageImage = function () {
            return this.fullPageImage;
        };
        /**
         * Set fullpage image
         *
         * @param {string} fullPageImage
         * @returns {Paypage}
         */
        Paypage.prototype.setFullPageImage = function (fullPageImage) {
            this.fullPageImage = fullPageImage;
            return this;
        };
        /**
         * Get shop name
         *
         * @returns {string}
         */
        Paypage.prototype.getShopName = function () {
            return this.shopName;
        };
        /**
         * Set shop name
         *
         * @param {string} shopName
         * @returns {Paypage}
         */
        Paypage.prototype.setShopName = function (shopName) {
            this.shopName = shopName;
            return this;
        };
        /**
         * Get shop description
         *
         * @returns {string}
         */
        Paypage.prototype.getShopDescription = function () {
            return this.shopDescription;
        };
        /**
         * Set shop description
         *
         * @param {string} shopDescription
         * @returns {Paypage}
         */
        Paypage.prototype.setShopDescription = function (shopDescription) {
            this.shopDescription = shopDescription;
            return this;
        };
        /**
         * Get tagline
         *
         * @returns {string}
         */
        Paypage.prototype.getTagline = function () {
            return this.tagline;
        };
        /**
         * Set tagline
         *
         * @param {string} tagline
         * @returns {Paypage}
         */
        Paypage.prototype.setTagline = function (tagline) {
            this.tagline = tagline;
            return this;
        };
        /**
         * Get card3ds
         *
         * @returns {string}
         */
        Paypage.prototype.getCard3ds = function () {
            return this.card3ds;
        };
        /**
         * Set card3ds
         *
         * @param {string} card3ds
         * @returns {Paypage}
         */
        Paypage.prototype.setCard3ds = function (card3ds) {
            this.card3ds = card3ds;
            return this;
        };
        /**
         * Get Invoice Id
         *
         * @returns {string}
         */
        Paypage.prototype.getInvoiceId = function () {
            return this.invoiceId;
        };
        /**
         * Set Additional attributes
         *
         * @param {object} additionalAttributes
         * @returns {Paypage}
         */
        Paypage.prototype.setAdditionalAttributes = function (additionalAttributes) {
            this.additionalAttributes = additionalAttributes;
            return this;
        };
        /**
         * Get Additional attributes
         *
         * @returns {object}
         */
        Paypage.prototype.getAdditionalAttributes = function () {
            return this.additionalAttributes;
        };
        /**
         * Set Invoice Id
         *
         * @param {string} invoiceId
         * @returns {Paypage}
         */
        Paypage.prototype.setInvoiceId = function (invoiceId) {
            this.invoiceId = invoiceId;
            return this;
        };
        /**
         * Get terms and condition URL
         *
         * @returns {string}
         */
        Paypage.prototype.getTermsAndConditionUrl = function () {
            return this.termsAndConditionUrl;
        };
        /**
         * Set terms and condition URL
         *
         * @param {string} termsAndConditionUrl
         * @returns {Paypage}
         */
        Paypage.prototype.setTermsAndConditionUrl = function (termsAndConditionUrl) {
            this.termsAndConditionUrl = termsAndConditionUrl;
            return this;
        };
        /**
         * Get privacy URL
         *
         * @returns {string}
         */
        Paypage.prototype.getPrivacyPolicyUrl = function () {
            return this.privacyPolicyUrl;
        };
        /**
         * Set privacy URL
         *
         * @param {string} privacyPolicyUrl
         * @returns {Paypage}
         */
        Paypage.prototype.setPrivacyPolicyUrl = function (privacyPolicyUrl) {
            this.privacyPolicyUrl = privacyPolicyUrl;
            return this;
        };
        /**
         * Get Impressum URL
         *
         * @returns {string}
         */
        Paypage.prototype.getImpressumUrl = function () {
            return this.impressumUrl;
        };
        /**
         * Set Impresssum URL
         *
         * @param {string} impressumUrl
         * @returns {Paypage}
         */
        Paypage.prototype.setImpressumUrl = function (impressumUrl) {
            this.impressumUrl = impressumUrl;
            return this;
        };
        /**
         * Get Help URL
         *
         * @returns {string}
         */
        Paypage.prototype.getHelpUrl = function () {
            return this.helpUrl;
        };
        /**
         * Set Help URL
         *
         * @param {string} helpUrl
         * @returns {Paypage}
         */
        Paypage.prototype.setHelpUrl = function (helpUrl) {
            this.helpUrl = helpUrl;
            return this;
        };
        /**
         * Set contact URL
         *
         * @returns {string}
         */
        Paypage.prototype.getContactUrl = function () {
            return this.contactUrl;
        };
        /**
         * Set contact URL
         *
         * @param {string} contactUrl
         * @returns {Paypage}
         */
        Paypage.prototype.setContactUrl = function (contactUrl) {
            this.contactUrl = contactUrl;
            return this;
        };
        /**
         * Get redirectUrl
         *
         * @returns {string}
         */
        Paypage.prototype.getRedirectUrl = function () {
            return this.redirectUrl;
        };
        /**
         * Set redirectUrl
         *
         * @param {string} redirectUrl
         * @returns {Paypage}
         */
        Paypage.prototype.setRedirectUrl = function (redirectUrl) {
            this.redirectUrl = redirectUrl;
            return this;
        };
        /**
         * Get action
         *
         * @returns {string}
         */
        Paypage.prototype.getAction = function () {
            return this.action;
        };
        /**
         * Set redirectUrl
         *
         * @param {string} redirectUrl
         * @returns {Paypage}
         */
        Paypage.prototype.setAction = function (action) {
            this.action = action;
            return this;
        };
        /**
         * Get resources
         *
         * @returns {Resources}
         */
        Paypage.prototype.getResources = function () {
            return this.resources;
        };
        /**
         * Set excludeTypes
         *
         * @param {Array<string>} excludeTypes
         * @returns {Paypage}
         */
        Paypage.prototype.setExcludeTypes = function (excludeTypes) {
            this.excludeTypes = excludeTypes;
            return this;
        };
        /**
         * Get excludeTypes
         *
         * @returns {Array<string>}
         */
        Paypage.prototype.getExcludeTypes = function () {
            return this.excludeTypes;
        };
        /**
         * Set resources
         *
         * @param {*} resources
         */
        Paypage.prototype.setResources = function (resources) {
            this.resources
                .setCustomerId(resources.customerId)
                .setMetadataId(resources.metadataId)
                .setPaymentId(resources.paymentId)
                .setBasketId(resources.basketId);
        };
        return Paypage;
    }(AbstractPaymentType));

    exports.default = Heidelpay;
    exports.Customer = Customer;
    exports.Metadata = Metadata;
    exports.Processing = Processing;
    exports.Resources = Resources;
    exports.Basket = Basket;
    exports.Paypage = Paypage;
    exports.Card = Card;
    exports.EPS = Eps;
    exports.Giropay = Giropay;
    exports.Ideal = Ideal;
    exports.Invoice = Invoice;
    exports.InvoiceGuaranteed = InvoiceGuaranteed;
    exports.InvoiceFactoring = InvoiceFactoring;
    exports.Prepayment = Prepayment;
    exports.Przelewy24 = Przelewy24;
    exports.SepaDirectDebit = SepaDirectDebit;
    exports.SepaDirectDebitGuaranteed = SepaDirectDebitGuaranteed;
    exports.Sofort = Sofort;
    exports.PIS = Pis;
    exports.Paypal = Paypal;
    exports.Alipay = Alipay;
    exports.WechatPay = WechatPay;
    exports.HirePurchase = HirePurchase;
    exports.Bancontact = Bancontact;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
