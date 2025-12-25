import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByField',
  standalone: false,
  pure: false
})
export class FilterByFieldPipe implements PipeTransform {

  transform(items: any[], field: string, searchText: string): any[] {
    if (!items || !field || !searchText) {
      return items;
    }

    return items.filter(item =>
      item[field]
        .toString()
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
  }
}
