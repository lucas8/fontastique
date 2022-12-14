<p align="center">
  <h3 align="center">Fontastique</h3>
  <p align="center"><i>Opinionated font browser built for designers</i></p>
  <p align="center">Mac (OSX): <a href="https://github.com/lucas8/fontastique/releases/latest">Download</a></p>
  <p align="center">
    <img src="/assets/screenshot.png" alt="App screenshot" title="App screenshot">
  </p>
</p>

## Planned Features:

- [x] Browse system fonts
- [x] Auto update (OSX)
- [x] Theming
- [ ] Cache fonts in sql locally
- [ ] Favorite fonts
- [ ] Search
- [ ] Export font to css
- [ ] Add/remove system fonts (requires custom native bindings)
- [ ] Allow copy/paste functions (add native menu bar controls)

## Notable Folders:

- `/packages/renderer` - this is where all of the react client code is stored (mobx models, components, etc)
- `/pacakges/main` - this module is responsible for creating the main window and setting up all the system defaults, also handles IPC requests
- `/pacakges/preload` - this is a script that is exposed to the client for the purpose of communicating with the main process

## Contributing

Feel free to make a PR and request a review!

Deploys happen on my local machine but I'm happy to add your PR to the next release.
