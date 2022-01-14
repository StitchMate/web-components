import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import { WizardInteractions } from "./wizard-interactions";

describe("WizardInteractions", () => {
    it("render", async () => {
        const component = fixture(<WizardInteractions/>);
        expect(component).to.be.an.instanceof(WizardInteractions);
    });
});