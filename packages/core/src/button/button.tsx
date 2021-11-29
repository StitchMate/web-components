import { c } from "atomico";
import { tw } from "twind";
import { useRender } from "@atomico/hooks/use-render";
import {
  defaultClassList,
  typeClassList,
  sizeClassList,
} from "./button.styles";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

library.add(faCircleNotch);

const button = ({
  title,
  primary,
  size,
  type,
  loading,
  rounded,
  icon,
  onclick,
}) => {
  const styles = {
    ...defaultClassList(primary, loading, rounded),
    ...typeClassList(primary, loading)[type],
    ...sizeClassList[size],
  };

  dom.watch();

  useRender(() => (
    <button
      slot="button"
      class={tw(styles)}
      onclick={onclick}
      disabled={loading}
    >
      {icon ? <i class={icon}></i> : null}
      <p>{title}</p>
      {loading ? <i class="fas fa-circle-notch fa-spin"></i> : null}
    </button>
  ));

  return (
    <host shadowDom>
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
  onclick: Function,
};

export const Button = c(button);

export const tag = "todo-button";

customElements.define(tag, Button);
