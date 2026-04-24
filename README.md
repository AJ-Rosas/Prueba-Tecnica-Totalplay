# Totalplay Landing

Prueba tecnica frontend enfocada en maquetacion responsive con Bootstrap, Sass y JavaScript vanilla.

# Tecnologias

- HTML5
- Bootstrap 5 por CDN
- Sass
- JavaScript vanilla
- Font Awesome local

# Estructura

- `index.html`: pagina principal
- `assets/sass/`: archivos fuente de estilos
- `assets/css/styles.css`: CSS compilado
- `assets/js/components/`: scripts de componentes
- `assets/js/pages/`: scripts por pagina
- `assets/img/`, `assets/svg/`, `assets/fontawesome/`: recursos estaticos

# Ejecucion

Este proyecto no usa `package.json` ni un bundler. Es un sitio estatico.
Puedes ejecutarlo de cualquiera de estas formas:

Opcion 1: abrir el archivo directamente
Abre `index.html` en tu navegador.

Opcion 2: usar un servidor local
Recomendado para desarrollo, porque evita comportamientos raros con rutas locales y facilita las pruebas responsive.

En VS Code:

1. Instala la extension `Live Server`
2. Abre la carpeta del proyecto
3. Ejecuta `Open with Live Server` sobre `index.html`

## Compilacion de Sass

El proyecto ya incluye el CSS compilado en `assets/css/styles.css`.
Si haces cambios en `assets/sass/`, recompila manualmente con Dart Sass:

```bash
sass assets/sass/styles.scss assets/css/styles.css
```

Para dejarlo en modo observacion:

```bash
sass --watch assets/sass/styles.scss:assets/css/styles.css
```

Nota: necesitas tener `sass` instalado globalmente en tu equipo para usar esos comandos.

# Consideraciones

1. Bootstrap se carga por CDN desde `index.html`
2. No hay proceso de build ni dependencias instaladas por npm
3. El proyecto esta pensado como maqueta tecnica, no como app productiva
