import { c, Props, useState, useProp, useRef } from "atomico";
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
  skeleton,
  helperText,
  validityMessage,
  full,
  iconPlacement,
}: Props<typeof textInput.props>) {
  let refInput = useRef();
  let [, setValue] = useProp("value");
  let [focused, setFocused] = useState(false);
  let [showPassword, setShowPassword] = useState(false);

  return (
    <host shadowDom>
      {labelText ? (
        <label
          class={classNames(
            "text-md",
            "md:text-xs",
            "font-light",
            "font-sans",
            "text-gray-500",
            {
              "text-gray-300": disabled && !skeleton,
              "text-transparent": skeleton,
              "bg-gray-300": skeleton,
              "animate-pulse": skeleton,
              rounded: skeleton,
              "select-none": skeleton,
            }
          )}
        >
          {labelText}
        </label>
      ) : null}
      <div class="flex">
        {!skeleton ? (
          <div
            class={classNames(
              "flex",
              { "min-w-fit": !full, "w-full": full },
              "items-center",
              "h-10",
              "md:h-8",
              { "bg-white": !disabled },
              { "bg-gray-100": disabled },
              "relative",
              { border: !disabled },
              { "border-gray-300": !invalid },
              { "border-red-500": invalid },
              "rounded"
            )}
          >
            <slot
              name="before"
              class={classNames(
                "absolute",
                "flex",
                "items-center",
                "ml-2",
                "w-6",
                { "text-gray-300": disabled },
                { "text-blue-500": focused },
                { "text-gray-400": !focused }
              )}
            ></slot>
            <input
              ref={refInput}
              autocomplete={autocomplete ? autocomplete : ""}
              autofocus={autoFocus}
              disabled={disabled}
              readonly={readOnly}
              type={
                kind == "password" ? (showPassword ? "text" : "password") : kind
              }
              class={classNames(
                "h-full",
                "w-full",
                "font-sans",
                "appearance-none",
                "leading-tight",
                "focus:outline-none",
                {
                  "pl-8": iconPlacement == "before",
                  "pr-2": iconPlacement == "before",
                  "pr-4": !iconPlacement,
                  "pr-8": iconPlacement == "after",
                  "pl-2": iconPlacement == "after",
                  "pl-4": !iconPlacement,
                  "cursor-not-allowed": readOnly,
                  "focus:ring-blue-300": !readOnly,
                  "focus:ring": !readOnly,
                },
                "disabled:text-gray-300",
                "disabled:bg-transparent",
                "pr-2",
                "text-lg",
                "md:text-xs",
                "disabled:placeholder-gray-300",
                "font-light",
                "rounded"
              )}
              placeholder={placeholder}
              onfocus={() => setFocused(true)}
              onblur={() => setFocused(false)}
              oninput={
                onChange ? onChange : () => setValue(refInput.current.value)
              }
              value={value}
            />
            {!invalid ? (
              <slot
                name="after"
                class={classNames(
                  "absolute",
                  "flex",
                  "items-center",
                  "right-0",
                  "mr-2",
                  "w-6",
                  { "text-gray-300": disabled },
                  { "text-blue-500": focused },
                  { "text-gray-400": !focused }
                )}
              ></slot>
            ) : (
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="circle-exclamation"
                class="absolute flex items-center right-0 text-red-500 svg-inline--fa fa-circle-exclamation w-4 mr-2"
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
        ) : (
          <div
            class={classNames(
              "h-8",
              "bg-gray-300",
              "rounded",
              "animate-pulse",
              {
                "w-52": !full,
                "w-full": full,
              }
            )}
          ></div>
        )}
        {kind == "password" && !showPassword ? (
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="eye"
            onclick={() =>
              !disabled && !skeleton ? setShowPassword(true) : null
            }
            class={classNames("w-4", "ml-2", "h-10", "md:h-8", {
              "text-gray-500": !disabled && !skeleton,
              "text-gray-300": disabled && !skeleton,
              "text-transparent": skeleton,
              "bg-gray-300": skeleton,
              rounded: skeleton,
              "animate-pulse": skeleton,
            })}
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M572.5 238.1C518.3 115.5 410.9 32 288 32S57.69 115.6 3.469 238.1C1.563 243.4 0 251 0 256c0 4.977 1.562 12.6 3.469 17.03C57.72 396.5 165.1 480 288 480s230.3-83.58 284.5-206.1C574.4 268.6 576 260.1 576 256C576 251 574.4 243.4 572.5 238.1zM288 432c-99.48 0-191.2-67.5-239.6-175.1C97.01 147.4 188.6 80 288 80c99.48 0 191.2 67.5 239.6 175.1C478.1 364.6 387.4 432 288 432zM288 128C217.3 128 160 185.3 160 256s57.33 128 128 128c70.64 0 128-57.32 128-127.9C416 185.4 358.7 128 288 128zM288 336c-44.11 0-80-35.89-80-80c0-.748 .1992-1.441 .2207-2.184C213.3 255.1 218.5 256 224 256c35.35 0 64-28.65 64-64c0-5.48-.875-10.72-2.184-15.78C286.6 176.2 287.3 176 288 176c44.11 0 80 35.89 80 80.05C368 300.1 332.1 336 288 336z"
            ></path>
          </svg>
        ) : null}
        {kind == "password" && showPassword ? (
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="eye-slash"
            onclick={() =>
              !disabled && !skeleton ? setShowPassword(false) : null
            }
            class={classNames("w-4", "ml-2", "h-10", "md:h-8", {
              "text-gray-500": !disabled && !skeleton,
              "text-gray-300": disabled && !skeleton,
              "text-transparent": skeleton,
              "bg-gray-300": skeleton,
              rounded: skeleton,
              "animate-pulse": skeleton,
            })}
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path
              fill="currentColor"
              d="M630.8 469.1l-103.5-81.11c31.35-31.94 57.79-70.78 77.21-114.1c1.906-4.43 3.469-12.07 3.469-17.03c0-4.977-1.562-12.6-3.469-17.03c-54.25-123.4-161.6-206.1-284.5-206.1c-62.67 0-121.2 21.95-170.8 59.62L38.81 5.116C34.41 1.679 29.19 0 24.03 0C16.91 0 9.839 3.158 5.121 9.189c-8.188 10.44-6.37 25.53 4.068 33.7l591.1 463.1c10.5 8.203 25.57 6.333 33.69-4.073C643.1 492.4 641.2 477.3 630.8 469.1zM394.4 283.8l-81.65-63.1C316.1 211.3 319.1 202.2 319.1 192c0-5.48-.8744-10.73-2.183-15.78C318.6 176.2 319.3 176 320 176c44.11 0 80 35.89 80 80.05C400 265.9 397.7 275.1 394.4 283.8zM433.2 314.2C442.4 296.8 448 277.2 448 256.1C448 185.4 390.7 128 320 128C287.8 128 258.7 140.2 236.3 159.9L188.3 122.3C228 95.03 273.1 80 320 80c99.48 0 191.2 67.5 239.6 175.1c-18.06 40.38-42.41 74.43-70.61 101.9L433.2 314.2zM320 384c13.42 0 26.16-2.643 38.31-6.477L302.8 334C279.1 328.8 259.5 312.9 248.8 291.7L192.8 247.8C192.6 250.6 192 253.2 192 256C192 326.7 249.3 384 320 384zM320 432c-99.48 0-191.2-67.5-239.6-175.1c10.83-24.22 24.09-46.03 38.81-65.86L81.28 160.4c-17.77 23.74-33.27 50.04-45.81 78.59C33.56 243.4 31.1 251 31.1 256c0 4.977 1.562 12.6 3.469 17.03c54.25 123.4 161.6 206.1 284.5 206.1c45.46 0 88.77-11.49 128.1-32.14l-42.87-33.59C378 425.4 349.5 432 320 432z"
            ></path>
          </svg>
        ) : null}
      </div>
      {!invalid && helperText ? (
        <label
          class={classNames(
            "text-xs",
            "font-light",
            "font-sans",
            "text-gray-500",
            {
              "text-gray-300": disabled && !skeleton,
              "text-transparent": skeleton,
              "bg-gray-300": skeleton,
              "animate-pulse": skeleton,
              rounded: skeleton,
            }
          )}
        >
          {helperText}
        </label>
      ) : null}
      {invalid && validityMessage ? (
        <label
          class={classNames(
            "text-red-500",
            "text-xs",
            "font-light",
            "font-sans",
            {
              "bg-gray-300": skeleton,
              "text-transparent": skeleton,
              "animate-pulse": skeleton,
              rounded: skeleton,
              "select-none": skeleton,
            }
          )}
        >
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
  value: {
    type: String,
    event: {
      type: "change",
      bubbles: true,
      composed: true,
      cancelable: true,
    },
  },
  skeleton: {
    type: Boolean,
    value: false,
  },
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
  full: Boolean,
};

textInput.styles = [tailwindcss];

export const TextInput = c(textInput);

customElements.define("seam-text-input", TextInput);
