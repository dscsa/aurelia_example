export class CustomButton {
  static get name() { return 'custom-button' };
  static get bindables() { return ['text'] };
  text = 'default button text';
}
