export class CustomButton {
  static name = 'custom-button';
  static bindables = ['text', 'onClick'];
  text = 'default button text';
  onClick = () => null;
}
