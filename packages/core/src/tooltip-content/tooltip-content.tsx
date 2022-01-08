import { c, Props, useEffect, useRef, useUpdate } from "atomico";
import classNames from "classnames";
import tailwindcss from "../tailwindcss.css";

function tooltipContent({
  dataPopperPlacement,
}: Props<typeof tooltipContent.props>) {
  let contentRef = useRef();

  return (
    <host shadowDom>
      <div
        id="tooltip"
        ref={contentRef}
        class={classNames(
          "fixed",
          "z-10",
          "bg-white",
          "rounded",
          "p-2",
          "shadow-md",
          "shadow-gray-400",
          "border",
          "border-gray-300",
          "min-w-fit",
          "text-md",
          "md:text-xs",
          "max-w-xs"
        )}
        data-popper-placement={dataPopperPlacement}
      >
        <slot></slot>
      </div>
    </host>
  );
}

tooltipContent.props = {
  dataPopperPlacement: {
    type: String,
    value: "",
  },
};

tooltipContent.styles = [tailwindcss];

export const TooltipContent = c(tooltipContent);

customElements.define("seam-tooltip-content", TooltipContent);
