import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from './customer.service';
import { Customer } from './customer.model';
import { Observable, of } from 'rxjs';
import { CustomerRoutingModule } from './customer-routing.module';

@Injectable()
export class CustomerMockService extends CustomerService {
  customers: Customer[] = [];
  lastCustomerId: number;

  constructor(public http: HttpClient) {
    super(http);
    console.warn('You are in MockService not suitable for production');

    const localCustomers = localStorage.getItem('customers');
    if (localCustomers) {
      this.customers = JSON.parse(localCustomers);
    } else {
      this.customers.push({
        customerId: 1,
        firstName: 'Tory',
        lastName: 'Amos',
        phoneNumber: '314-555-9873',
        emailAddress: 'Tory@example.com',
        statusCode: 'Prospect',
        preferredContactMethod: 'email',
        lastContactDate: new Date().toISOString()
      });
    }
    this.lastCustomerId = Math.max(...this.customers.map(x => x.customerId));
  }
  get(customerId: number) {
    const item = this.customers.find(x =>
      x.customerId === customerId);
    return of(item);
  }
  search(term: string): Observable<Customer[]> {
    return of(this.customers);
  }
  save(customer: Customer): Observable<Customer> {
    customer.customerId = ++this.lastCustomerId;
    this.customers.push(customer);
    return of(customer);
  }
}
