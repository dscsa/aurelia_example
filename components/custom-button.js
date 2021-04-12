import { Bindable } from 'https://cdn.jsdelivr.net/npm/aurelia/dist/native-modules/index.js';

export class CustomButton {
  static name = 'custom-button';
  text = 'default button text';
  onClick = () => null;
}

Bindable.for(CustomButton).add({ property: 'text' }).add({ property: 'onClick' });