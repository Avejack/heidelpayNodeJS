import PaymentService from './PaymentService';
import Shipment, { shipmentObject } from '../payments/business/Shipment';
declare const _default: (paymentId: string, args: shipmentObject, paymentService: PaymentService) => Promise<Shipment>;
export default _default;
