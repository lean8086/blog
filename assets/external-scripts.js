document.head.insertAdjacentHTML('beforeend', `
  <style>
    :root {
      --color-background: #fff;
      --color-text: rgba(0, 0, 0, .85);
      --color-link-default: #0074D9;

      --gutter-l: 4rem;
      --gutter-m: 2rem;

      --font-type-sans: Roboto, system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif;
      --font-type-serif: "Playfair Display", "Times New Roman", serif;

      --radius: .7rem;
    }

    html {
      width: 100%;
      height: 100%;
      scroll-behavior: smooth;
    }

    body {
      background: var(--color-background);
      width: 100%;
      height: 100%;
      margin: 0 auto;
      max-width: 68rem;
      display: flex;
      flex-direction: column;
    }

    body > .header,
    body > .footer {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: var(--color-text);
    }

    body > .header {
      padding: 0 var(--gutter-m);
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 5rem;
      position: relative;
      font-family: var(--font-type-sans);
    }

    body > .header::before {
      content: '←';
      position: absolute;
      left: 12px;
    }

    body > .header .header__logo {
      opacity: .9;
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAHCAYAAADXhRcnAAAAQUlEQVQYlaWPWwoAIAgEZ6P7X9kgkEosP9q/8cUowFg52Mwk6dpvW5EwVLEaH+luWJyI/ck37Zj0jS9tX061ngwM3psOEDmut7oAAAAASUVORK5CYII=');
      background-repeat: no-repeat;
      font-size: 0;
      width: 15px;
      height: 7px;
      transform: scale(3);
      transform-origin: left;
      -ms-interpolation-mode: nearest-neighbor;
      image-rendering: -moz-crisp-edges;
      image-rendering: -webkit-optimize-contrast;
      image-rendering: pixelated;
    }

    body > .header a {
      color: var(--color-link-default);
      text-decoration: none;
    }

    body > .header a:hover,
    body > .footer a:hover {
      text-decoration: underline;
    }

    body > .footer {
      margin: var(--gutter-l) 0 var(--gutter-m);
      text-align: center;
      font-family: var(--font-type-serif);
      font-weight: 500;
      font-size: .9rem;
    }

    body > .footer a {
      color: var(--color-text);
      text-decoration: none;
    }

    .experiment-area {
      flex: auto;
    }

    .experiment-workspace {
      position: relative;
      margin: 0 var(--gutter-m) var(--gutter-l);
      border-radius: var(--radius);
    }
  </style>
`);

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', `
    <header class="header" role="banner">
      <a class="header__logo pixelated" href="https://leandrolinares.com/">Leandro's Web Site</a>
      ${location.hostname === 'lean8086.github.io' ? `<a href="https://github.com/lean8086${location.pathname}" target="_blank">View Source Code</a>` : ''}
    </header>
  `);

  document.body.insertAdjacentHTML('beforeend', `
    <footer class="footer" role="contentinfo">
      ${document.title.split(' - ')[0] ?? ''} — <a href="https://leandrolinares.com/">Leandro Linares</a>
    </footer>
  `);
});
