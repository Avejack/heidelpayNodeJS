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
var Webhook_1 = require("../payments/business/Webhook");
var ResponseErrorsMapper_1 = require("./mappers/ResponseErrorsMapper");
exports.default = (function (args, paymentService) {
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
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
                            .post(apiURL.URL_WEBHOOK, payload, paymentService.getHeidelpay().getPrivateKey())];
                case 1:
                    response = _a.sent();
                    if (response.errors) {
                        return [2 /*return*/, reject(ResponseErrorsMapper_1.default(response))];
                    }
                    webhook = new Webhook_1.default(paymentService.getHeidelpay());
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
//# sourceMappingURL=RegisterWebhook.js.map