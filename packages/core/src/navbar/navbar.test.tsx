import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import { Navbar } from "./navbar";

describe("Navbar", () => {
    it("render", async () => {
        const component = fixture(<Navbar/>);
        expect(component).to.be.an.instanceof(Navbar);
    });
});