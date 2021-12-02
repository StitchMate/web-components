import { c } from "atomico";
import { tw } from "twind";
import { useRender } from "@atomico/hooks/use-render";
import "@seam-dev/core-components/input";
import "@seam-dev/core-components/button";

const loginBox = ({}) => {
  let outerStyles = {
    "bg-white": true,
    rounded: true,
    "py-8": true,
    "px-8": true,
    "sm:px-16": true,
    flex: true,
    "flex-col": true,
    "gap-2": true,
    "shadow-lg": true,
  };

  useRender(() => (
    <div slot="loginBox" class={tw(outerStyles)}>
      <h1 class={tw({ "text-xl": true, "text-blue-500": true })}>Sign In</h1>
      <p
        class={tw({
          "text-gray-400": true,
          "text-sm": true,
          "font-light": true,
          "mb-2": true,
        })}
      >
        Login in to manage your account
      </p>
      <seam-input
        icon="fas fa-envelope"
        placeholder="email@yourdomain.com"
      ></seam-input>
      <seam-input
        icon="fas fa-key"
        placeholder="Password"
        type="password"
      ></seam-input>
      <div
        class={tw({ flex: true, "gap-2": true, "mt-2": true, "mb-2": true })}
      >
        <input type="checkbox" />
        <p class={tw({ "text-xs": true, "font-light": true })}>Remember me?</p>
      </div>
      <todo-button title={"Sign In"} full rounded></todo-button>
    </div>
  ));

  return (
    <host shadowDom>
      <slot name="loginBox">
        <slot />
      </slot>
    </host>
  );
};

loginBox.props = {};

export const LoginBox = c(loginBox);

export const tag = "seam-login-box";

customElements.define(tag, LoginBox);
