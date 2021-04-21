export class CustomInput {
  static get name() { return 'custom-input' };
  static get bindables() { return ['value'] };
  value = 'input value';
}