import { c, useRef, useState, useEffect } from "atomico";
import classNames from "classnames";
import tailwindcss from "../tailwindcss.css";

function footer() {
  let [hidden, setHidden] = useState(true);
  let footerRef = useRef();
  useEffect(() => {
    if (footerRef.current) {
      setHidden(false);
    }
  });

  return (
    <host shadowDom>
      <div
        ref={footerRef}
        class={classNames(
          "flex",
          "flex-col",
          "md:flex-row",
          "items-center",
          "p-4",
          "gap-2",
          {
            hidden: hidden,
          }
        )}
      >
        <div class="flex-1 flex gap-2 items-center">
          <slot name="before"></slot>
        </div>
        <div class="flex-1 flex gap-2 items-center justify-end">
          <slot name="after"></slot>
        </div>
      </div>
    </host>
  );
}

footer.props = {};

footer.styles = [tailwindcss];

export const Footer = c(footer);

customElements.define("seam-footer", Footer);
