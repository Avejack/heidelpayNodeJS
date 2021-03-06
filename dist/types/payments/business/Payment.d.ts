import AbstractPayment from './AbstractPayment';
import Heidelpay from '../../Heidelpay';
import Resources from './Resources';
import Authorization from './Authorization';
import Charge from './Charge';
import Cancel from './Cancel';
export default class Payment extends AbstractPayment {
    private resources;
    private authorization;
    private chargeList;
    private cancelList;
    constructor(heidelpay: Heidelpay);
    /**
     * Get resources
     *
     * @returns {Resources}
     */
    getResources(): Resources;
    /**
     * Set resources
     *
     * @param {*} resources
     */
    setResources(resources: any): void;
    /**
     * Set authorize transaction
     *
     * @param {Authorization} authorization
     */
    setAuthorization(authorization: Authorization): void;
    /**
     * Get authorize transaction
     *
     * @returns {Authorization}
     */
    getAuthorization(): Authorization;
    /**
     * Set list charge transactions
     *
     * @param {Array<Charge>} chargeList
     */
    setChargeList(chargeList: Array<Charge>): void;
    /**
     * Get list charge transactions
     *
     * @returns {Array<Charge>}
     */
    getChargeList(): Array<Charge>;
    /**
     * Get charge transaction
     *
     * @param {string} chargeId
     * @returns {Charge}
     */
    getCharge(chargeId: string): Charge;
    /**
     * Set list cancel transactions
     *
     * @param {Array<Cancel>} chargeList
     */
    setCancelList(cancelList: Array<Cancel>): void;
    /**
     * Get list cancel transactions
     *
     * @returns {Array<Cancel>}
     */
    getCancelList(): Array<Cancel>;
    /**
     * Get cancel transaction
     *
     * @param {string} cancelId
     * @returns {Cancel}
     */
    getCancel(cancelId: string, refundId?: string): Cancel;
}
