import { c } from "atomico";
import tailwindcss from "../tailwindcss.css";

function footer() {
  return (
    <host shadowDom>
      <div class="flex items-center p-4 gap-2">
        <div class="flex-1 flex gap-2 items-center">
          <slot name="before"></slot>
        </div>
        <div class="flex-1 flex gap-2 items-center justify-end">
          <slot name="after"></slot>
        </div>
      </div>
    </host>
  );
}

footer.props = {};

footer.styles = [tailwindcss];

export const Footer = c(footer);

customElements.define("seam-footer", Footer);
