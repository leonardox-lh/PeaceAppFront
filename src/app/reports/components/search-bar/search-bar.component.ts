import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchTerm: string = '';
  searchPlace: string = '';
  items: string[] = ['Angular', 'React', 'Vue', 'Svelte'];
  filteredItems: string[] = [];

  ngOnInit() {
    this.filteredItems = this.items;
  }

  search() {
    this.filteredItems = this.items.filter(item =>
      item.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  clearSearch() {
    this.searchTerm = '';
    this.filteredItems = this.items;
  }

  openDialog(item: string) {
    alert(`You selected: ${item}`);
  }
}
