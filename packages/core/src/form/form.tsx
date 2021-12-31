import { c, useEvent, Props, useRef } from "atomico";
import { useListener } from "@atomico/hooks/use-listener";
import tailwindcss from "../tailwindcss.css";

function form({ onSubmit, hideCancel }: Props<typeof form.props>) {
  let dispatchEvent = useEvent("submit", {
    bubbles: true,
    composed: true,
  });

  let submitRef = useRef();

  useListener(submitRef, "click", () => {
    onSubmit ? onSubmit() : dispatchEvent();
  });

  return (
    <host shadowDom>
      <form
        class="flex flex-col gap-2 md:gap-2"
        onsubmit={onSubmit ? onSubmit : () => dispatchEvent()}
      >
        <slot />
        <div class="pr-6 flex gap-4 md:gap-2">
          <div class="grow">
            <slot ref={submitRef} name="actions-submit"></slot>
          </div>
          {!hideCancel ? (
            <div class="shrink">
              <slot name="actions-cancel" class="grow shrink"></slot>
            </div>
          ) : null}
        </div>
      </form>
    </host>
  );
}

form.props = {
  onSubmit: Function,
  hideCancel: {
    type: Boolean,
    value: false,
  },
};

form.styles = [tailwindcss];

export const Form = c(form);

customElements.define("seam-form", Form);
