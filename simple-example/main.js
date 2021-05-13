customElements.define('my-paragraph',
  class extends HTMLElement {
    constructor() {
      super();
      // Create a shadow root
      this.attachShadow({mode: 'open'})

      //const template = document.getElementById('my-paragraph');
      const paragraph = document.createElement('p');
      ['Hello', 'World'].map(str => {
        paragraph.appendChild(document.createTextNode(str))
      })
      // Create some CSS to apply to the shadow dom
      const style = document.createElement('style');
      style.textContent = `
          p {
            color: white;
            background-color: #666;
            padding: 5px;
          }
        `;

      // attach the created elements to the shadow DOM
      this.shadowRoot.append(paragraph, style);
    }
  }
);
