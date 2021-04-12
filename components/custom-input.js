import { Bindable } from 'https://cdn.jsdelivr.net/npm/aurelia/dist/native-modules/index.js';

export class CustomInput {
  static name = 'custom-input';
  value = 'input value';
}

Bindable.for(CustomInput).add({ property: 'value' });