import PaymentService from './PaymentService';
import Charge from '../payments/business/Charge';
import { chargeAuthorizeObject } from '../payments/business/Authorization';
declare const _default: (args: chargeAuthorizeObject, paymentService: PaymentService) => Promise<Charge>;
export default _default;
