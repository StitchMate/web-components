import { c, useRef, useEffect, Props, useState } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import tailwindcss from "../tailwindcss.css";
import { createPopper, Placement } from "@popperjs/core";
import classNames from "classnames";

function tooltip({ placement }: Props<typeof tooltip.props>) {
  let tooltipRef = useRef();
  let targetRef = useRef();
  let [visible, setVisible] = useState(false);

  let child1 = useSlot(targetRef);

  let child2 = useSlot(tooltipRef);

  useEffect(() => {
    if (child1 && child1.length > 0 && child2.length > 0) {
      let child2Target: HTMLElement = (
        child2[0] as HTMLElement
      )?.shadowRoot?.children?.item(0) as HTMLElement;

      let targetHeight = child2Target ? child2Target.offsetHeight : 0;
      let targetWidth = child2Target ? child2Target.offsetWidth : 0;
      (child2[0] as HTMLElement).setAttribute("role", "tooltip");
      (child2[0] as HTMLElement).setAttribute(
        "target-height",
        targetHeight.toString()
      );
      (child2[0] as HTMLElement).setAttribute(
        "target-width",
        targetWidth.toString()
      );
      (child2[0] as HTMLElement).style.zIndex = "2";
      (child1[0] as HTMLElement).setAttribute("aria-describedby", "tooltip");
      createPopper(child1[0] as HTMLElement, child2[0] as HTMLElement, {
        placement: placement as Placement,
      });
    }
  });

  return (
    <host shadowDom>
      <slot
        class="inline-block"
        name="target"
        ref={targetRef}
        onmouseenter={() => setVisible(true)}
        onmouseleave={() => setVisible(false)}
      ></slot>
      <slot
        name="tooltip"
        class={classNames({
          hidden: !visible,
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
};

tooltip.styles = [tailwindcss];

export const Tooltip = c(tooltip);

customElements.define("seam-tooltip", Tooltip);
