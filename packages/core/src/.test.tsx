import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import {  } from "./";

describe("", () => {
    it("render", async () => {
        const component = fixture(</>);
        expect(component).to.be.an.instanceof();
    });
});