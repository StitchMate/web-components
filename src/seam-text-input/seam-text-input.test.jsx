import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import { SeamTextInput } from "./seam-text-input";

describe("SeamTextInput", () => {
    it("render", async () => {
        const component = fixture(<SeamTextInput/>);
        expect(component).to.be.an.instanceof(SeamTextInput);
    });
});