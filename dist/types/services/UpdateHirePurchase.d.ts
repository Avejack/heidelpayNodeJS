import PaymentService from './PaymentService';
import HirePurchase, { updateHirePurchaseObject } from '../payments/types/HirePurchase';
declare const _default: (hirePurchaseId: string, args: updateHirePurchaseObject, paymentService: PaymentService) => Promise<HirePurchase>;
export default _default;
