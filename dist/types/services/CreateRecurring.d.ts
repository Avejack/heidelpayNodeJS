import PaymentService from './PaymentService';
import Recurring, { recurringObject } from '../payments/business/Recurring';
declare const _default: (typeId: string, args: recurringObject, paymentService: PaymentService) => Promise<Recurring>;
export default _default;
