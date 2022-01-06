import { c, Props, useEffect, useRef } from "atomico";
import classNames from "classnames";
import tailwindcss from "../tailwindcss.css";

function tooltipContent({
  dataPopperPlacement,
  targetWidth,
  targetHeight,
  visible,
}: Props<typeof tooltipContent.props>) {
  let contentRef = useRef();
  useEffect(() => {
    if (contentRef && contentRef.current) {
      let width = (contentRef.current as HTMLElement).offsetWidth;
      let height = (contentRef.current as HTMLElement).offsetHeight;
      if (visible && dataPopperPlacement) {
        if (
          dataPopperPlacement.includes("top") ||
          dataPopperPlacement.includes("bottom")
        ) {
          if (width && targetWidth && width < targetWidth) {
            if (dataPopperPlacement.includes("end")) {
              (
                ((contentRef.current as HTMLElement).parentNode as ShadowRoot)
                  .host as HTMLElement
              ).style.right = (-0.5 * width).toString() + "px";
            } else {
              (
                ((contentRef.current as HTMLElement).parentNode as ShadowRoot)
                  .host as HTMLElement
              ).style.left = (-0.5 * width).toString() + "px";
            }
          } else if (width && targetWidth) {
            if (dataPopperPlacement.includes("end")) {
              (
                ((contentRef.current as HTMLElement).parentNode as ShadowRoot)
                  .host as HTMLElement
              ).style.right =
                (-1.35 * Math.abs(width - targetWidth)).toString() + "px";
            } else {
              (
                ((contentRef.current as HTMLElement).parentNode as ShadowRoot)
                  .host as HTMLElement
              ).style.left =
                (-1.35 * Math.abs(width - targetWidth)).toString() + "px";
            }
          }
        } else {
          if (height && targetHeight && height > 2 * targetHeight) {
            if (dataPopperPlacement.includes("end")) {
              (
                ((contentRef.current as HTMLElement).parentNode as ShadowRoot)
                  .host as HTMLElement
              ).style.bottom =
                (-1 * Math.abs(height - targetHeight)).toString() + "px";
            } else if (dataPopperPlacement.includes("start")) {
              (
                ((contentRef.current as HTMLElement).parentNode as ShadowRoot)
                  .host as HTMLElement
              ).style.top =
                (-1 * Math.abs(height - targetHeight)).toString() + "px";
            } else {
              (
                ((contentRef.current as HTMLElement).parentNode as ShadowRoot)
                  .host as HTMLElement
              ).style.top =
                (-0.75 * Math.abs(height - targetHeight)).toString() + "px";
            }
          } else if (height && targetHeight) {
            if (dataPopperPlacement.includes("end")) {
              (
                ((contentRef.current as HTMLElement).parentNode as ShadowRoot)
                  .host as HTMLElement
              ).style.bottom = (-0.5 * height).toString() + "px";
            } else {
              (
                ((contentRef.current as HTMLElement).parentNode as ShadowRoot)
                  .host as HTMLElement
              ).style.top = (-0.5 * height).toString() + "px";
            }
          }
        }
      }
    }
  }, [visible, targetWidth]);
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
            "ml-2": placementMajor == "right",
            "mt-2": placementMajor == "bottom",
            "mb-2": placementMajor == "top",
            "mr-2": placementMajor == "left",
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
  targetWidth: {
    type: Number,
    value: 0,
  },
  targetHeight: {
    type: Number,
    value: 0,
  },
  visible: {
    type: Boolean,
  },
};

tooltipContent.styles = [tailwindcss];

export const TooltipContent = c(tooltipContent);

customElements.define("seam-tooltip-content", TooltipContent);
