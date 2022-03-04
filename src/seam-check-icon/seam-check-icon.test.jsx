import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import { SeamCheckIcon } from "./seam-check-icon";

describe("SeamCheckIcon", () => {
    it("render", async () => {
        const component = fixture(<SeamCheckIcon/>);
        expect(component).to.be.an.instanceof(SeamCheckIcon);
    });
});