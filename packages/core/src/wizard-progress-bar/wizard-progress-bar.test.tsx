import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import { WizardProgressBar } from "./wizard-progress-bar";

describe("WizardProgressBar", () => {
    it("render", async () => {
        const component = fixture(<WizardProgressBar/>);
        expect(component).to.be.an.instanceof(WizardProgressBar);
    });
});