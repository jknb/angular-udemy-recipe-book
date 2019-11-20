import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  collapsed = true;
  @Output() headerItemSelected = new EventEmitter<string>();

  onSelect(choice: string) {
    this.headerItemSelected.emit(choice);
  }

}