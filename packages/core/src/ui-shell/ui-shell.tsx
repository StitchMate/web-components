import { c } from "atomico";
import tailwindcss from "../tailwindcss.css";

function uiShell() {
  return (
    <host shadowDom>
      <div class="flex flex-col w-full h-full dark:bg-blue-500 bg-white">
        <slot name="navbar"></slot>
        <div class="flex flex-col items-center justify-center grow m-4">
          <slot></slot>
        </div>
      </div>
    </host>
  );
}

uiShell.props = {
  myProp: String,
};

uiShell.styles = [tailwindcss];

export const UiShell = c(uiShell);

customElements.define("seam-ui-shell", UiShell);
