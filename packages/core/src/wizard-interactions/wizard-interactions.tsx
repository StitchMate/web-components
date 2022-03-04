import { Props, c } from "atomico";
import tailwindcss from "../tailwindcss.css";

function wizardInteractions({
    onClick,
  }: Props<typeof wizardInteractions.props>) {
    return (
        <host shadowDom>
            <div class="flex flex-row justify-end w-full pr-2">

                <slot name="interaction-left" class=""> </slot>

                <slot name="interaction-right" class=""> </slot>

            </div>
        </host>
    );
};

wizardInteractions.props = {
    onClick: Function,
};

wizardInteractions.styles = [tailwindcss];

export const WizardInteractions = c(wizardInteractions);

customElements.define("seam-wizard-interactions", WizardInteractions);