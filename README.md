# Linktree personal

Web estática minimalista para reunir redes sociales y playlists de Spotify en un solo link.

## Archivos

- `index.html`: estructura principal de la página.
- `styles.css`: tema oscuro, responsive y estilos de los botones.
- `script.js`: datos editables del perfil, redes y playlists.

## Cómo editar tus datos

Abrí `script.js` y cambiá estos valores:

```js
const profile = {
  name: "Nahu Podestá",
  initial: "N",
  eyebrow: "Linktree personal",
  bio: "Redes, contenido y playlists favoritas en un solo lugar."
};
```

Después reemplazá las URLs de `socialLinks`:

```js
url: "https://youtube.com/@tuusuario"
```

Para Spotify, reemplazá las URLs dentro de `spotifyLinks` por links reales de playlists:

```js
url: "https://open.spotify.com/playlist/..."
```

Podés agregar o borrar redes/playlists copiando o quitando objetos dentro de los arrays.

## Ver localmente

Como es una web estática, podés abrir `index.html` directamente en el navegador.

También podés levantar un servidor local desde esta carpeta usando un puerto libre, por ejemplo `5500`:

```bash
python3 -m http.server 5500
```

Luego abrí `http://localhost:5500`.

## Publicar en GitHub Pages

1. Creá un repositorio en GitHub.
2. Subí estos archivos a la rama principal.
3. En GitHub, entrá a `Settings` > `Pages`.
4. En `Build and deployment`, elegí `Deploy from a branch`.
5. Seleccioná la rama `main` y la carpeta `/root`.
6. Guardá los cambios.

GitHub te dará una URL parecida a:

```text
https://tuusuario.github.io/nombre-del-repo/
```

Ese es el link que podés poner en tu bio de Instagram.
