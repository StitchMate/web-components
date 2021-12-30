import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import { Tooltip } from "./tooltip";

describe("Tooltip", () => {
    it("render", async () => {
        const component = fixture(<Tooltip/>);
        expect(component).to.be.an.instanceof(Tooltip);
    });
});