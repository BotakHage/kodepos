class searchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
          <style>
          .search-container > input {
            font-size: large;
            padding: 15px;
            border: 1px solid #f4d06f;
            border-radius: 5px;
            width: 200px;
          }
          
          .search-container > button {
            background-color: #ff8c42;
            color: #fff;
            border: none;
            padding: 15px 25px;
            border-radius: 5px;
            cursor: pointer;
            margin-left: 10px;
            font-size: small;
          }
          
          .search-container > button:hover {
            background-color: #f9c784;
          }

          @media screen and (min-width: 768px) {
            .search-container > input {
              width: 300px;
            }
          
            .search-container > button {
              font-size: medium;
            }
          }
          
          @media screen and (min-width: 1024px) {
            .search-container > input {
              width: 500px;
            }
          
            .search-container > button {
              font-size: large;
            }
          }
          </style>
  
          <div class="search-container">
            <input placeholder="masukan kode pos..." id="searchElement" type="search" />
            <button id="searchButtonElement" type="submit">Cari</button>
          </div>
          `;

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', searchBar);
