import { Props, c, css } from "atomico";
import tailwindcss from "../tailwindcss.css";

function button({
  name,
  loading,
  disabled,
  full,
  onClick,
}: Props<typeof button.props>) {
  return (
    <host shadowDom>
      <button
        role="button"
        ariaLabel={name}
        class={`
          flex
          items-center
          justify-items-center
          gap-1
          ${!disabled ? "bg-blue-700" : ""}
          ${!disabled ? "hover:bg-blue-600" : ""}
          ${full ? "w-full" : ""}
          h-8
          px-4
          py-2
          rounded
          ${loading ? "w-24" : ""}
          ${disabled ? "bg-gray-300" : ""}
          ${disabled ? "opacity-30" : ""}
        `}
        onclick={onClick ? onClick : undefined}
        disabled={loading || disabled}
      >
        <slot
          name="before"
          class={`flex-1 ${loading ? "hidden" : null}`}
        ></slot>
        <p
          class={`flex-1 text-xs text-white font-sans ${
            loading ? "hidden" : null
          }`}
        >
          {name}
        </p>
        <slot name="after" class={`flex-1 ${loading ? "hidden" : null}`}></slot>
        {loading ? (
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="spinner-third"
            class="animate-spin text-white flex-1 h-4"
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
  full: {
    type: Boolean,
    value: false,
  },
  onClick: Function,
};

button.styles = [tailwindcss];

customElements.define("seam-button", c(button));
