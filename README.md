# Web Capture

Web Capture allows you to record your screen inside your browsers without any external applications. This is very useful if you don't have the time to spin up OBS Studio or something more "complex" to capture a quick moment.
It's also written in a Ripple (https://www.ripplejs.com/), which is a new fast frontend framework.

## Future

There is a lot of stuff to get working, like configuring settings, using ffmpeg-wasm to allow more codec settings (on Firefox).

## Development

1. Install dependencies:

    ```bash
    npm install # or pnpm or yarn
    ```

2. Start the development server:

    ```bash
    npm run dev
    ```

3. Build for production:
    ```bash
    npm run build
    ```

### Code Formatting

Don't use prettier on this project as it breaks a lot.

### VS Code Integration

For the best development experience, install the [Prettier VS Code extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and the [Ripple VS Code extension](https://marketplace.visualstudio.com/items?itemName=ripplejs.ripple-vscode-plugin).

### Learn More

- [Ripple Documentation](https://github.com/trueadm/ripple)
- [Vite Documentation](https://vitejs.dev/)
