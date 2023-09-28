class appBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        }
        </style>

        <h2>Kode Pos Indonesia</h2>
        `;
  }
}

customElements.define('app-bar', appBar);
