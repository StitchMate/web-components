import { c } from "atomico";
import { tw } from "twind";
import { defaultStyles } from "./container.styles";

const container = ({ styles, numCols = 3 }) => {
  const innerStyles = {
    ...defaultStyles(numCols),
    ...styles,
  };

  return (
    <host shadowDom class={tw(innerStyles)}>
      <slot />
    </host>
  );
};

container.props = {
  styles: {
    type: Object,
  },
  numCols: {
    type: Number,
  },
};

export const Container = c(container);

export const tag = "seam-container";

customElements.define(tag, Container);
