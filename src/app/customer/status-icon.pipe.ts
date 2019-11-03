
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusIcon'
})
export class StatusIconPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // return 'cart';

    if (value === 'Prospect') {
      return 'online';
    }
    if (value === 'Purchased') {
      return 'money';
    }
    return 'users';
  }

}
