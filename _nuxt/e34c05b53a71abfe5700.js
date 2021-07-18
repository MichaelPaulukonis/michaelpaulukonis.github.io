(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{209:function(t,n){const e={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"dynamicMarkdown"},[e("h2",[t._v("¿Por qué re-hice mi web con Nuxt?")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("h2",[t._v("¿De dónde saco el contenido si no tengo servidor?")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),e("h3",[t._v("Importación de los artículos en la página principal dependiendo del idioma")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),e("h3",[t._v("Generación de páginas dinámicas a partir de archivos Markdown")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),e("h2",[t._v("Hablemos de performance")]),t._v(" "),e("p",[t._v("¿Recuerdas que antes te he hablado que una de mis motivaciones para crear esta web era tener un blog que tuviera una buena performance?\nCon Nuxt lo he conseguido, y aún me queda bastante por optimizar.")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),e("p",[e("image-responsive",{attrs:{imageURL:"blog/vue-nuxt-blog/performance.jpg",width:"952",height:"509",alt:"performance"}})],1),t._v(" "),t._m(19),t._v(" "),e("h2",[t._v("Web en dos idiomas")]),t._v(" "),t._m(20),t._v(" "),e("h2",[t._v("Funcionalidades y mejoras que quiero añadir en el futuro")]),t._v(" "),t._m(21),t._v(" "),e("h2",[t._v("Cosas de la web que os contaré otro día")]),t._v(" "),e("ul",[t._m(22),t._v(" "),t._m(23),t._v(" "),e("li",[e("p",[t._v("El gran error que cometí en el camino: Vuex. "),e("nuxt-link",{attrs:{to:"/es/blog/vuex-que-es-cuando-utilizarlo"}},[t._v("Ya lo puedes leer aquí")]),t._v(".")],1)]),t._v(" "),t._m(24),t._v(" "),t._m(25)]),t._v(" "),t._m(26),t._v(" "),t._m(27)])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Aunque algunos ya me conoceis, soy "),n("a",{attrs:{href:"https://twitter.com/MarinaAisa"}},[this._v("Marina Aísa")]),this._v(", UX Engineer (diseño y front-end) y actualmente trabajo en "),n("a",{attrs:{href:"https://www.holaluz.com"}},[this._v("Holaluz")]),this._v(".")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("El pasado año, 2018, estuve muy enfocada en aprender más de JavaScript, la cual era una asignatura pendiente y a la vez aprendí una de sus librerías, "),n("a",{attrs:{href:"https://vuejs.org/"}},[this._v("Vue.js")]),this._v(". Al mismo tiempo, en Holaluz, empezamos a utilizar "),n("a",{attrs:{href:"https://nuxtjs.org/"}},[this._v("Nuxt.js")]),this._v(", un framework sobre VueJS para rehacer tanto las webs estáticas como las dinámicas (SPA) de la empresa en componentes y poder crear un sistema de diseño con ello.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Mi web anterior estaba hecha con "),n("a",{attrs:{href:"https://middlemanapp.com/"}},[this._v("Middleman")]),this._v(", un generador de páginas estáticas basado en Ruby, así que aproveché para rehacer mi web con Nuxt y Vue, con el fin de:")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",[e("li",[t._v("Aprender")]),t._v(" "),e("li",[t._v("Mejorar la performance")]),t._v(" "),e("li",[t._v("Añadir funcionalidades a la web como un blog y portfolio")]),t._v(" "),e("li",[t._v("Añadir dos idiomas, español e inglés, "),e("strong",[t._v("también en los posts del blog")]),t._v(" pero de forma independiente, ya que cuento con algunos posts que no estén traducidos en ambos idiomas.")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Lo que más me atrae de Nuxt es la filosofía "),n("em",[this._v("serverless")]),this._v(" (aunque Nuxt también puede ser SSR) y el prerendering estático que proporciona a aplicaciones SPA. Resumidamente, con ello se puede combinar lo mejor de una web estática: HTML compilado, lo que conlleva mejor SEO, y lo mejor de una "),n("em",[this._v("single page application")]),this._v(": Webpack, optimizaciones de caché, lazy-loading, funciones y datos asíncronos…")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Nuxt, al seguir la arquitectura "),n("a",{attrs:{href:"https://jamstack.org/"}},[this._v("JAMStack")]),this._v(", está construido para obtener contenido mediante APIs, por ello muchas personas utilizan headless CMSs como "),n("a",{attrs:{href:"https://www.contentful.com/"}},[this._v("Contentful")]),this._v(" o "),n("a",{attrs:{href:"https://prismic.io/"}},[this._v("Prismic")]),this._v(". Me parecían opciones interesantes en un principio pero me di cuenta que no era necesario para una web como la mía ya que los CMSs están orientados para ser utilizados por personas sin conocimientos técnicos, además de ser caros, guardar los assets en sus propios servidores y no ser la mejor opción si quería tener la mejor performance.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("Por ello, me decidí a utilizar un sistema de Markdowns que guardaría en Github y llamaría dinámicamente.")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("Mediante la función asíncrona "),e("code",{pre:!0},[t._v("asyncData")]),t._v(" que proporciona Nuxt solo en sus páginas (no en sus componentes) hago una importación de los Markdown que tengo guardados en la carpeta "),e("code",{pre:!0},[t._v("content")]),t._v(" del proyecto. Posteriormente los devuelvo en forma de promesa como un array de objetos. Como puedes ver a continuación, la importación depende de la constante "),e("code",{pre:!0},[t._v("blogs")]),t._v(" que será el array "),e("code",{pre:!0},[t._v("blogsEs")]),t._v(" o "),e("code",{pre:!0},[t._v("blogsEn")]),t._v(" dependiendo del idioma de la página.")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pre",{staticClass:"language-javascript"},[e("code",{staticClass:"language-javascript"},[e("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" blogsEn "),e("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),e("span",{staticClass:"token string"},[t._v("'~/contents/en/blogsEn.js'")]),t._v("\n"),e("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" blogsEs "),e("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),e("span",{staticClass:"token string"},[t._v("'~/contents/es/blogsEs.js'")]),t._v("\n\n"),e("span",{staticClass:"token keyword"},[t._v("async")]),t._v(" "),e("span",{staticClass:"token function"},[t._v("asyncData")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token parameter"},[e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("app"),e("span",{staticClass:"token punctuation"},[t._v("}")])]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n  "),e("span",{staticClass:"token keyword"},[t._v("const")]),t._v(" blogs "),e("span",{staticClass:"token operator"},[t._v("=")]),t._v(" app"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("i18n"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("locale "),e("span",{staticClass:"token operator"},[t._v("===")]),t._v(" "),e("span",{staticClass:"token string"},[t._v("'en'")]),t._v(" "),e("span",{staticClass:"token operator"},[t._v("?")]),t._v(" blogsEn "),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" blogsEs\n  \n  "),e("span",{staticClass:"token keyword"},[t._v("async")]),t._v(" "),e("span",{staticClass:"token keyword"},[t._v("function")]),t._v(" "),e("span",{staticClass:"token function"},[t._v("asyncImport")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token parameter"},[t._v("blogName")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n    "),e("span",{staticClass:"token keyword"},[t._v("const")]),t._v(" wholeMD "),e("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),e("span",{staticClass:"token keyword"},[t._v("await")]),t._v(" "),e("span",{staticClass:"token keyword"},[t._v("import")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token template-string"},[e("span",{staticClass:"token template-punctuation string"},[t._v("`")]),e("span",{staticClass:"token string"},[t._v("~/content/")]),e("span",{staticClass:"token interpolation"},[e("span",{staticClass:"token interpolation-punctuation punctuation"},[t._v("${")]),t._v("app"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("i18n"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("locale"),e("span",{staticClass:"token interpolation-punctuation punctuation"},[t._v("}")])]),e("span",{staticClass:"token string"},[t._v("/blog/")]),e("span",{staticClass:"token interpolation"},[e("span",{staticClass:"token interpolation-punctuation punctuation"},[t._v("${")]),t._v("blogName"),e("span",{staticClass:"token interpolation-punctuation punctuation"},[t._v("}")])]),e("span",{staticClass:"token string"},[t._v(".md")]),e("span",{staticClass:"token template-punctuation string"},[t._v("`")])]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n    "),e("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" wholeMD"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("attributes\n  "),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n\n  "),e("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" Promise"),e("span",{staticClass:"token punctuation"},[t._v(".")]),e("span",{staticClass:"token function"},[t._v("all")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("blogs"),e("span",{staticClass:"token punctuation"},[t._v(".")]),e("span",{staticClass:"token function"},[t._v("map")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token parameter"},[t._v("blog")]),t._v(" "),e("span",{staticClass:"token operator"},[t._v("=>")]),t._v(" "),e("span",{staticClass:"token function"},[t._v("asyncImport")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("blog"),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n  "),e("span",{staticClass:"token punctuation"},[t._v(".")]),e("span",{staticClass:"token function"},[t._v("then")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token parameter"},[t._v("res")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),e("span",{staticClass:"token operator"},[t._v("=>")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n    "),e("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n      blogs"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" res\n    "),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n  "),e("span",{staticClass:"token punctuation"},[t._v("}")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n"),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("La razón por la cual tengo los arrays de los nombres de los blogs importados desde fuera es porque quiero utilizarlos también para generar las páginas de forma estática a través del objeto "),n("a",{attrs:{href:"https://nuxtjs.org/api/configuration-generate/"}},[this._v("generate")]),this._v(" en la configuración de Nuxt, fichero "),n("code",{pre:!0},[this._v("nuxt.config.js")]),this._v(".")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pre",{staticClass:"language-javascript"},[e("code",{staticClass:"language-javascript"},[e("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" blogsEn "),e("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),e("span",{staticClass:"token string"},[t._v("'~/contents/en/blogsEn.js'")]),t._v("\n"),e("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" blogsEs "),e("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),e("span",{staticClass:"token string"},[t._v("'~/contents/es/blogsEs.js'")]),t._v("\n\ngenerate"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n  routes"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("[")]),t._v("\n    "),e("span",{staticClass:"token string"},[t._v("'/es'")]),e("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),e("span",{staticClass:"token string"},[t._v("'404'")]),t._v("\n  "),e("span",{staticClass:"token punctuation"},[t._v("]")]),t._v("\n  "),e("span",{staticClass:"token punctuation"},[t._v(".")]),e("span",{staticClass:"token function"},[t._v("concat")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("blogsEn"),e("span",{staticClass:"token punctuation"},[t._v(".")]),e("span",{staticClass:"token function"},[t._v("map")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token parameter"},[t._v("blog")]),t._v(" "),e("span",{staticClass:"token operator"},[t._v("=>")]),t._v(" "),e("span",{staticClass:"token template-string"},[e("span",{staticClass:"token template-punctuation string"},[t._v("`")]),e("span",{staticClass:"token string"},[t._v("/blog/")]),e("span",{staticClass:"token interpolation"},[e("span",{staticClass:"token interpolation-punctuation punctuation"},[t._v("${")]),t._v("blog"),e("span",{staticClass:"token interpolation-punctuation punctuation"},[t._v("}")])]),e("span",{staticClass:"token template-punctuation string"},[t._v("`")])]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n  "),e("span",{staticClass:"token punctuation"},[t._v(".")]),e("span",{staticClass:"token function"},[t._v("concat")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("blogsEs"),e("span",{staticClass:"token punctuation"},[t._v(".")]),e("span",{staticClass:"token function"},[t._v("map")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token parameter"},[t._v("blog")]),t._v(" "),e("span",{staticClass:"token operator"},[t._v("=>")]),t._v(" "),e("span",{staticClass:"token template-string"},[e("span",{staticClass:"token template-punctuation string"},[t._v("`")]),e("span",{staticClass:"token string"},[t._v("es/blog/")]),e("span",{staticClass:"token interpolation"},[e("span",{staticClass:"token interpolation-punctuation punctuation"},[t._v("${")]),t._v("blog"),e("span",{staticClass:"token interpolation-punctuation punctuation"},[t._v("}")])]),e("span",{staticClass:"token template-punctuation string"},[t._v("`")])]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n"),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Nuxt tiene una funcionalidad muy interesante y es la creación de "),n("a",{attrs:{href:"https://nuxtjs.org/guide/routing/#dynamic-routes"}},[this._v("rutas dinámicas")]),this._v(".")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("En la siguiente importación vuelvo a utilizar la función "),n("code",{pre:!0},[this._v("asyncData")]),this._v(" en vez de "),n("code",{pre:!0},[this._v("data")]),this._v(" como suele hacerse en Vue, para primero importar cada Markdown y después devolver un nuevo objeto con la información que quiero utilizar en el template de la página.\n"),n("strong",[this._v("En la importación juego con que la URL es igual al nombre de cada archivo markdown.")]),this._v("\nEn el caso de que el archivo md no exista simplemente irá a la página 404.")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pre",{staticClass:"language-javascript"},[e("code",{staticClass:"language-javascript"},[e("span",{staticClass:"token keyword"},[t._v("async")]),t._v(" "),e("span",{staticClass:"token function"},[t._v("asyncData")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token parameter"},[e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("params"),e("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" app"),e("span",{staticClass:"token punctuation"},[t._v("}")])]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n  "),e("span",{staticClass:"token keyword"},[t._v("const")]),t._v(" fileContent "),e("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),e("span",{staticClass:"token keyword"},[t._v("await")]),t._v(" "),e("span",{staticClass:"token keyword"},[t._v("import")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token template-string"},[e("span",{staticClass:"token template-punctuation string"},[t._v("`")]),e("span",{staticClass:"token string"},[t._v("~/contents/")]),e("span",{staticClass:"token interpolation"},[e("span",{staticClass:"token interpolation-punctuation punctuation"},[t._v("${")]),t._v("app"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("i18n"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("locale"),e("span",{staticClass:"token interpolation-punctuation punctuation"},[t._v("}")])]),e("span",{staticClass:"token string"},[t._v("/blog/")]),e("span",{staticClass:"token interpolation"},[e("span",{staticClass:"token interpolation-punctuation punctuation"},[t._v("${")]),t._v("params"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("slug"),e("span",{staticClass:"token interpolation-punctuation punctuation"},[t._v("}")])]),e("span",{staticClass:"token string"},[t._v(".md")]),e("span",{staticClass:"token template-punctuation string"},[t._v("`")])]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n  "),e("span",{staticClass:"token keyword"},[t._v("const")]),t._v(" attr "),e("span",{staticClass:"token operator"},[t._v("=")]),t._v(" fileContent"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("attributes\n  "),e("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n    colors"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" attr"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("colors"),e("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n    date"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" attr"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("date"),e("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n    description"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" attr"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("description"),e("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n    id"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" attr"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("id"),e("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n    name"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" params"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("slug"),e("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n    related"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" attr"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("related"),e("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n    renderFunc"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" fileContent"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("vue"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("render"),e("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n    staticRenderFuncs"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" fileContent"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("vue"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("staticRenderFns"),e("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n    title"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" attr"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("title"),e("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n    urlTranslation"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" attr"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("urlTranslation\n  "),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n"),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Si quisieramos crear un portfolio sería exactamente igual que el blog. Crearíamos dentro de "),n("code",{pre:!0},[this._v("contents")]),this._v(" una carpeta llamada "),n("code",{pre:!0},[this._v("portfolio")]),this._v(" y haríamos el mismo proceso que hemos hecho con "),n("code",{pre:!0},[this._v("blogs")]),this._v(".")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("El loader para archivos Markdown de Webpack que utilizo es: "),n("a",{attrs:{href:"https://www.npmjs.com/package/frontmatter-markdown-loader"}},[this._v("frontmatter-markdown-loader")]),this._v(" que me permite meter componentes de Vue dentro de markdown, así como extraer los atributos "),n("code",{pre:!0},[this._v("frontmatter")]),this._v(" como hacen generadores estáticos como Jekyll. Y para que el código se vea así de bonito le aplico: "),n("a",{attrs:{href:"https://highlightjs.org/"}},[this._v("HighlightJS")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Si has llegado hasta aquí seguramente habrás pensado: "),n("em",[this._v("“Vaya percal ha montado Marina, si total podía haber hecho un blog en "),n("a",{attrs:{href:"https://medium.com/"}},[this._v("Medium")]),this._v(" y ya está”")]),this._v(" y justo ahora vas a entender por qué no me gusta Medium.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Además de que escribiendo en Medium "),n("strong",[this._v("no tienes el control sobre tu blog")]),this._v(" como CSS, SEO, añadir funcionalidades, el contenido "),n("strong",[this._v("lo cedes a Medium")]),this._v(", tiene limitación de artículos leídos… encima, "),n("strong",[this._v("tienen una performance que deja mucho que desear.")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Gracias a la herramienta "),n("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/audit/"}},[this._v("Lighthouse")]),this._v(" de Google podemos analizar y comparar Medium con mi web.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Como ves, Medium hace muchas cosas bien pero la performance no es una de ellas. Esto se traduce en experiencia de usuario como una carga muy lenta, sobre todo en dispositivos móviles. "),n("strong",[this._v("Porque la performance es experiencia de usuario.")]),this._v(" Ya hablaremos más de ello otro día.\nLo interesante aquí es que con Nuxt he conseguido llegar a un "),n("strong",[this._v("94%")]),this._v(" de performance frente a un 40% que ofrece Medium en la primera carga, pero lo mejor es que al utilizar sistemas de caché, "),n("strong",[this._v("la segunda vez que entres en mi web la performance es de 100%")]),this._v(" mientras que Medium es del 60%.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Para traducir la web en inglés y español utilizo "),n("a",{attrs:{href:"https://github.com/nuxt-community/nuxt-i18n"}},[this._v("nuxt-i18n")]),this._v(". Es una capa por encima de "),n("a",{attrs:{href:"https://github.com/kazupon/vue-i18n"}},[this._v("vue-i18n")]),this._v(" la cual tiene lazy-loading de las traducciones. "),n("em",[this._v("Nuxt-i18n")]),this._v(" automatiza cómo se trabajan las traducciones en el router de Vue, simplificándolo para Nuxt. Te lo recomiendo por el router, aunque el paquete en sí está un poco verde, la documentación no es la mejor y tiene algunas cosas que no he conseguido que funcionaran como la cookie de redirección en base al idioma del navegador. Pero es un problema que tienes que aceptar si utilizas un nuevo framework como es Nuxt.")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",[e("li",[e("p",[t._v("No estoy muy contenta con la cantidad de JS que estoy metiendo en la web, tengo un total de más de 100k de JS síncrono y quiero reducirlo. Aún tengo que averiguar el cómo. Mi relación con JS es de amor/odio. Por un lado me encanta todo lo que te permite hacer y por otro lo odio porque tiene un coste terrible en la performance de la página.")])]),t._v(" "),e("li",[e("p",[t._v("Añadir un sistema de portfolio con páginas dinámicas como el blog.")])]),t._v(" "),e("li",[e("p",[t._v("Mejoras en el diseño y usabilidad.")])]),t._v(" "),e("li",[e("p",[t._v("Hacer la web totalmente accesible desde el diseño al código.")])]),t._v(" "),e("li",[e("p",[t._v("Limpiar CSS que no utilizo e intentar reducirlo.")])]),t._v(" "),e("li",[e("p",[t._v("Critico mucho Medium pero en verdad me gusta mucho tanto su diseño como algunas de sus funcionalidades, de hecho me gustaría añadir su famoso botón "),e("em",[t._v("“clap”")]),t._v(" a mi web.")])]),t._v(" "),e("li",[e("p",[t._v("Añadir comentarios al post.")])]),t._v(" "),e("li",[e("p",[t._v("Añadir posts similares al que has leído.")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("p",[this._v("Lazy loading de componentes e imágenes en Nuxt, te contaré qué paquetes utilizo y el componente propio que hice para renderizar una primera imagen "),n("em",[this._v("placeholder")]),this._v(" en base64 y después de forma asíncrona la imagen final.")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("p",[this._v("Cómo utilizar "),n("code",{pre:!0},[this._v("analyze")]),this._v(" de Nuxt para analizar el JS que genera Webpack en nuestra app y poder optimizarlo.")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("p",[this._v("Cómo meter emojis en tu web a través de un sprite hecho en SCSS para que se vean siempre igual independientemente del navegador o dispositivo.")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("p",[this._v("Carga de componentes asíncronos de Vue con el ejemplo práctico del mapa que hay en la home.")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Pensé en publicar un starter de Nuxt pero siendo realista no tendría tiempo para mantenerlo. Creo que este post explica muy bien cómo hacerlo, pero si te has quedado con alguna duda, siempre puedes contactarme a mi email: "),n("a",{attrs:{href:"mailto:marina@marinaaisa.com"}},[this._v("marina@marinaaisa")]),this._v(".")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Como no tengo comentarios en el blog, me encantaría continuar la conversación en "),n("a",{attrs:{href:"https://twitter.com/MarinaAisa"}},[this._v("Twitter")]),this._v(". ¡Todo feedback es bienvenido! Si crees que hay algo que se puede mejorar me ayudarías muchísimo.")])}]};t.exports={attributes:{name:"blog-usando-vue-nuxt-markdown",title:"Web con blog y portfolio usando Vue.js + Nuxt + Markdown",year:"1 Enero 2019",color:"#8e7964",trans:"blog-using-vue-nuxt-markdown",id:"vue-nuxt-blog",description:"Cómo he creado mi nueva web con portfolio y blog en dos idiomas. Qué tecnología he utilizado y por qué.\n"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);