import { c, Props, useEffect, useEvent, useRef } from "atomico";
import classNames from "classnames";
import tailwindcss from "../tailwindcss.css";
import styles from "./seam-text-input.css";

function seamTextInput({
  name,
  value,
  autocomplete,
  autofocus,
  placeholder,
  label,
  helperText,
  errorMessage,
  error,
  disabled,
  readonly,
  skeleton,
  formData,
}: Props<typeof seamTextInput>) {
  let ref = useRef();
  let containerRef = useRef();
  let inputRef = useRef();

  let inputDispatch = useEvent("seam-input", {
    bubbles: true,
    composed: true,
  });

  let changeDispatch = useEvent("seam-change", {
    bubbles: true,
    composed: true,
  });

  useEffect(() => {
    if (inputRef.current && !readonly) {
      inputRef.current.removeAttribute("readonly");
    }
  }, [readonly, inputRef.current]);

  return (
    <host shadowDom ref={ref}>
      <div part="base" class="flex flex-col">
        <label part="label" class={classNames("input-label")}>
          {label}
        </label>
        <div
          part="input-container"
          ref={containerRef}
          class={classNames("input-container", {
            "input-container--skeleton": skeleton,
            "input-container--disabled": disabled || skeleton,
            "input-container--helper-text":
              (helperText || errorMessage || error) && !skeleton,
            "input-container--helper-text--error":
              (errorMessage || error) && !skeleton,
          })}
        >
          <input
            part="input"
            name={name}
            ref={inputRef}
            class={classNames("input", {
              "input--readonly": readonly || skeleton,
              "input--disabled": disabled || skeleton,
              "input--skeleton": skeleton,
              "input--helper-text": helperText,
              "input--error": (errorMessage || error) && !skeleton,
            })}
            type="text"
            readonly
            placeholder={placeholder}
            autocomplete={autocomplete}
            autofocus={autofocus}
            value={skeleton ? null : value}
            disabled={disabled}
            onfocus={
              !readonly
                ? () => {
                    containerRef.current.style.borderColor = "transparent";
                  }
                : null
            }
            onfocusout={
              !readonly
                ? () => {
                    containerRef.current.style = {};
                  }
                : null
            }
            oninput={(e) => {
              formData && name
                ? formData.set(name, (e.target as HTMLInputElement).value)
                : null;
              inputDispatch({ value: (e.target as HTMLInputElement).value });
            }}
            onchange={(e) => {
              changeDispatch({ value: (e.target as HTMLInputElement).value });
            }}
          ></input>
          <label
            part="helper"
            class={classNames({
              "input-helper-text": error || errorMessage || helperText,
              hidden: (!errorMessage && !helperText) || skeleton,
              "p-0": !errorMessage && !helperText,
              "pb-[0.1875rem]": (!error && helperText) || errorMessage,
            })}
          >
            {errorMessage || helperText}
          </label>
        </div>
      </div>
    </host>
  );
}

seamTextInput.props = {
  name: {
    type: String,
  },
  autocomplete: {
    type: String,
  },
  autofocus: {
    type: Boolean,
    value: false,
  },
  disabled: {
    type: Boolean,
    value: false,
    reflect: true,
  },
  placeholder: {
    type: String,
  },
  value: {
    type: String,
  },
  skeleton: {
    type: Boolean,
    value: false,
    reflect: true,
  },
  helperText: {
    type: String,
  },
  error: {
    type: Boolean,
    reflect: true,
    value: false,
  },
  readonly: {
    type: Boolean,
    value: false,
    reflect: true,
  },
  label: {
    type: String,
  },
  errorMessage: {
    type: String,
  },
  clearable: {
    type: Boolean,
    value: false,
  },
  formData: {
    type: FormData,
  },
};

seamTextInput.styles = [tailwindcss, styles];

export const SeamTextInput = c(seamTextInput);

customElements.define("seam-text-input", SeamTextInput);
