"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.Customer = Customer;
var Salutation;
(function (Salutation) {
    Salutation["mr"] = "mr";
    Salutation["mrs"] = "mrs";
    Salutation["unknown"] = "unknown";
})(Salutation = exports.Salutation || (exports.Salutation = {}));
//# sourceMappingURL=Customer.js.map