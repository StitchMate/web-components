import { c, Props } from "atomico";
import tailwindcss from "../tailwindcss.css";
import classNames from "classnames";

function textInput({
  autocomplete,
  kind,
  placeholder,
  onChange,
  value,
  invalid,
  autoFocus,
  labelText,
  disabled,
  readOnly,
  helperText,
  validityMessage,
  iconPlacement,
}): Props<typeof textInput> {
  return (
    <host shadowDom>
      {labelText ? (
        <label
          class={classNames("text-xs", "font-light", "font-sans", {
            "text-gray-300": disabled,
          })}
        >
          {labelText}
        </label>
      ) : null}
      <div
        class={classNames(
          "flex",
          "items-center",
          "h-8",
          "bg-gray-200",
          "relative",
          { border: !disabled },
          { "border-red-500": invalid },
          "rounded"
        )}
      >
        <slot name="before" class="absolute flex items-center ml-2"></slot>
        <input
          autocomplete={autocomplete ? autocomplete : null}
          autofocus={autoFocus}
          disabled={disabled}
          readonly={readOnly}
          type={kind}
          class={classNames(
            "h-full",
            "w-full",
            "font-sans",
            "appearance-none",
            "leading-tight",
            {
              "pl-8": iconPlacement == "before",
              "pr-2": iconPlacement == "before",
              "pr-4": !iconPlacement,
              "pr-8": iconPlacement == "after",
              "pl-2": iconPlacement == "after",
              "pl-4": !iconPlacement,
            },
            "pr-2",
            "focus:outline-none",
            "focus:ring-blue-300",
            "focus:ring",
            "text-xs",
            "disabled:placeholder-gray-300",
            "font-light",
            "rounded"
          )}
          placeholder={placeholder}
          oninput={onChange ? onChange : null}
          value={value}
        />
        {!invalid ? (
          <slot
            name="after"
            class="absolute flex items-center right-0 mr-2"
          ></slot>
        ) : (
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="circle-exclamation"
            class="text-red-500 svg-inline--fa fa-circle-exclamation w-4 mr-2"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z"
            ></path>
          </svg>
        )}
      </div>
      {!invalid && helperText ? (
        <label
          class={classNames("text-xs", "font-light", "font-sans", {
            "text-gray-300": disabled,
          })}
        >
          {helperText}
        </label>
      ) : null}
      {invalid && validityMessage ? (
        <label class="text-red-500 text-xs font-light font-sans">
          {validityMessage}
        </label>
      ) : null}
    </host>
  );
}

textInput.props = {
  kind: {
    type: String,
    value: "text",
  },
  autocomplete: String,
  autoFocus: {
    type: Boolean,
    value: false,
  },
  disabled: {
    type: Boolean,
    value: false,
  },
  placeholder: String,
  onChange: Function,
  value: String,
  helperText: String,
  iconPlacement: String,
  invalid: {
    type: Boolean,
    reflect: true,
    value: false,
  },
  readOnly: Boolean,
  labelText: String,
  validityMessage: String,
};

textInput.styles = [tailwindcss];

export const TextInput = c(textInput);

customElements.define("seam-text-input", TextInput);
