import PaymentService from './PaymentService';
import Webhook, { webhookObject } from '../payments/business/Webhook';
declare const _default: (args: webhookObject, paymentService: PaymentService) => Promise<Webhook>;
export default _default;
