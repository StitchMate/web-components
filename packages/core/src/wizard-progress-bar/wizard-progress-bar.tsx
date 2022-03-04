import { c } from "atomico";
import tailwindcss from "../tailwindcss.css";

function wizardProgressBar() {
    return (
        <host shadowDom>
            <div class="flex flex-row justify-center max-w-xs w-full ml-12">

                <div class="flex flex-col place-items-center w-3/8 pl-8"> 
                    <slot 
                        name="progress-bar-left-media"
                        class=""
                    >
                    </slot>
                    <slot 
                        name="progress-bar-left-media-title"
                        class="text-xs"
                    >
                    </slot>
                </div>

                <slot
                    name="progress-bar-divider"
                    class="place-items-center min-w-fit max-w-md w-2/8 grow-0 shrink-0"
                >
                </slot>

                <div class="flex flex-col place-items-center w-3/8 pr-8">                
                    <slot
                        name="progress-bar-right-media"
                        class=""
                    >                    
                    </slot>
                    <slot 
                        name="progress-bar-right-media-title"
                        class="text-xs"
                    >
                    </slot>
                </div>
            </div>
        </host>
    );
};

wizardProgressBar.props = {
    myProp: String
};

wizardProgressBar.styles = [tailwindcss];

export const WizardProgressBar = c(wizardProgressBar);

customElements.define("seam-wizard-progress-bar", WizardProgressBar);