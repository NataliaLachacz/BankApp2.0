import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amountColor',
})
export class AmountColorPipe implements PipeTransform {
  transform(transferType: string) {
    const color = transferType==='income' ? 'text-success' : 'text-danger';
    return color;
  }
}
