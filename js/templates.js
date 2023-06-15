


// Para los nombres de las const que contienen los templates
// usar siempre camelCase

// home
const home = `<h2><u>Routing nativo Web Components</u></h2>`;

// about
const about = `

  
  <h2><u>Router en JavaScript sin frameworks</u></h2>
  <p>
    Esta es una implementación simple de un router usando <a href="https://developer.mozilla.org/es/docs/Web/API/Web_components" target="_blank">Web Components</a>.
    Su funcionalidad es más limitada que la de los routers usados
    en los frameworks de Frontend como Vue.js o React.
    Por ejemplo, al cliquear en el botón de refresh sobre esta ruta la aplicación se reinicia en la ruta inicial, no en la ruta '/about'.
    Esto es porque el servidor (por ejemplo, Live Server) no tiene nada para servir en '/about' ya que la ruta fue generada del lado del cliente (Client-Side Rendering) usando JavaScript.
    Sin este redireccionamiento a la ruta principal el browser daría un error 404 (Not Found).
    
  </p>
`;

// howTo
const howTo = `
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

`;

// test
const testRouterLink = '<h2><u>Ruta de prueba</u></h2>';



