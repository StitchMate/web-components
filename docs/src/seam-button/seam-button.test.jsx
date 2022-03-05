import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import { SeamButton } from "./seam-button";

describe("SeamButton", () => {
    it("render", async () => {
        const component = fixture(<SeamButton/>);
        expect(component).to.be.an.instanceof(SeamButton);
    });
});