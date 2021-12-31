import { c, Props } from "atomico";
import tailwindcss from "../tailwindcss.css";

function card({ hideTitle }: Props<typeof card.props>) {
  return (
    <host shadowDom>
      <div class="border border-gray-300 rounded shadow-md dark:shadow-gray-700 shadow-gray-400 flex flex-col max-w-full w-fit gap-4 md:gap-2 bg-white">
        {!hideTitle ? (
          <div class="px-8 md:px-6 pt-4 flex flex-col gap-2">
            <slot name="title"></slot>
          </div>
        ) : null}
        <slot name="media"></slot>
        <div class="px-8 md:px-6 pt-2 flex flex-col gap-2">
          <slot></slot>
        </div>
        <div class="flex items-center px-8 md:px-6 pb-4">
          <slot
            name="actions-left"
            class="flex justify-start flex-1 grow shrink gap-1"
          ></slot>
          <slot
            name="actions-right"
            class="flex justify-end flex-1 grow shrink gap-1"
          ></slot>
        </div>
      </div>
    </host>
  );
}

card.props = {
  hideTitle: {
    type: Boolean,
    value: false,
  },
};

card.styles = [tailwindcss];

export const Card = c(card);

customElements.define("seam-card", Card);
