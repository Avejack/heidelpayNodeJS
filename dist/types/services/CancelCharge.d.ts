import PaymentService from './PaymentService';
import Cancel, { cancelChargeObject } from '../payments/business/Cancel';
declare const _default: (args: cancelChargeObject, paymentService: PaymentService) => Promise<Cancel>;
export default _default;
