// Import the LitElement base class and html helper function
import { LitElement, html, css } from "lit-element";

// Extend the LitElement base class
export default class MyElement extends LitElement {
  static get properties() {
    return {
      name: { type: String }
    };
  }

  constructor() {
    super();
    this.name = "World";
  }

  static get styles() {
    return css`
      .btn {
        font-size: 200%;
        margin-bottom: 55px;
      }
      .btn:hover {
        margin-top: 55px;
      }
    `;
  }

  render() {
    return html`
      <button class="btn">Click me!</button>
    `;
  }
}
