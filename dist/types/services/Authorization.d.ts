import PaymentService from './PaymentService';
import Authorization, { authorizeObject } from '../payments/business/Authorization';
declare const _default: (args: authorizeObject, paymentService: PaymentService) => Promise<Authorization>;
export default _default;
