import { Props, c, useEvent } from "atomico";
import tailwindcss from "../tailwindcss.css";
import classNames from "classnames/index";

function button({
  name,
  loading,
  disabled,
  ghost,
  spacing,
  kind,
  skeleton,
  full,
  onClick,
}: Props<typeof button.props>) {
  let dispatchEvent = useEvent("click", {
    bubbles: true,
    composed: true,
  });

  return (
    <host shadowDom>
      <button
        role="button"
        ariaLabel={name}
        class={classNames(
          "flex",
          "items-enter",
          "justify-items-center",
          "gap-1",
          "rounded",
          {
            "shadow-md": !ghost && !disabled && !skeleton && kind != "link",
            "py-2": spacing == "default" && kind != "link",
            "py-1": spacing == "compact" && kind != "link",
            "px-4": kind != "link",
            "h-8": spacing == "default" && kind != "link",
            "h-6": spacing == "compact" && kind != "link",
            "bg-blue-700": kind == "primary",
            "hover:bg-blue-600":
              !ghost && kind == "primary" && !disabled && !skeleton,
            "active:bg-blue-500":
              !ghost && kind == "primary" && !disabled && !skeleton,
            "shadow-blue-600":
              !ghost && kind == "primary" && !disabled && !skeleton,
            "bg-amber-400": !ghost && kind == "warning",
            "hover:bg-yellow-400":
              !ghost && kind == "warning" && !disabled && !skeleton,
            "active:bg-yellow-300":
              !ghost && kind == "warning" && !disabled && !skeleton,
            "shadow-amber-300":
              !ghost && kind == "warning" && !disabled && !skeleton,
            "bg-red-500": !ghost && kind == "danger",
            "hover:bg-red-400":
              !ghost && kind == "danger" && !disabled && !skeleton,
            "active:bg-red-300":
              !ghost && kind == "danger" && !disabled && !skeleton,
            "shadow-red-400":
              !ghost && kind == "danger" && !disabled && !skeleton,
            "hover:shadow-red-300":
              !ghost && kind == "danger" && !disabled && !skeleton,
            "bg-transparent": ghost,
            "hover:bg-gray-300/10":
              ghost && kind != "link" && !skeleton && !disabled,
            "hover:bg-yellow-400/20":
              ghost && kind == "warning" && !skeleton && !disabled,
            "active:bg-yellow-400/30":
              ghost && kind == "warning" && !skeleton && !disabled,
            "hover:bg-red-400/20":
              ghost && kind == "danger" && !skeleton && !disabled,
            "active:bg-red-400/30":
              ghost && kind == "danger" && !skeleton && !disabled,
            "hover:bg-blue-700/20":
              ghost && kind == "primary" && !skeleton && !disabled,
            "active:bg-blue-700/30":
              ghost && kind == "primary" && !skeleton && !disabled,
            "w-full": full,
            "w-24": (loading || skeleton) && kind != "link",
            "bg-gray-300": (disabled || skeleton) && kind != "link",
            "animate-pulse": skeleton && kind != "link",
            "cursor-wait": loading && kind != "link",
          }
        )}
        onclick={onClick ? onClick : () => dispatchEvent}
        disabled={loading || disabled || skeleton}
      >
        {!loading && kind != "link" ? (
          <slot
            name="before"
            class={classNames({
              hidden: skeleton || loading,
              "text-white": !ghost && !disabled,
              "text-blue-700": ghost && kind == "primary",
              "text-amber-400": ghost && kind == "warning",
              "text-red-500": ghost && kind == "danger",
              "text-gray-400": disabled,
              "text-gray-700": kind == "warning" && !ghost && !disabled,
            })}
          ></slot>
        ) : null}
        <p
          class={classNames("flex-1", "text-xs", "font-sans", {
            "text-white": !ghost,
            "text-gray-400": disabled,
            "text-gray-500": ghost && kind == "link",
            "text-gray-700": !ghost && kind == "warning",
            "text-blue-700":
              (ghost && kind == "primary") || (!ghost && kind == "link"),
            "text-amber-400": ghost && kind == "warning",
            "text-red-500": ghost && kind == "danger",
            "hover:underline": kind == "link",
            "cursor-not-allowed": kind == "link" && disabled,
            "hover:text-blue-600": !ghost && kind == "link" && !disabled,
            "hover:text-gray-400": ghost && kind == "link" && !disabled,
            hidden: (skeleton || loading) && kind != "link",
          })}
        >
          {name}
        </p>
        {!loading && kind != "link" ? (
          <slot
            name="after"
            class={classNames("flex-1", { hidden: skeleton || loading })}
          ></slot>
        ) : null}
        {loading && !skeleton && kind != "link" ? (
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="spinner-third"
            class={classNames("animate-spin", "flex-1", "h-4", {
              "text-white": !ghost,
              "text-amber-400": ghost && kind == "warning",
              "text-blue-700": ghost && kind == "primary",
              "text-red-500": ghost && kind == "danger",
            })}
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M512 256c0 36.59-7.83 71.34-21.77 102.8c-5.834 13.17-21.64 18.65-34.15 11.5c-10.5-5.996-15.06-18.94-10.12-29.98C457.5 314.6 464 286 464 256c0-107.7-82.26-196.5-187.2-206.1C264.8 47.84 256 37.34 256 25.36c0-14.52 12.8-25.45 27.23-23.92C411.6 15.08 512 124 512 256z"
            ></path>
          </svg>
        ) : null}
      </button>
    </host>
  );
}

button.props = {
  name: {
    type: String,
    value: "Button",
  },
  ghost: {
    type: Boolean,
    value: false,
  },
  size: {
    type: String,
    value: "medium",
  },
  kind: {
    type: String,
    value: "primary",
  },
  skeleton: {
    type: Boolean,
    value: false,
  },
  loading: {
    type: Boolean,
    reflect: true,
    value: false,
  },
  disabled: {
    type: Boolean,
    reflect: true,
    value: false,
  },
  spacing: {
    type: String,
    value: "default",
  },
  full: {
    type: Boolean,
    value: false,
  },
  onClick: Function,
};

button.styles = [tailwindcss];

export const Button = c(button);

customElements.define("seam-button", c(button));
