import PaymentService from './PaymentService';
import Payout, { payoutObject } from '../payments/business/Payout';
declare const _default: (args: payoutObject, paymentService: PaymentService) => Promise<Payout>;
export default _default;
