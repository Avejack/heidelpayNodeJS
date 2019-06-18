import * as apiURL from '../configs/ApiUrls'
import PaymentService from './PaymentService'
import Paypage from '../payments/paypage/Paypage'
import ResponseErrorsMapper from './mappers/ResponseErrorsMapper'
import Resources from '../payments/business/Resources';

export default (paypage: Paypage, type: string, paymentService: PaymentService): Promise<Paypage> => {
  return new Promise(async (resolve, reject) => {
    try {
      // Call api end point to get response
      const response: any = await paymentService
      .getRequestAdapter()
      .post(
        type === 'authorize' ? apiURL.URL_PAYPAGE_AUTHORIZE : apiURL.URL_PAYPAGE_CHARGE,
        paypage.getPayload(),
        paymentService.getHeidelpay().getPrivateKey()
      )

      // Handle errors response    
      if(response.errors) {
        return reject(ResponseErrorsMapper(response))
      }

      // Set Heidelpay instance
      paypage.setHeidelpay(paymentService.getHeidelpay())

      // Set Payment Id
      paypage.setId(response.id)

      // Set Redirect URL
      paypage.setRedirectUrl(response.redirectUrl)
      
      // Set action (AUTHORIZE|CHARGE)
      paypage.setAction(response.action)

      // Set resources
      paypage.setResources(response.resources)

      // Resolve final result
      resolve(paypage)
    } catch (error) {
      // Reject with error object
      return reject(error) 
    }
  })
}