import { useSlot } from "@atomico/hooks/use-slot";
import { c, Props, useRef, useEffect } from "atomico";
import classNames from "classnames";
import tailwindcss from "../tailwindcss.css";

function card({}: Props<typeof card.props>) {
  let titleRef = useRef();
  let titleSlot = useSlot(titleRef);

  return (
    <host shadowDom>
      <div class="rounded shadow-md dark:shadow-gray-700 shadow-gray-400 flex flex-col max-w-full w-fit gap-4 md:gap-2 bg-white">
        <div
          class={classNames(
            "px-8",
            "md:px-6",
            "pt-4",
            "flex",
            "flex-col",
            "gap-2",
            { hidden: titleSlot.length == 0 }
          )}
        >
          <slot ref={titleRef} name="title"></slot>
        </div>
        <div
          class={classNames(
            "flex",
            "items-center",
            "justify-center",
            "bg-black",
            "rounded-b",
            { "rounded-t": titleSlot.length == 0 }
          )}
        >
          <slot name="media"></slot>
        </div>
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

card.props = {};

card.styles = [tailwindcss];

export const Card = c(card);

customElements.define("seam-card", Card);
