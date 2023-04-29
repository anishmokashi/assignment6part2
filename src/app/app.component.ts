import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Inline styling of html and css</h1>`,
  styles: [`
  h1 { font-weight: normal;color:blue }`]
})
export class AppComponent {
  title = 'Assignment6';
}
//Remember to edit templateurl word with template and stylesurl word with styles