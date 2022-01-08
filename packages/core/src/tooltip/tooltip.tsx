import { c, useRef, Props, useState, useEffect } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import tailwindcss from "../tailwindcss.css";
import {
  computePosition,
  flip,
  shift,
  autoPlacement,
  hide,
  inline as inlineMiddleware,
  limitShift,
  offset,
  Placement,
} from "@floating-ui/dom";
import classNames from "classnames";

function tooltip({ placement, inline, useClick }: Props<typeof tooltip.props>) {
  let tooltipRef = useRef();
  let targetRef = useRef();
  let [visible, setVisible] = useState(false);

  let child1 = useSlot(targetRef);

  let child2 = useSlot(tooltipRef);

  useEffect(() => {
    addEventListener("scroll", () => calculateTooltip());
    addEventListener("resize", () => calculateTooltip());
    () => {
      removeEventListener("scroll", () => calculateTooltip());
      removeEventListener("resize", () => calculateTooltip());
    };
  });

  let calculateTooltip = () => {
    if (child1.length > 0 && child2.length > 0) {
      (child2[0] as HTMLElement).setAttribute("role", "tooltip");
      (child1[0] as HTMLElement).setAttribute("aria-describedby", "tooltip");
      let target = (child2[0] as HTMLElement).shadowRoot
        ? ((child2[0] as HTMLElement).shadowRoot?.children[0] as HTMLElement)
        : (child2[0] as HTMLElement);
      let middleware = [offset(8), shift({ limiter: limitShift() }), hide()];
      placement == "auto"
        ? middleware.push(autoPlacement())
        : middleware.push(flip());
      inline ? middleware.push(inlineMiddleware()) : null;

      computePosition(child1[0] as HTMLElement, target, {
        placement: placement as Placement,
        strategy: "fixed",
        middleware: middleware,
      }).then(({ x, y }) => {
        Object.assign(target.style, {
          left: "0",
          top: "0",
          transform: `translate3d(${Math.round(x)}px,${Math.round(y)}px,0)`,
        });
      });
    }
  };

  let openTooltip = () => {
    calculateTooltip();
    setVisible(true);
  };

  return (
    <host shadowDom>
      <slot
        name="target"
        ref={targetRef}
        onmouseenter={!useClick ? () => openTooltip() : () => {}}
        onfocusin={() => openTooltip()}
        onfocusout={() => setVisible(false)}
        onmouseleave={!useClick ? () => setVisible(false) : () => {}}
        onclick={useClick ? () => setVisible(!visible) : () => {}}
      ></slot>
      <slot
        name="tooltip"
        class={classNames({
          invisible: !visible,
        })}
        ref={tooltipRef}
      ></slot>
    </host>
  );
}

tooltip.props = {
  placement: {
    type: String,
    value: "auto",
  },
  inline: {
    type: Boolean,
    value: false,
  },
  useClick: {
    type: Boolean,
    value: false,
  },
};

tooltip.styles = [tailwindcss];

export const Tooltip = c(tooltip);

customElements.define("seam-tooltip", Tooltip);
