import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import { Divider } from "./divider";

describe("Divider", () => {
    it("render", async () => {
        const component = fixture(<Divider/>);
        expect(component).to.be.an.instanceof(Divider);
    });
});