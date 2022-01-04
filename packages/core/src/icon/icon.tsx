import { c, Props, useEffect, useRef } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import classNames from "classnames";
import tailwindcss from "../tailwindcss.css";

function icon({ size }: Props<typeof icon.props>) {
  let iconRef = useRef();

  let iconSlot = useSlot(iconRef);

  useEffect(() => {
    if (iconSlot && iconSlot.length > 0) {
      (iconSlot[0] as SVGElement).nextElementSibling?.removeAttribute("style");
    }
  }, [iconRef, iconSlot]);

  return (
    <host shadowDom>
      <slot
        ref={iconRef}
        class={classNames(
          { "w-4": size == "default", "w-8": size == "large" },
          "flex"
        )}
      ></slot>
    </host>
  );
}

icon.props = {
  size: {
    type: String,
    value: "default",
  },
};

icon.styles = [tailwindcss];

export const Icon = c(icon);

customElements.define("seam-icon", Icon);
