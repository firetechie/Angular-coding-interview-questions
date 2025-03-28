import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-typeahead-autocomplete',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './typeahead-autocomplete.component.html',
  styleUrl: './typeahead-autocomplete.component.css'
})
export class TypeaheadAutocompleteComponent {

  searchTerm: string = ''; // User input
  filteredItems: string[] = []; // Filtered suggestions
  allItems: string[] = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Grapes', 'Watermelon']; // Sample data
  searchSubject = new Subject<string>(); // Subject for debouncing

  constructor() {
    // Apply debounce time to reduce search frequency
    this.searchSubject.pipe(debounceTime(300)).subscribe((search) => {
      this.filterList(search);
    });
  }

  // Trigger search on keyup
  onSearchChange(searchValue: string) {
    this.searchTerm = searchValue;
    this.searchSubject.next(searchValue); // Debounce input
  }

  // Filter the list based on input
  filterList(search: string) {
    if (!search) {
      this.filteredItems = [];
      return;
    }
    this.filteredItems = this.allItems.filter(item =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Set selected item and clear suggestions
  selectItem(item: string) {
    this.searchTerm = item;
    this.filteredItems = [];
  }

}
