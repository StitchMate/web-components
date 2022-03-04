import { c, useEffect, useEvent } from "atomico";
import { useBus } from "../hooks/use-bus";
import classNames from "classnames";
import styles from "./seam-button.css";
import tailwindcss from "../tailwindcss.css";

function seamButton({ loading, success, fail }) {
    useBus("test", (e) => console.log("Received: ", e));
    let loadingDispatch = useEvent("seam-loading", {
        bubbles: true,
        composed: true
    });

    let successDispatch = useEvent("seam-success", {
        bubbles: true,
        composed: true
    });

    let failDispatch = useEvent("seam-fail", {
        bubbles: true,
        composed: true
    });

    useEffect(() => {
        switch(true) {
            case (loading):
                loadingDispatch();
                break;
            case (success):
                successDispatch();
                break;
            case (fail):
                failDispatch();
                break;
        }
    });

    return (
        <host shadowDom>
            <button class={classNames("button", {
                "button--loading": loading,
                "button--success": success,
                "button--fail": fail,
                "button--primary": !success && !fail, 
            })}>
                {loading ? <seam-loading-icon></seam-loading-icon> : success ? <seam-check-icon></seam-check-icon> : fail ? <seam-x-icon></seam-x-icon> : <slot></slot>}
            </button>
        </host>
    );
}

seamButton.props = {
    loading: {
        type: Boolean,
        value: false,
    },
    success: {
        type: Boolean,
        value: false,
    },
    fail: {
        type: Boolean,
        value: false,
    }
};

seamButton.styles = [styles, tailwindcss];

export const SeamButton = c(seamButton);

customElements.define("seam-button", SeamButton);