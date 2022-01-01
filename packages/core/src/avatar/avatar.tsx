import { c, Props } from "atomico";
import tailwindcss from "../tailwindcss.css";

function avatar({ src }: Props<typeof avatar.props>) {
  return (
    <host shadowDom>
      <img class="rounded-full w-10 h-10" src={src} />
    </host>
  );
}

avatar.props = {
  src: String,
};

avatar.styles = [tailwindcss];

export const Avatar = c(avatar);

customElements.define("seam-avatar", Avatar);
