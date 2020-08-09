import PaymentService from './PaymentService';
import Charge, { chargeObject } from '../payments/business/Charge';
declare const _default: (args: chargeObject, paymentService: PaymentService) => Promise<Charge>;
export default _default;
