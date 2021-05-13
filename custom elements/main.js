customElements.define('my-paragraph',
  class extends HTMLElement {
    constructor() {
      super();
      // Create a shadow root
      this.attachShadow({mode: 'open'});

      const paragraph = document.createElement('p');

      ['Hello', 'World'].map(str => {
        paragraph.appendChild(document.createTextNode(str))
      });


      // Apply external styles to the shadow dom
      const linkElem = document.createElement('link');
      linkElem.setAttribute('rel', 'stylesheet');
      linkElem.setAttribute('href', 'style.css')

      // attach the created elements to the shadow DOM
      this.shadowRoot.append(linkElem, paragraph);
    }
  }
);