import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
  standalone: true
})
export class JoinPipe implements PipeTransform {

  transform<T extends unknown[]>(value: T, separator = ', '): string {
    return value.join(separator);
  }

}
