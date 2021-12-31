import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import { Card } from "./card";

describe("Card", () => {
    it("render", async () => {
        const component = fixture(<Card/>);
        expect(component).to.be.an.instanceof(Card);
    });
});