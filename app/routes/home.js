import { LocalComponent } from "../components/local/local-component.js";

export class Home {
  static name = 'home';
  static path = '';
  static title = 'Home';
  static dependencies = [LocalComponent];

  homeButtonClick = () => alert('home button click');
}