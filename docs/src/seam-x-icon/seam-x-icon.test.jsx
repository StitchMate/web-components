import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import { SeamXIcon } from "./seam-x-icon";

describe("SeamXIcon", () => {
    it("render", async () => {
        const component = fixture(<SeamXIcon/>);
        expect(component).to.be.an.instanceof(SeamXIcon);
    });
});