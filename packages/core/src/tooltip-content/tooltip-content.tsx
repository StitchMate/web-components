import { c, css, Props, useRef, useEffect } from "atomico";
import classNames from "classnames";
import tailwindcss from "../tailwindcss.css";

function tooltipContent({
  dataPopperPlacement,
}: Props<typeof tooltipContent.props>) {
  let contentRef = useRef();
  let placementMajor = dataPopperPlacement
    ? dataPopperPlacement.split("-")[0]
    : "";
  return (
    <host shadowDom>
      <div
        id="tooltip"
        ref={contentRef}
        class={classNames(
          "inline-block",
          "bg-white",
          "rounded",
          "p-2",
          "shadow-md",
          "shadow-gray-400",
          "border",
          "border-gray-300",
          "min-w-fit",
          "text-xs",
          {
            "ml-2":
              placementMajor == "right" ||
              placementMajor == "top" ||
              placementMajor == "bottom",
            "mt-2": placementMajor == "bottom",
            "mb-2": placementMajor == "top",
            "mr-2":
              placementMajor == "left" ||
              placementMajor == "top" ||
              placementMajor == "bottom",
          }
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
