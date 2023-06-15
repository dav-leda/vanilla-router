

class RouterView extends HTMLElement {

  constructor() {
    super()
    // Al inicio renderizar el template de la ruta home
    this.innerHTML = home
  }
}

customElements.define('router-view', RouterView)