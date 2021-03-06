import AbstractPaymentType from '../types/AbstractPaymentType';
import PaymentType from '../types/PaymentType';
import Resources from '../business/Resources';
export default class Linkpay extends AbstractPaymentType implements PaymentType {
    private alias;
    private amount;
    private additionalAttributes;
    private billingAddressRequired;
    private currency;
    private card3ds;
    private css;
    private contactUrl;
    private excludeTypes;
    private expires;
    private fullPageImage;
    private helpUrl;
    private invoiceId;
    private invoiceIdRequired;
    private imprintUrl;
    private intention;
    private logoImage;
    private privacyPolicyUrl;
    private orderId;
    private orderIdRequired;
    private resources;
    private returnUrl;
    private shopName;
    private shopDescription;
    private shippingAddressRequired;
    private tagline;
    private termsAndConditionUrl;
    private payloadObj;
    private redirectUrl;
    private action;
    private typeUrl;
    constructor();
    /**
     * Get url end point
     *
     * @returns {string}
     */
    getTypeUrl(): string;
    /**
     * Get url end point
     *
     * @returns {string}
     */
    resetPayload(): Linkpay;
    /**
     * Get Payload
     *
     * @returns {any}
     */
    getPayload(): any;
    /**
     * Get Amount
     *
     * @param {string} amount
     * @returns {string}
     */
    getAmount(): string | number;
    /**
     * Set amount
     *
     * @param {string} amount
     * @returns {Card}
     */
    setAmount(amount: string | number): Linkpay;
    /**
     * Get currency
     *
     * @returns {string}
     */
    getCurrency(): string;
    /**
     * Set currency
     *
     * @param {string} currency
     * @returns {Linkpay}
     */
    setCurrency(currency: string): Linkpay;
    /**
     * Get return URL
     *
     * @returns {string}
     */
    getReturnUrl(): string;
    /**
     * Set return URL
     *
     * @param {string} returnUrl
     * @returns {Linkpay}
     */
    setReturnUrl(returnUrl: string): Linkpay;
    /**
     * Get logo image
     *
     * @returns {string}
     */
    getLogoImage(): string;
    /**
     * Set logo image
     *
     * @param {string} logoImage
     * @returns {Linkpay}
     */
    setLogoImage(logoImage: string): Linkpay;
    /**
     * Get fullpage image
     *
     * @returns {string}
     */
    getFullPageImage(): string;
    /**
     * Set fullpage image
     *
     * @param {string} fullPageImage
     * @returns {Linkpay}
     */
    setFullPageImage(fullPageImage: string): Linkpay;
    /**
     * Get shop name
     *
     * @returns {string}
     */
    getShopName(): string;
    /**
     * Set shop name
     *
     * @param {string} shopName
     * @returns {Linkpay}
     */
    setShopName(shopName: string): Linkpay;
    /**
     * Get shop description
     *
     * @returns {string}
     */
    getShopDescription(): string;
    /**
     * Set shop description
     *
     * @param {string} shopDescription
     * @returns {Linkpay}
     */
    setShopDescription(shopDescription: string): Linkpay;
    /**
     * Get tagline
     *
     * @returns {string}
     */
    getTagline(): string;
    /**
     * Set tagline
     *
     * @param {string} tagline
     * @returns {Linkpay}
     */
    setTagline(tagline: string): Linkpay;
    /**
     * Get card3ds
     *
     * @returns {string}
     */
    getCard3ds(): string;
    /**
     * Set card3ds
     *
     * @param {string} card3ds
     * @returns {Linkpay}
     */
    setCard3ds(card3ds: string): Linkpay;
    /**
     * Get Invoice Id
     *
     * @returns {string}
     */
    getInvoiceId(): string;
    /**
     * Set Additional attributes
     *
     * @param {object} additionalAttributes
     * @returns {Linkpay}
     */
    setAdditionalAttributes(additionalAttributes: object): Linkpay;
    /**
     * Get Additional attributes
     *
     * @returns {object}
     */
    getAdditionalAttributes(): object;
    /**
     * Set Invoice Id
     *
     * @param {string} invoiceId
     * @returns {Linkpay}
     */
    setInvoiceId(invoiceId: string): Linkpay;
    /**
     * Get terms and condition URL
     *
     * @returns {string}
     */
    getTermsAndConditionUrl(): string;
    /**
     * Set terms and condition URL
     *
     * @param {string} termsAndConditionUrl
     * @returns {Linkpay}
     */
    setTermsAndConditionUrl(termsAndConditionUrl: string): Linkpay;
    /**
     * Get privacy URL
     *
     * @returns {string}
     */
    getPrivacyPolicyUrl(): string;
    /**
     * Set privacy URL
     *
     * @param {string} privacyPolicyUrl
     * @returns {Linkpay}
     */
    setPrivacyPolicyUrl(privacyPolicyUrl: string): Linkpay;
    /**
     * Get Imprint URL
     *
     * @returns {string}
     */
    getImprintUrl(): string;
    /**
     * Set Imprint URL
     *
     * @param {string} imprintUrl
     * @returns {Linkpay}
     */
    setImprintUrl(imprintUrl: string): Linkpay;
    /**
     * Get Help URL
     *
     * @returns {string}
     */
    getHelpUrl(): string;
    /**
     * Set Help URL
     *
     * @param {string} helpUrl
     * @returns {Linkpay}
     */
    setHelpUrl(helpUrl: string): Linkpay;
    /**
     * Set contact URL
     *
     * @returns {string}
     */
    getContactUrl(): string;
    /**
     * Set contact URL
     *
     * @param {string} contactUrl
     * @returns {Linkpay}
     */
    setContactUrl(contactUrl: string): Linkpay;
    /**
     * Get redirectUrl
     *
     * @returns {string}
     */
    getRedirectUrl(): string;
    /**
     * Set redirectUrl
     *
     * @param {string} redirectUrl
     * @returns {Linkpay}
     */
    setRedirectUrl(redirectUrl: string): Linkpay;
    /**
     * Get action
     *
     * @returns {string}
     */
    getAction(): string;
    /**
     * Set redirectUrl
     *
     * @param {string} redirectUrl
     * @returns {Linkpay}
     */
    setAction(action: string): Linkpay;
    /**
     * Get resources
     *
     * @returns {Resources}
     */
    getResources(): Resources;
    /**
     * Set excludeTypes
     *
     * @param {Array<string>} excludeTypes
     * @returns {Linkpay}
     */
    setExcludeTypes(excludeTypes: Array<string>): Linkpay;
    /**
     * Get excludeTypes
     *
     * @returns {Array<string>}
     */
    getExcludeTypes(): Array<string>;
    /**
     * Set alias
     *
     * @param {string} alias
     * @returns {Linkpay}
     */
    setAlias(alias: string): Linkpay;
    /**
     * Get alias
     *
     * @returns {string}
     */
    getAlias(): string;
    /**
     * Set invoiceIdRequired
     *
     * @param {string} invoiceIdRequired
     * @returns {Linkpay}
     */
    setInvoiceIdRequired(invoiceIdRequired: string): Linkpay;
    /**
     * Get invoiceIdRequired
     *
     * @returns {string}
     */
    getInvoiceIdRequired(): string;
    /**
     * Set orderId
     *
     * @param {string} orderId
     * @returns {Linkpay}
     */
    setOrderId(orderId: string): Linkpay;
    /**
     * Get orderId
     *
     * @returns {string}
     */
    getOrderId(): string;
    /**
     * Set orderIdRequired
     *
     * @param {string} orderIdRequired
     * @returns {Linkpay}
     */
    setOrderIdRequired(orderIdRequired: string): Linkpay;
    /**
     * Get orderIdRequired
     *
     * @returns {string}
     */
    getOrderIdRequired(): string;
    /**
     * Set billingAddressRequired
     *
     * @param {string} billingAddressRequired
     * @returns {Linkpay}
     */
    setBillingAddressRequired(billingAddressRequired: string): Linkpay;
    /**
     * Get billingAddressRequired
     *
     * @returns {string}
     */
    getBillingAddressRequired(): string;
    /**
     * Set shippingAddressRequired
     *
     * @param {string} shippingAddressRequired
     * @returns {Linkpay}
     */
    setShippingAddressRequired(shippingAddressRequired: string): Linkpay;
    /**
     * Get shippingAddressRequired
     *
     * @returns {string}
     */
    getShippingAddressRequired(): string;
    /**
     * Set expirationDate
     *
     * @param {string} expirationDate
     * @returns {Linkpay}
     */
    setExpirationDate(expirationDate: string): Linkpay;
    /**
     * Get expirationDate
     *
     * @returns {string}
     */
    getExpirationDate(): string;
    /**
     * Set intention
     *
     * @param {string} intention
     * @returns {Linkpay}
     */
    setIntention(intention: string): Linkpay;
    /**
     * Get intention
     *
     * @returns {string}
     */
    getIntention(): string;
    /**
     * Set css
     *
     * @param {any} css
     * @returns {Linkpay}
     */
    setCss(css: any): Linkpay;
    /**
     * Get css
     *
     * @returns {any}
     */
    getCss(): any;
    /**
     * Set resources
     *
     * @param {*} resources
     */
    setResources(resources: any): this;
}
