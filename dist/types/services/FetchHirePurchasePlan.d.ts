import PaymentService from './PaymentService';
import HirePurchasePlan from '../payments/types/HirePurchasePlan';
declare const _default: (amount: string, currency: string, effectiveInterestRate: string, orderDate: string, paymentService: PaymentService) => Promise<HirePurchasePlan[]>;
export default _default;
