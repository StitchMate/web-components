import { c } from "atomico";
import { tw } from "twind";
import { useRender } from "@atomico/hooks/use-render";
import {
  defaultClassList,
  typeClassList,
  sizeClassList,
} from "./button.styles";

const button = ({
  title,
  primary,
  size,
  type,
  loading,
  rounded,
  icon,
  styles,
  onclick,
  full,
}) => {
  const innerStyles = {
    ...defaultClassList(primary, loading, rounded),
    ...typeClassList(primary, loading)[type],
    ...sizeClassList[size],
    ...styles,
  };

  useRender(() => (
    <button
      slot="button"
      class={tw(innerStyles)}
      onclick={onclick}
      disabled={loading}
    >
      {icon ? <i class={icon}></i> : null}
      <p class={tw({ "w-full": true })}>{title}</p>
      {loading ? <i class="fas fa-circle-notch fa-spin"></i> : null}
    </button>
  ));

  return (
    <host shadowDom class={tw({ "w-full": full })}>
      <slot name="button"></slot>
    </host>
  );
};

button.props = {
  title: {
    type: String,
    value: "Test",
  },
  primary: {
    type: Boolean,
    value: true,
  },
  size: {
    type: String,
    value: "medium",
  },
  type: {
    type: String,
    value: "info",
  },
  loading: {
    type: Boolean,
    reflect: true,
    value: false,
  },
  rounded: {
    type: Boolean,
    value: false,
  },
  icon: {
    type: String,
  },
  styles: {
    type: Object,
  },
  full: {
    type: Boolean,
    value: false,
  },
  onclick: Function,
};

export const Button = c(button);

export const tag = "todo-button";

customElements.define(tag, Button);
