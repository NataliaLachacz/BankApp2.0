import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amountColor',
})
export class AmountColorPipe implements PipeTransform {
  transform(amount: number) {
    const color = amount > 0 ? 'text-success' : 'text-danger';
    return color;
  }
}
