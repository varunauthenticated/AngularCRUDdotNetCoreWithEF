import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail;
  readonly uri = 'https://localhost:44394/api';
  list: PaymentDetail[];

  constructor(private http: HttpClient) { }

  postPaymentDetail(formData: PaymentDetail) {
    return this.http.post(this.uri + '/PaymentDetail', this.formData);
  }
  putPaymentDetail(formData: PaymentDetail) {
    return this.http.put(this.uri + '/PaymentDetail/' + this.formData.PMId, this.formData);
  }
  deletePaymentDetail(id) {
    return this.http.delete(this.uri + '/PaymentDetail/' + id);
  }

  refreshList() {
    this.http.get(this.uri + '/PaymentDetail').toPromise().then(
      res => this.list = res as PaymentDetail[]
    );
    console.log('service list::::::', JSON.stringify(this.list));
  }
}
