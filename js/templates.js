


// Para los nombres de las const que contienen los templates
// usar siempre camelCase

// home
const home = `
  <section>
  <h2><u>Routing nativo usando Web Components</u></h2>
  <p>
    Esta aplicación utiliza  <a href="https://developer.mozilla.org/es/docs/Web/API/Web_components" target="_blank">Web Components</a>
    para generar un ruteo de tipo SPA (Single Page App) en forma nativa, es decir, sin frameworks.
    <br><br>
    El código HTML resultante es muy similar al utilizado por
    <a href="https://router.vuejs.org/guide/#html" target="_blank">Vue Router</a>:
    
    <br><br>

    <img src="https://dav-leda.github.io/api/images/web-components-routing.png" alt="web components" width="500"/>
  </p>
  </section>
`;

// about
const about = `

  <section>
  <h2><u>Router en JavaScript sin frameworks</u></h2>
  <p>
    Esta es una implementación simple de un router usando 
    <a href="https://developer.mozilla.org/es/docs/Web/API/Web_components" target="_blank">Web Components</a>.
    Su funcionalidad es más limitada que la de los routers usados
    en los frameworks de Frontend como Vue.js o React.
    Por ejemplo, al cliquear en el botón de refresh sobre esta ruta
    se produce un error 404 (Not Found).
    <br>
    Esto es porque el servidor no tiene nada para servir en <code>/about</code> 
    ya que la ruta fue generada del lado del cliente (Client-Side Rendering) usando JavaScript.
    
  </p>
  </section>
`;

// howTo
const howTo = `

  <section>
  <h2><u>Cómo utilizar el Router:</u></h2>
  <p>
    La aplicación utiliza Web Components para generar el ruteo.
    <br><br>
    En <code>index.html</code> dentro del componente <code>router-link</code> debe definirse el atributo <code>to="/nombre-de-la-ruta"</code>
    <br><br>
    Luego, dentro del archivo <code>templates.js</code> deben declararse los distintos templates que se van a usar. 
    El nombre del template debe coincidir con el nombre de la ruta, usando <code>kebab-case</code> para las rutas en HTML y <code>camelCase</code> para los templates en JavaScript.
    <br><br>
    Y luego, en el archivo <code>routerLink.js</code> al comienzo del constructor, declarar todos los templates dentro del objeto <code>this.templates</code>
    <br><br>
    En el caso de la ruta inicial <code>'/'</code> el template debe ser llamado <code>home</code>.
    <br><br>
    Para evitar que el browser arroje un error 404 (Not Found) cuando Live Server se reinicia en una ruta distinta a home
    debe modificarse este settings de Live Server para que siempre reinicie en home:
    <code>"liveServer.settings.file": "index.html"</code>
  </p>
  </section>
`;

// test
const testRouterLink = '<h2><u>Ruta de prueba</u></h2>';



