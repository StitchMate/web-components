import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import { TooltipContent } from "./tooltip-content";

describe("TooltipContent", () => {
    it("render", async () => {
        const component = fixture(<TooltipContent/>);
        expect(component).to.be.an.instanceof(TooltipContent);
    });
});