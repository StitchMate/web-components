import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import { UiShell } from "./ui-shell";

describe("UiShell", () => {
    it("render", async () => {
        const component = fixture(<UiShell/>);
        expect(component).to.be.an.instanceof(UiShell);
    });
});