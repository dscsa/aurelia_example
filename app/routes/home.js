import { LocalComponent } from "../components/local/local-component.js";

export class Home {
  static get name() { return 'home' };
  static get path() { return '' };
  static get title() { return 'Home' };
  static get dependencies() { return [LocalComponent] };

  homeButtonClick = () => { alert('home button click') };
}