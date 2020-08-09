import AbstractPaymentType from './AbstractPaymentType';
import PaymentType from './PaymentType';
export default class HirePurchase extends AbstractPaymentType implements PaymentType {
    private _iban;
    private _bic;
    private _accountHolder;
    private _invoiceDate;
    private _invoiceDueDate;
    private _numberOfRates;
    private _dayOfPurchase;
    private _orderDate;
    private _totalPurchaseAmount;
    private _totalInterestAmount;
    private _totalAmount;
    private _effectiveInterestRate;
    private _nominalInterestRate;
    private _feeFirstRate;
    private _feePerRate;
    private _monthlyRate;
    private _lastRate;
    constructor();
    /**
     * Set Iban
     *
     * @param {string} iban
     * @returns {HirePurchase}
     */
    setIban(iban: string): HirePurchase;
    /**
     * Get Iban
     *
     * @returns {string}
     */
    getIban(): string;
    /**
     * Set BIC
     *
     * @param {string} bic
     * @returns {HirePurchase}
     */
    setBic(bic: string): HirePurchase;
    /**
     * Get Bic
     *
     * @returns {string}
     */
    getBic(): string;
    /**
     * Set Account Holader
     *
     * @param {string} accountHolder
     * @returns {HirePurchase}
     */
    setAccountHolder(accountHolder: string): HirePurchase;
    /**
     * Get Account Holder
     *
     * @returns {string}
     */
    getAccountHolder(): string;
    /**
     * Set Invoice Date
     *
     * @param {string} invoiceDate
     * @returns {HirePurchase}
     */
    setInvoiceDate(invoiceDate: string): HirePurchase;
    /**
     * Get Invoice Date
     *
     * @returns {string}
     */
    getInvoiceDate(): string;
    /**
     * Set Invoice Due Date
     *
     * @param {string} invoiceDueDate
     * @returns {HirePurchase}
     */
    setInvoiceDueDate(invoiceDueDate: string): HirePurchase;
    /**
     * Get Invoice Due Date
     *
     * @returns {string}
     */
    getInvoiceDueDate(): string;
    /**
     * Set Number of Rate
     *
     * @param {string} numberOfRates
     * @returns {HirePurchase}
     */
    setNumberOfRates(numberOfRates: number): HirePurchase;
    /**
     * Get Number of Rate
     *
     * @returns {string}
     */
    getNumberOfRates(): number;
    /**
     * Set Day of purchase
     *
     * @param {string} dayOfPurchase
     * @returns {HirePurchase}
     */
    setDayOfPurchase(dayOfPurchase: string): HirePurchase;
    /**
     * Get Day of Purchase
     *
     * @returns {string}
     */
    getDayOfPurchase(): string;
    /**
     * Set Order Date
     *
     * @param {string} orderDate
     * @returns {HirePurchase}
     */
    setOrderDate(orderDate: string): HirePurchase;
    /**
     * Get Order Date
     *
     * @returns {string}
     */
    getOrderDate(): string;
    /**
     * Set Total Amount
     *
     * @param {number} totalPurchaseAmount
     * @returns {HirePurchase}
     */
    setTotalPurchaseAmount(totalPurchaseAmount: number): HirePurchase;
    /**
     * Get Total Amount
     *
     * @returns {number}
     */
    getTotalPurchaseAmount(): number;
    /**
     * Set Interest Amount
     *
     * @param {number} totalInterestAmount
     * @returns {HirePurchase}
     */
    setTotalInterestAmount(totalInterestAmount: number): HirePurchase;
    /**
     * Get Interest Amount
     *
     * @returns {number}
     */
    getTotalInterestAmount(): number;
    /**
     * Set Total Amount
     *
     * @param {number} totalAmount
     * @returns {HirePurchase}
     */
    setTotalAmount(totalAmount: number): HirePurchase;
    /**
     * Get Total Amount
     *
     * @returns {number}
     */
    getTotalAmount(): number;
    /**
     * Set Total Amount
     *
     * @param {number} totalAmount
     * @returns {HirePurchase}
     */
    setEffectiveInterestRate(effectiveInterestRate: number): HirePurchase;
    /**
     * Get Total Amount
     *
     * @returns {number}
     */
    getEffectiveInterestRate(): number;
    /**
     * Set Nominal Interest Rate
     *
     * @param {number} nominalInterestRate
     * @returns {HirePurchase}
     */
    setNominalInterestRate(nominalInterestRate: number): HirePurchase;
    /**
     * Get Nominal Interest Rate
     *
     * @returns {number}
     */
    getNominalInterestRate(): number;
    /**
     * Set Fee First Rate
     *
     * @param {number} feeFirstRate
     * @returns {HirePurchase}
     */
    setFeeFirstRate(feeFirstRate: number): HirePurchase;
    /**
     * Get Nominal Interest Rate
     *
     * @returns {number}
     */
    getFeeFirstRate(): number;
    /**
     * Set Fee Per Rate
     *
     * @param {number} feePerRate
     * @returns {HirePurchase}
     */
    setFeePerRate(feePerRate: number): HirePurchase;
    /**
     * Get Nominal Interest Rate
     *
     * @returns {number}
     */
    getFeePerRate(): number;
    /**
     * Set Monthly Rate
     *
     * @param {number} monthlyRate
     * @returns {HirePurchase}
     */
    setMonthlyRate(monthlyRate: number): HirePurchase;
    /**
     * Get Monthly Rate
     *
     * @returns {number}
     */
    getMonthlyRate(): number;
    /**
     * Set Last Rate
     *
     * @param {number} lastRate
     * @returns {HirePurchase}
     */
    setLastRate(lastRate: number): HirePurchase;
    /**
     * Get Monthly Rate
     *
     * @returns {number}
     */
    getLastRate(): number;
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
    getPayload(): {
        iban: string;
        bic: string;
        accountHolder: string;
        invoiceDate: string;
        invoiceDueDate: string;
        numberOfRates: number;
        dayOfPurchase: string;
        totalPurchaseAmount: number;
        totalInterestAmount: number;
        totalAmount: number;
        effectiveInterestRate: number;
        nominalInterestRate: number;
        feeFirstRate: number;
        feePerRate: number;
        monthlyRate: number;
        lastRate: number;
    };
}
export declare type updateHirePurchaseObject = {
    iban?: string;
    bic?: string;
    accountHolder?: string;
    invoiceDate?: string;
    invoiceDueDate?: string;
};
