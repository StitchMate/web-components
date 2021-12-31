import { c, css } from "atomico";
import tailwindcss from "../tailwindcss.css";

const  = () => {
    return (
        <host shadowDom>
            <slot></slot>
        </host>
    );
};

.props = {
    myProp: String
};

.styles = [tailwindcss];

export const  = c();

customElements.define("seam-", );