import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import { Footer } from "./footer";

describe("Footer", () => {
    it("render", async () => {
        const component = fixture(<Footer/>);
        expect(component).to.be.an.instanceof(Footer);
    });
});