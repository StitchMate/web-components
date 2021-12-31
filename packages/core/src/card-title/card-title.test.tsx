import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import { CardTitle } from "./card-title";

describe("CardTitle", () => {
    it("render", async () => {
        const component = fixture(<CardTitle/>);
        expect(component).to.be.an.instanceof(CardTitle);
    });
});