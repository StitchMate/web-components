import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import { SeamLoadingIcon } from "./seam-loading-icon";

describe("SeamLoadingIcon", () => {
    it("render", async () => {
        const component = fixture(<SeamLoadingIcon/>);
        expect(component).to.be.an.instanceof(SeamLoadingIcon);
    });
});