import './kodepos-item.js';

class kodeposList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set kodepos(kodeposValue) {
    this._kodepos = kodeposValue;
    this.render();
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0, 0, 0, 0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder"> ${message} </h2>`;
  }

  render() {
    this.shadowDOM.innerHTML = ``;
    this._kodepos.forEach((kodepos) => {
      const kodeposItemElement = document.createElement('kodepos-item');
      kodeposItemElement.kodepos = kodepos;

      this.shadowDOM.appendChild(kodeposItemElement);
    });
  }
}

customElements.define('kodepos-list', kodeposList);
