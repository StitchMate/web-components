import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import { SeamForm } from "./seam-form";

describe("SeamForm", () => {
    it("render", async () => {
        const component = fixture(<SeamForm/>);
        expect(component).to.be.an.instanceof(SeamForm);
    });
});