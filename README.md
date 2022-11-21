<p align="center">
  <h3 align="center">Typescape</h3>
  <p align="center"><i>A Font browser built for designers</i></p>
  <p align="center">Mac (OSX): <a href="https://github.com/lucas8/typescape/releases/latest">Download</a></p>
  <p align="center">
    <img src="/assets/screenshot.png" alt="App screenshot" title="App screenshot">
  </p>
</p>

## Planned Features:
- [x] Browse system fonts
- [x] Auto update (OSX)
- [x] Theming
- [ ] Favorite fonts
- [ ] Search
- [ ] Export font to css
- [ ] Add/remove system fonts (requires custom native bindings)

## Notable Folders:
- `/packages/renderer` - this is where all of the react client code is stored (mobx models, components, etc)
- `/pacakges/main` - this module is responsible for creating the main window and setting up all the system defaults, also handles IPC requests
- `/pacakges/preload` - this is a script that is exposed to the client for the purpose of communicating with the main process

## Contributing
Feel free to make a PR and request a review!

Deploys happen on my local machine but I'm happy to add your PR to the next release.
