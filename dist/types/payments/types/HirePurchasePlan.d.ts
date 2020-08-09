import AbstractPaymentType from './AbstractPaymentType';
import PaymentType from './PaymentType';
export default class HirePurchasePlan extends AbstractPaymentType implements PaymentType {
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
     * Set Number of Rate
     *
     * @param {string} numberOfRates
     * @returns {HirePurchase}
     */
    setNumberOfRates(numberOfRates: number): HirePurchasePlan;
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
    setDayOfPurchase(dayOfPurchase: string): HirePurchasePlan;
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
    setOrderDate(orderDate: string): HirePurchasePlan;
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
    setTotalPurchaseAmount(totalPurchaseAmount: number): HirePurchasePlan;
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
    setTotalInterestAmount(totalInterestAmount: number): HirePurchasePlan;
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
    setTotalAmount(totalAmount: number): HirePurchasePlan;
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
    setEffectiveInterestRate(effectiveInterestRate: number): HirePurchasePlan;
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
    setNominalInterestRate(nominalInterestRate: number): HirePurchasePlan;
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
    setFeeFirstRate(feeFirstRate: number): HirePurchasePlan;
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
    setFeePerRate(feePerRate: number): HirePurchasePlan;
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
    setMonthlyRate(monthlyRate: number): HirePurchasePlan;
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
    setLastRate(lastRate: number): HirePurchasePlan;
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
    getPayload(): {};
}
