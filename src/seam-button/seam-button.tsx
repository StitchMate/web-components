import { c, Props, useEffect, useEvent } from "atomico";
import classNames from "classnames";
import tailwindcss from "../tailwindcss.css";
import styles from "./seam-button.css";

function seamButton({
  loading,
  success,
  fail,
  variant,
  spacing,
  href,
  target,
  download,
}: Props<typeof seamButton>) {
  let loadingDispatch = useEvent("seam-loading", {
    bubbles: true,
    composed: true,
  });

  let successDispatch = useEvent("seam-success", {
    bubbles: true,
    composed: true,
  });

  let failDispatch = useEvent("seam-fail", {
    bubbles: true,
    composed: true,
  });

  let clickDispatch = useEvent("seam-click", {
    bubbles: true,
    composed: true,
  });

  useEffect(() => {
    loading ? loadingDispatch() : null;
    success ? successDispatch() : null;
    fail ? failDispatch() : null;
  }, [loading, success, fail]);

  return (
    <host shadowDom>
      {variant == "link" ? (
        <a
          part="base"
          href={href}
          target={target}
          download={download}
          onclick={() => clickDispatch()}
          class={classNames("button", {
            "button--link": variant == "link",
            "button-spacing--default": spacing == "default",
            "button-spacing--compact": spacing == "compact",
          })}
        >
          {loading ? (
            <seam-loading-icon></seam-loading-icon>
          ) : success ? (
            <seam-check-icon></seam-check-icon>
          ) : fail ? (
            <seam-x-icon></seam-x-icon>
          ) : (
            <span part="label">
              <slot></slot>
            </span>
          )}
        </a>
      ) : (
        <button
          part="base"
          onclick={() => clickDispatch()}
          class={classNames("button", {
            "button--loading": loading && variant != "link",
            "button--success": success && variant != "subtle",
            "button--success--subtle": success && variant == "subtle",
            "button--fail": fail && variant != "subtle",
            "button--fail--subtle": fail && variant == "subtle",
            "button--primary": !success && !fail && variant == "primary",
            "button--subtle": !success && !fail && variant == "subtle",
            "button-spacing--default": spacing == "default",
            "button-spacing--compact": spacing == "compact",
          })}
        >
          {loading ? (
            <seam-loading-icon></seam-loading-icon>
          ) : success ? (
            <seam-check-icon></seam-check-icon>
          ) : fail ? (
            <seam-x-icon></seam-x-icon>
          ) : (
            <span part="label">
              <slot></slot>
            </span>
          )}
        </button>
      )}
    </host>
  );
}

seamButton.props = {
  variant: {
    type: String,
    value: "primary",
    reflect: true,
  },
  loading: {
    type: Boolean,
    value: false,
    reflect: true,
  },
  success: {
    type: Boolean,
    value: false,
    reflect: true,
  },
  fail: {
    type: Boolean,
    value: false,
    reflect: true,
  },
  spacing: {
    type: String,
    value: "default",
    reflect: true,
  },
  href: {
    type: String,
  },
  target: {
    type: String,
  },
  download: {
    type: String,
  },
};

seamButton.styles = [styles, tailwindcss];

export const SeamButton = c(seamButton);

customElements.define("seam-button", SeamButton);
