import { c } from "atomico";
import tailwindcss from "../tailwindcss.css";

function logo() {
  return (
    <host shadowDom>
      <a
        href="/"
        class="text-blue-500 dark:text-white md:text-xl text-3xl font-semibold"
      >
        Seam.
      </a>
    </host>
  );
}

logo.props = {};

logo.styles = [tailwindcss];

export const Logo = c(logo);

customElements.define("seam-logo", Logo);
