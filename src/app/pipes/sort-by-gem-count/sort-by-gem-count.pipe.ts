import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../../interfaces/player';

@Pipe({
  name: 'sortByGemCount',
  standalone: true
})
export class SortByGemCountPipe implements PipeTransform {

  transform(value: Player[]): Player[] {
    return value.sort((a, b) => b.gems.length - a.gems.length);
  }

}
