import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
})
export class App {
  // 1. Radiobutton
  selectedRadio: string = 'opt1';

  // 2. Checkbox
  isChecked: boolean = false;

  // 3. Text input
  textValue: string = '';

  // 4. Tabs
  activeTab: number = 1;

  // 5. Button
  buttonClickCount: number = 0;
  onButtonClick(): void {
    this.buttonClickCount++;
  }

  // 6. Text label
  labelInfo: string = 'Text Label Content';

  // 7. Link
  linkUrl: string = 'https://angular.dev';

  // 9. Dropdown list
  dropdownOptions: string[] = ['Option 1', 'Option 2', 'Option 3'];
  selectedDropdown: string = 'Option 1';

  // 10. Data grid
  gridData = [
    { id: 1, name: 'Item A', role: 'User' },
    { id: 2, name: 'Item B', role: 'Admin' },
    { id: 3, name: 'Item C', role: 'Guest' },
  ];
}
