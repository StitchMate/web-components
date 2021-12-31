import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import { Logo } from "./logo";

describe("Logo", () => {
    it("render", async () => {
        const component = fixture(<Logo/>);
        expect(component).to.be.an.instanceof(Logo);
    });
});