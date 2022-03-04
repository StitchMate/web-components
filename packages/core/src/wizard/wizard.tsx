import { Props, c } from "atomico";
import tailwindcss from "../tailwindcss.css";

function wizard({
    onClick,
  }: Props<typeof wizard.props>) {
    return (
        <host shadowDom>
            <div class="flex flex-col items-center">
                <div class="flex flex-col max-w-md w-full p-4 shadow-lg rounded-2xl flex-1 bg-white">      

                    <div class="">
                        <slot
                            name="progress-bar"
                        > 
                        </slot>
                    </div>
                    <slot
                        name="content"
                        class=""
                    ></slot>

                    <slot
                        name="interactions"
                        class=""
                    ></slot>

                </div>
            </div>
        </host>
    );
};

wizard.props = {
    onClick: Function,
};

wizard.styles = [tailwindcss];

export const Wizard = c(wizard);

customElements.define("seam-wizard", Wizard);