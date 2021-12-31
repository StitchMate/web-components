import { c, css, Props } from "atomico";
import tailwindcss from "../tailwindcss.css";

function cardTitle({ name, helperText }: Props<typeof cardTitle.props>) {
  return (
    <host shadowDom>
      <div class="flex gap-4 items-center">
        <slot name="avatar"></slot>
        <div class="flex flex-col">
          <h1 class="font-semibold text-lg">{name}</h1>
          <p class="text-xs text-gray-500">{helperText}</p>
        </div>
      </div>
    </host>
  );
}

cardTitle.props = {
  name: String,
  helperText: String,
};

cardTitle.styles = [tailwindcss];

export const CardTitle = c(cardTitle);

customElements.define("seam-card-title", CardTitle);
