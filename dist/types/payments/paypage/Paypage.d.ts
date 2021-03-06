import AbstractPaymentType from '../types/AbstractPaymentType';
import PaymentType from '../types/PaymentType';
import Resources from '../business/Resources';
export default class Paypage extends AbstractPaymentType implements PaymentType {
    private amount;
    private currency;
    private returnUrl;
    private logoImage;
    private fullPageImage;
    private shopName;
    private shopDescription;
    private tagline;
    private card3ds;
    private invoiceId;
    private additionalAttributes;
    private termsAndConditionUrl;
    private privacyPolicyUrl;
    private impressumUrl;
    private helpUrl;
    private contactUrl;
    private resources;
    private typeUrl;
    private redirectUrl;
    private action;
    private excludeTypes;
    constructor();
    /**
     * Get url end point
     *
     * @returns {string}
     */
    getTypeUrl(): string;
    /**
     * Get Payload
     *
     * @returns
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
    setAmount(amount: string | number): Paypage;
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
     * @returns {Paypage}
     */
    setCurrency(currency: string): Paypage;
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
     * @returns {Paypage}
     */
    setReturnUrl(returnUrl: string): Paypage;
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
     * @returns {Paypage}
     */
    setLogoImage(logoImage: string): Paypage;
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
     * @returns {Paypage}
     */
    setFullPageImage(fullPageImage: string): Paypage;
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
     * @returns {Paypage}
     */
    setShopName(shopName: string): Paypage;
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
     * @returns {Paypage}
     */
    setShopDescription(shopDescription: string): Paypage;
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
     * @returns {Paypage}
     */
    setTagline(tagline: string): Paypage;
    /**
     * Get card3ds
     *
     * @returns {string}
     */
    getCard3ds(): boolean;
    /**
     * Set card3ds
     *
     * @param {string} card3ds
     * @returns {Paypage}
     */
    setCard3ds(card3ds: boolean): Paypage;
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
     * @returns {Paypage}
     */
    setAdditionalAttributes(additionalAttributes: object): Paypage;
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
     * @returns {Paypage}
     */
    setInvoiceId(invoiceId: string): Paypage;
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
     * @returns {Paypage}
     */
    setTermsAndConditionUrl(termsAndConditionUrl: string): Paypage;
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
     * @returns {Paypage}
     */
    setPrivacyPolicyUrl(privacyPolicyUrl: string): Paypage;
    /**
     * Get Impressum URL
     *
     * @returns {string}
     */
    getImpressumUrl(): string;
    /**
     * Set Impresssum URL
     *
     * @param {string} impressumUrl
     * @returns {Paypage}
     */
    setImpressumUrl(impressumUrl: string): Paypage;
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
     * @returns {Paypage}
     */
    setHelpUrl(helpUrl: string): Paypage;
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
     * @returns {Paypage}
     */
    setContactUrl(contactUrl: string): Paypage;
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
     * @returns {Paypage}
     */
    setRedirectUrl(redirectUrl: string): Paypage;
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
     * @returns {Paypage}
     */
    setAction(action: string): Paypage;
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
     * @returns {Paypage}
     */
    setExcludeTypes(excludeTypes: Array<string>): Paypage;
    /**
     * Get excludeTypes
     *
     * @returns {Array<string>}
     */
    getExcludeTypes(): Array<string>;
    /**
     * Set resources
     *
     * @param {*} resources
     */
    setResources(resources: any): void;
}
