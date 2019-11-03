import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customerId: number;
  customer: Customer;
  detailForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    this.createForm();
  }

  createForm() {
    this.detailForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: [''],
      emailAddress: ['', [Validators.required, Validators.email]],
      preferredContactMethod: ['emai']
    });
  }


  ngOnInit() {
    this.customerId = +this.route.snapshot.params.id;
    this.customerService.get(this.customerId)
      .subscribe(cust => {
        this.customer = cust;
        this.detailForm.patchValue(cust);
      });
  }

}
