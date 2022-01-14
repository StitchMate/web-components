import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import { WizardFileUploadContent } from "./wizard-file-upload-content";

describe("WizardFileUploadContent", () => {
    it("render", async () => {
        const component = fixture(<WizardFileUploadContent/>);
        expect(component).to.be.an.instanceof(WizardFileUploadContent);
    });
});