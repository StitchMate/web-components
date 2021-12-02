import { c } from "atomico";
import { tw } from "twind";
import { useRender } from "@atomico/hooks/use-render";
import { containerStyles, inputStyles, iconStyles } from "./input.styles";

const input = ({ placeholder, icon, type, value, error, onchange }) => {
  useRender(() => (
    <div slot="input" class={tw(containerStyles(error))}>
      {typeof icon != "undefined" ? <i class={tw(iconStyles(icon))} /> : null}
      <input
        type={type}
        class={tw(inputStyles(error))}
        placeholder={placeholder}
        oninput={onchange}
        value={value}
      ></input>
    </div>
  ));

  return (
    <host shadowDom>
      <slot name="input" />
    </host>
  );
};

input.props = {
  placeholder: {
    type: String,
    value: "Placeholder",
  },
  icon: {
    type: String,
  },
  value: {
    type: String,
  },
  type: {
    type: String,
    value: "text",
  },
  error: {
    type: Boolean,
    value: false,
  },
  onchange: Function,
};

export const Input = c(input);

export const tag = "seam-input";

customElements.define(tag, Input);
