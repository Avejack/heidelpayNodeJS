import * as apiURL from '../configs/ApiUrls'
import * as Utils from '../utils/Utils'
import PaymentService from './PaymentService'
import Charge from '../payments/business/Charge'
import { chargeAuthorizeObject } from '../payments/business/Authorization'
import FetchPayment from './FetchPayment'

export default (args: chargeAuthorizeObject, paymentService: PaymentService): Promise<Charge> => {
  return new Promise(async resolve => {
    let payload: any = {}

    if (args.amount) {
      payload.amount = args.amount
    }

    // Call api end point to get response
    const response: any = await paymentService.getRequestAdapter().post(
      Utils.replaceUrl(apiURL.URL_PAYMENT_CHARGE_AUTHORIZE, {
        paymentId: args.paymentId
      }),
      payload,
      paymentService.getHeidelpay().getPrivateKey()
    )

    // New Charge with Hedeipay instance
    let charge = new Charge(paymentService.getHeidelpay())

    // Set charge Id
    charge.setId(response.id)

    // Set resources
    charge.setResources(response.resources)

    // Set payment object
    charge.setPayment(await FetchPayment(response.resources.paymentId, paymentService))

    // Resolve final result
    resolve(charge)
  })
}