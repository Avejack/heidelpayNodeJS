import PaymentType from '../payments/types/PaymentType';
import PaymentService from './PaymentService';
import AbstractPaymentType from '../payments/types/AbstractPaymentType';
declare const _default: (paymentType: AbstractPaymentType, paymentService: PaymentService) => Promise<PaymentType>;
export default _default;
