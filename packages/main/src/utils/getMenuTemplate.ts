import { app, MenuItemConstructorOptions } from 'electron';

export const getMenuTemplate = (): MenuItemConstructorOptions[] => {
  const template: MenuItemConstructorOptions[] = [];

  if (process.platform === 'darwin') {
    // OS X
    const name = app.getName();
    template.unshift({
      label: name,
      submenu: [
        {
          label: 'About Typescape',
          role: 'about',
        },
        {
          label: 'Quit',
          accelerator: 'Command+Q',
          click() {
            app.quit();
          },
        },
      ],
    });
  }

  return template;
};
