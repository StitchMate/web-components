import { c, Props } from "atomico";
import classNames from "classnames";
import tailwindcss from "../tailwindcss.css";

function divider({ transparent }: Props<typeof divider.props>) {
  return (
    <host shadowDom>
      <hr
        class={classNames("w-full", "border-bottom", {
          "border-gray-300": !transparent,
          "border-transparent": transparent,
        })}
      />
    </host>
  );
}

divider.props = {
  transparent: {
    type: Boolean,
    value: false,
  },
};

divider.styles = [tailwindcss];

export const Divider = c(divider);

customElements.define("seam-divider", Divider);
