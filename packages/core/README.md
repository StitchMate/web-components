### Hi, I'm [@uppercod](https://twitter.com/uppercod), creator of Atomico and I want to thank you for starting with Atomico.

If you need help you can find it at:

[![twitter](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/twitter.svg)](https://twitter.com/atomicojs)
[![discord](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/discord.svg)](https://discord.gg/7z3rNhmkNE)
[![documentation](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/doc-1.svg)](https://atomico.gitbook.io/doc/)
[![discord](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/doc.svg)](https://webcomponents.dev/edit/collection/F7dm6YnMEDRtAl57RTXU/d6E4w07fsQbb0CelYQac)

Now what you have installed is a quick start kit based on Vite, which you can scale for your project, now to continue you must execute the following commands:

1. `npm install`
2. `npm start` : Initialize the development server
3. `npm build` : Optional, Generate a build of your project from the html file [index.html](index.html).

## Workspace with Tailwindcss

```bash
src
  |- my-component
  |  |- my-component.{js,jsx,ts,tsx}
  |  |- my-component.test.js
  |  |- README.md
  |- tailwindcss.css # tailwindcss will inject all the css into this file
  |- components.js # import all components
```

From the structure I highlight the use of the `tailwindcss.css` file, which centralizes the use of tailwindcss thanks to postcss.

For each component that uses Tailwindcss, we must import `tailwindcss.css`, example:

```jsx
import { c, css } from "atomico";
import tailwindcss from "../tailwindcss.css";

function button() {
  return (
    <host shadowDom>
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <slot></slot>
      </button>
    </host>
  );
}

button.props = {
  myProp: String,
};

button.styles = [
  tailwindcss,
  css`
    :host {
      display: block;
    }
  `,
];

export const Button = c(button);

customElements.define("flowbite-button", Button);
```

## Considerations

The file that Tailwindcss will generate will be a shared instance between all webcomponents with ShadowDOM.
