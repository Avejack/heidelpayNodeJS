import PaymentService from './PaymentService';
import Webhook from '../payments/business/Webhook';
declare const _default: (paymentService: PaymentService, webhookId?: string | undefined) => Promise<Webhook>;
export default _default;
