import { c } from "atomico";
import tailwindcss from "../tailwindcss.css";

function navbar() {
  return (
    <host shadowDom>
      <div class="flex items-center p-4 gap-2">
        <slot name="before"></slot>
        <div class="flex-1">
          <slot class="w-full"></slot>
        </div>
        <slot name="after"></slot>
      </div>
    </host>
  );
}

navbar.props = {
  myProp: String,
};

navbar.styles = [tailwindcss];

export const Navbar = c(navbar);

customElements.define("seam-navbar", Navbar);
