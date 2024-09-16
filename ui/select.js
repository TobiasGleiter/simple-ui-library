class SelectBase extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute('name');
    const placeholder = this.getAttribute('placeholder');

    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="ui/select.css" />

    <select name="${name}" class="select">
        <option value="">${placeholder}</option>
    </select>
    `;

    const selectElement = this.shadowRoot.querySelector('select');

    Array.from(this.children).forEach((option) => {
      if (option.tagName.toLowerCase() === 'option') {
        selectElement.appendChild(option.cloneNode(true));
      }
    });
  }
}

customElements.define('select--base', SelectBase);
