import { c, css, Props, useEffect, useState, useRef } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import classNames from "classnames";
import tailwindcss from "../tailwindcss.css";

function icon({ size }: Props<typeof icon.props>) {
  let iconRef = useRef();

  let iconSlot = useSlot(iconRef);

  useEffect(() => {
    if (iconSlot && iconSlot.length > 0) {
      (iconSlot[0] as SVGElement).nextElementSibling.removeAttribute("style");
    }
  });

  return (
    <host shadowDom>
      <slot
        ref={iconRef}
        class={classNames("text-blue-500", "w-4", "flex")}
      ></slot>
    </host>
  );
}

icon.props = {
  size: String,
};

icon.styles = [tailwindcss];

export const Icon = c(icon);

customElements.define("seam-icon", Icon);
