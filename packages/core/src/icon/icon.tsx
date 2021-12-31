import { c, css, Props } from "atomico";
import classNames from "classnames";
import tailwindcss from "../tailwindcss.css";

function icon({ size }: Props<typeof icon.props>) {
  return (
    <host shadowDom>
      <slot class={classNames("text-blue-500", "w-4", "flex")}></slot>
    </host>
  );
}

icon.props = {
  size: String,
};

icon.styles = [tailwindcss];

export const Icon = c(icon);

customElements.define("seam-icon", Icon);
