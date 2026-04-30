import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {

    console.log(' Pure Pipe Executed');

    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item =>
      item.name.toLowerCase().includes(searchText)
    );
  }
}