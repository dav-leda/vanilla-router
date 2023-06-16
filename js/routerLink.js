

class RouterLink extends HTMLElement {
  
  constructor() {
    super()
        
    this.templates = {
      home, 
      about, 
      howTo, 
      testRouterLink
    }

    this.style.cursor = 'pointer'

    this.allElements = document.querySelectorAll('router-link')

    // Al inicio el primer elemento router-link debe ser resaltado con CSS:
    this.highlightLink(this.allElements[0])

    // Crear el evento de click sobre el elemento router-link
    this.addEventListener('click', this.clickEvent)

    // Renderizar la nueva vista usando los botones de navegacion del browser
    window.onpopstate = () => this.renderContent(this.pathName)

    // Si la app se reinicia en un path que no es home, cambiar el pathName a home
    // De lo contrario renderiza el componente home
    // pero el pathName sigue siendo el anterior (por ejemplo, /about)
    this.pathName != '/' && window.history.pushState({}, '', '/')
  }
  
  clickEvent() {
    // Agregar la ruta al historial de navegacion del browser
    // pushState toma 3 params: un objeto con data sobre la ruta
    // un param no utilizado (empty string), y la nueva URL
    // No es necesario que sea una URL absoluta
    window.history.pushState({}, '', this.link)


    // Renderizar el template en la ruta clickeada
    this.renderContent(this.link)

    // Resaltar el link activo con CSS
    this.highlightLink(this)
  }
  
  renderContent(path) {
    
    // Convertir el path de kebab-case a camelCase
    // Si el path es '/' convertirlo a 'home'
    let template = this.kebabToCamel(path.replace('/', '') || 'home')

    window.scroll(0, 0)
    // Renderizar la vista dentro del elemento <router-view/>
    // Para poder acceder a los templates con window[path]
    // estos deben ser declarados con var, no con const
    // Para evitar el uso de var pueden declararse dentro del objeto this.templates en el constructor
    document.querySelector('router-view').innerHTML = this.templates[template]
    
    // Resaltar la ruta seleccionada con CSS
    // Para que esto funcione con los botones del browser
    // el elemento debe ser identificado por el pathname, no por el link en el atributo 'to'
    this.highlightLink(this.element)
  }

  highlightLink(element) {
    // Quitar el resaltado en todos los links
    this.allElements.forEach(el => {
      el.style.textDecoration = 'none'
      el.style.color = 'darkslategrey'
    })

    // Resaltar el link activo con CSS
    element.style.textDecoration = 'underline'
    element.style.color = 'black'
  }

  kebabToCamel(path) {
    return path.replace(/-([a-z])/g, (match, char) => char.toUpperCase())
  }

  get link() {
    return this.getAttribute('to')
  }

  get pathName() {
    return window.location.pathname
  }

  get element() {
    // Obtener el elemento seleccionado en base al pathname
    return document.querySelector(`router-link[to='${window.location.pathname}']`)
  }
}

customElements.define('router-link', RouterLink)