import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import { Wizard } from "./wizard";

describe("Wizard", () => {
    it("render", async () => {
        const component = fixture(<Wizard/>);
        expect(component).to.be.an.instanceof(Wizard);
    });
});