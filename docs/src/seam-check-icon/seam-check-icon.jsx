import { c, css } from "atomico";

function seamCheckIcon() {
    return (
        <host shadowDom>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </host>
    );
}

seamCheckIcon.props = {
};

seamCheckIcon.styles = [];

export const SeamCheckIcon = c(seamCheckIcon);

customElements.define("seam-check-icon", SeamCheckIcon);