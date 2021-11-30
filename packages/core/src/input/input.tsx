import { c, useProp } from "atomico";
import { tw } from "twind";
import { useRender } from "@atomico/hooks/use-render";
import { containerStyles, inputStyles, iconStyles } from "./input.styles";

const input = ({ placeholder, icon, value, type, onchange }) => {
  useRender(() => (
    <div slot="input" class={tw(containerStyles(false))}>
      {typeof icon != "undefined" ? <i class={tw(iconStyles(icon))} /> : null}
      <input
        type={type}
        class={tw(inputStyles)}
        placeholder={placeholder}
        value={value}
        oninput={onchange}
      ></input>
    </div>
  ));

  return (
    <host shadowDom>
      <slot name="input"></slot>
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
  onchange: Function,
};

export const Input = c(input);

export const tag = "seam-input";

customElements.define(tag, Input);
