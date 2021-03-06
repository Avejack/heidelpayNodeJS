declare class Customer {
    private _firstName;
    private _lastName;
    private _salutation;
    private _customerId;
    private _company;
    private _birthDate;
    private _email;
    private _phone;
    private _mobile;
    private _billingAddress;
    private _shippingAddress;
    private _companyInfo;
    constructor(firstName?: string, lastName?: string);
    /**
     * Get Request Payload
     */
    getRequestPayload(): {
        lastname: string;
        firstname: string;
        salutation: Salutation;
        birthDate: string;
        company: string;
        email: string;
        phone: string;
        mobile: string;
        billingAddress: Address;
        shippingAddress: Address;
        companyInfo: CompanyInfo;
    };
    /**
     * Set FirstName
     *
     * @param {string} value
     * @returns {Customer}
     */
    setFirstName(value: string): Customer;
    /**
     * Get first name property
     *
     * @type {string}
     */
    getFirstName(): string;
    /**
     * Set LastName
     *
     * @param {string} value
     * @returns {Customer}
     */
    setLastName(value: string): Customer;
    /**
     * Get last name property
     *
     * @type {string}
     */
    getLastName(): string;
    /**
     * Set Salutation
     *
     * @param {string} value
     * @returns {Customer}
     */
    setSalutation(value: Salutation): Customer;
    /**
     * Get salutation
     *
     * @type {Salutation}
     */
    getSalutation(): Salutation;
    /**
     * Set CustomerId
     *
     * @param {string} value
     * @returns {Customer}
     */
    setCustomerId(value: string): Customer;
    /**
     * Get customer Id
     *
     * @type {string}
     */
    getCustomerId(): string;
    /**
     * Set Company
     *
     * @param {string} value
     * @returns {Customer}
     */
    setCompany(value: string): Customer;
    /**
     * Get Company
     *
     * @type {string}
     */
    getCompany(): string;
    /**
     * Set Birthday
     *
     * @param {string} value
     * @returns {Customer}
     */
    setBirthDate(value: string): Customer;
    /**
     * Get birthdate
     *
     * @type {Date}
     */
    getBirthDate(): string;
    /**
     * Set Emaile
     *
     * @param {string} value
     * @returns {Customer}
     */
    setEmail(value: string): Customer;
    /**
     * Get email
     *
     * @type {string}
     */
    getEmail(): string;
    /**
     * Set Phone
     *
     * @param {string} value
     * @returns {Customer}
     */
    setPhone(value: string): Customer;
    /**
     * Get phone
     *
     * @type {string}
     */
    getPhone(): string;
    /**
     * Set Mobile
     *
     * @param {string} value
     * @returns {Customer}
     */
    setMobile(value: string): Customer;
    /**
     * Get mobile
     *
     * @type {string}
     */
    getMobile(): string;
    /**
     * Set Address
     *
     * @param {Address} value
     * @returns {Customer}
     */
    setBillingAddress(value: Address): Customer;
    /**
     * Get address
     *
     * @type {Address}
     */
    getBillingAddress(): Address;
    /**
     * Set Shipping Address
     * @param value
     */
    setShippingAddress(value: Address): Customer;
    /**
     * Set Shipping Address
     * @param value
     */
    getShippingAddress(): Address;
    /**
     * Set Company Information
     *
     * @param {CompanyInfo} companyInfo
     * @returns {Customer}
     */
    setCompanyInfo(companyInfo: CompanyInfo): Customer;
    /**
     * Get Company Information
     *
     * @type {CompanyInfo}
     */
    getCompanyInfo(): CompanyInfo;
}
export declare enum Salutation {
    mr = "mr",
    mrs = "mrs",
    unknown = "unknown"
}
export declare type Address = {
    name: string;
    street: string;
    state: string;
    zip: string;
    city: string;
    country: string;
};
export declare type CompanyInfo = {
    registrationType: string;
    commercialRegisterNumber?: string;
    function?: string;
    commercialSector?: string;
};
export { Customer };
