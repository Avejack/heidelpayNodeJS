import PaymentService from './PaymentService';
import Cancel, { cancelAuthorizeObject } from '../payments/business/Cancel';
declare const _default: (args: cancelAuthorizeObject, paymentService: PaymentService) => Promise<Cancel>;
export default _default;
