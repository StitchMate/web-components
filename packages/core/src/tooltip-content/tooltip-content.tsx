import { c, css, Props, useRef, useEffect } from "atomico";
import classNames from "classnames";
import tailwindcss from "../tailwindcss.css";

function tooltipContent({
  dataPopperPlacement,
  targetHeight,
  targetWidth,
}: Props<typeof tooltipContent.props>) {
  let contentRef = useRef();
  let arrowRef = useRef();
  let heightPx: number = targetHeight ? Math.round(parseInt(targetHeight)) : 0;
  let widthPx: number = targetWidth ? Math.round(parseInt(targetWidth)) : 0;
  let placementMajor = dataPopperPlacement
    ? dataPopperPlacement.split("-")[0]
    : "";
  useEffect(() => {
    if (arrowRef.current) {
      switch (placementMajor) {
        case "right":
          (arrowRef.current as HTMLElement).style.bottom =
            (heightPx - 8) / 2 + "px";
          break;
        case "bottom":
          (arrowRef.current as HTMLElement).style.left =
            (widthPx - 8) / 2 + "px";
          break;
        case "top":
          (arrowRef.current as HTMLElement).style.right =
            (widthPx - 8) / 2 + "px";
          break;
        case "left":
          (arrowRef.current as HTMLElement).style.bottom =
            (heightPx - 8) / 2 + "px";
          break;
      }
    }
  });
  return (
    <host shadowDom>
      <div
        id="tooltip"
        ref={contentRef}
        class={classNames(
          "inline-block",
          "bg-blue-200",
          "rounded",
          "p-2",
          "shadow-md",
          "min-w-fit",
          {
            "ml-2": placementMajor == "right",
            "mt-2": placementMajor == "bottom",
            "mb-2": placementMajor == "top",
            "mr-2": placementMajor == "left",
          }
        )}
        data-popper-placement={dataPopperPlacement}
      >
        <slot></slot>
        <div
          id="arrow"
          class={classNames({
            "ml-2": placementMajor == "right",
            "mt-2": placementMajor == "bottom",
            "mb-2": placementMajor == "top",
            "mr-2": placementMajor == "left",
          })}
          ref={arrowRef}
          data-popper-arrow
        ></div>
      </div>
    </host>
  );
}

tooltipContent.props = {
  dataPopperPlacement: {
    type: String,
    value: "",
  },
  targetHeight: {
    type: String,
    value: "0",
  },
  targetWidth: {
    type: String,
    value: "0",
  },
};

tooltipContent.styles = [
  tailwindcss,
  css`
    #arrow,
    #arrow::before {
      position: absolute;
      width: 8px;
      height: 8px;
      background: inherit;
    }

    #arrow {
      visibility: hidden;
    }

    #arrow::before {
      visibility: visible;
      content: "";
      transform: rotate(45deg);
    }

    #tooltip[data-popper-placement^="top"] > #arrow {
      bottom: -4px;
    }

    #tooltip[data-popper-placement^="bottom"] > #arrow {
      top: -4px;
    }

    #tooltip[data-popper-placement^="left"] > #arrow {
      right: -4px;
    }

    #tooltip[data-popper-placement^="right"] > #arrow {
      left: -4px;
    }
  `,
];

export const TooltipContent = c(tooltipContent);

customElements.define("seam-tooltip-content", TooltipContent);
