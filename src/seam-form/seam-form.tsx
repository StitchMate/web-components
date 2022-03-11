import { useListener } from "@atomico/hooks/use-listener";
import { useSlot } from "@atomico/hooks/use-slot";
import { c, useEffect, useEvent, useRef } from "atomico";
import tailwindcss from "../tailwindcss.css";

function seamForm() {
  let submitRef = useRef();
  let formRef = useRef();
  let slotRef = useRef();
  let formData = new FormData();

  let formSlot = useSlot(slotRef);

  let submitDispatch = useEvent("seam-submit", {
    bubbles: true,
    composed: true,
  });

  useEffect(() => {
    formSlot.forEach((x: any) => {
      x.formData = formData;
    });
  }, [formSlot]);

  useListener(submitRef, "seam-click", (e) => {
    e.stopPropagation();
    submitDispatch({ data: formData });
  });

  return (
    <host shadowDom>
      <form ref={formRef} class="flex flex-col gap-2">
        <slot ref={slotRef}></slot>
        <slot name="submit" ref={submitRef}></slot>
        <slot name="cancel"></slot>
      </form>
    </host>
  );
}

seamForm.props = {
  myProp: String,
};

seamForm.styles = [tailwindcss];

export const SeamForm = c(seamForm);

customElements.define("seam-form", SeamForm);
