import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import { Button } from "./button";

describe("Button", () => {
    it("render", async () => {
        const component = fixture(<Button/>);
        expect(component).to.be.an.instanceof(Button);
    });
});