import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  /**
   *
   * filter array
   * @template T
   * @param {Array<T>} value
   * @param {string} field
   * @param {string} args
   * @returns {Array<T>}
   * @memberof FilterPipe
   */
  transform<T>(value: Array<T>, field: string, args: string): Array<T> {
    return value.filter(xx => xx[field].toLowerCase().indexOf(args.toLowerCase()) >= -1 );
  }

}
