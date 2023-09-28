class KodeposItem extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({ mode: 'open' });
    }
  
    set kodepos(kodeposValue) {
      this._kodepos = kodeposValue;
      this.render();
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
  
          :host {
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
          }
  
          .kodepos-info {
            padding: 24px;
          }
  
          .kodepos-info > div {
            margin-top: 10px;
          }
  
          .kodepos-info > div strong {
            font-weight: bold;
          }
        </style>
  
        <div class="kodepos-info">
          <div>
            <strong>Kelurahan:</strong> ${this._kodepos.kelurahan}
          </div>
          <div>
            <strong>Kecamatan:</strong> ${this._kodepos.kecamatan}
          </div>
          <div>
            <strong>Jenis:</strong> ${this._kodepos.jenis}
          </div>
          <div>
            <strong>Kabupaten:</strong> ${this._kodepos.kabupaten}
          </div>
          <div>
            <strong>Provinsi:</strong> ${this._kodepos.provinsi}
          </div>
        </div>
      `;
    }
  }
  
  customElements.define('kodepos-item', KodeposItem);
  