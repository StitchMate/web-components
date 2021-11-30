import { c } from "atomico";
import { tw } from "twind";
import { useRender } from "@atomico/hooks/use-render";
import "@seam-dev/core-components/input";
import "@seam-dev/core-components/button";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope);
library.add(faKey);

const signInForm = ({}) => {
  dom.watch();

  useRender(() => (
    <div slot="sign-in-form">
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
      <slot name="sign-in-form"></slot>
    </host>
  );
};

signInForm.props = {};

export const SignInForm = c(signInForm);

export const tag = "seam-sign-in-form";

customElements.define(tag, SignInForm);
