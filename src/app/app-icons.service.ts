import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class AppIconsService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon('online', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icon-online.svg'));
    this.iconRegistry.addSvgIcon('money', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icon-money.svg'));
    this.iconRegistry.addSvgIcon('users', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icon-users.svg'));
    this.iconRegistry.addSvgIcon('cart', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icon-cart.svg'));
  }
}

