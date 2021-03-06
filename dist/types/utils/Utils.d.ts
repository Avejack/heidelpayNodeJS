import AbstractPaymentType from '../payments/types/AbstractPaymentType';
/**
 * Replace URL with parameters: {paymentId} => s-pay-1781
 *
 * @param {string} url
 * @param {*} args
 * @returns
 */
export declare const replaceUrl: (url: string, args: any) => string;
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
export declare const getRefundIdOfCancel: (url: string) => string;
/**
 * Get payment type from typeId
 * Ex:
 * crd => Card()
 * gro => GrioPay()
 * @param {string} typeId
 * @returns {AbstractPaymentType}
 */
export declare const getPaymentTypeFromTypeId: (typeId: string) => AbstractPaymentType;
/**
 * Map response with propery payment Type
 *
 * @param {*} response
 * @returns {AbstractPaymentType}
 */
export declare const mapResponsePaymentType: (response: any) => AbstractPaymentType;
