import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import { Form } from "./form";

describe("Form", () => {
    it("render", async () => {
        const component = fixture(<Form/>);
        expect(component).to.be.an.instanceof(Form);
    });
});