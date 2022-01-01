import { c } from "atomico";
import tailwindcss from "../tailwindcss.css";

function navbar() {
  return (
    <host shadowDom>
      <div class="flex items-center p-4 gap-2">
        <div class="flex gap-2 items-center">
          <slot name="before"></slot>
        </div>
        <div class="flex-1 gap-2">
          <slot class="w-full"></slot>
        </div>
        <div class="flex gap-2 items-center">
          <slot name="after"></slot>
        </div>
      </div>
    </host>
  );
}

navbar.props = {};

navbar.styles = [tailwindcss];

export const Navbar = c(navbar);

customElements.define("seam-navbar", Navbar);
