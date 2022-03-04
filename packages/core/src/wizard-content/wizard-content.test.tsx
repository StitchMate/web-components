import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import { WizardContent } from "./wizard-content";

describe("WizardContent", () => {
    it("render", async () => {
        const component = fixture(<WizardContent/>);
        expect(component).to.be.an.instanceof(WizardContent);
    });
});