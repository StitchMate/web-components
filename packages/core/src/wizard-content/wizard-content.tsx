import { c } from "atomico";
import tailwindcss from "../tailwindcss.css";

function wizardContent() {
    return (
        <host shadowDom>
            <div class="flex flex-col place-items-center  w-full">
                <slot name="pre-content-element" class=""></slot>
                <div class="flex flex-col place-items-center p-4 border-2 shadow-inner rounded-2xl bg-slate-200" ondrop={(e) => {
                    console.log("on drop");
                    e.preventDefault();
                    e.stopPropagation();
                    // onDrag(e);
                    console.dir(e.dataTransfer.items[0].webkitGetAsEntry().createReader().readEntries(file => {
                        console.log(file);
                    }));
                    // console.log(URL.createObjectURL(e.dataTransfer.files[0]))// to preview a file
                    // let formData = new FormData();
                    // formData.append('file', e.dataTransfer.files[0])
                }}
                ondragover={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
                >
                    <slot name="content" class="p-4"></slot>
                    <slot name="post-content-element" class="p-4 text-base"></slot>
                </div>
                <input id="file-upload" type="file" class="hidden">
                </input>
            </div>
        </host>
    );
};

wizardContent.props = {
    myProp: String
};

wizardContent.styles = [tailwindcss];

export const WizardContent = c(wizardContent);

customElements.define("seam-wizard-content", WizardContent);