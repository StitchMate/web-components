import { c, Props } from "atomico";
import tailwindcss from "../tailwindcss.css";

function logo({ short }: Props<typeof logo.props>) {
  return (
    <host shadowDom>
      <a
        href="/"
        class="text-blue-500 dark:text-white md:text-xl text-3xl font-semibold"
      >
        {!short ? "Seam." : "S."}
      </a>
    </host>
  );
}

logo.props = {
  short: {
    type: Boolean,
    value: false,
  },
};

logo.styles = [tailwindcss];

export const Logo = c(logo);

customElements.define("seam-logo", Logo);
