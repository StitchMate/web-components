import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import { Icon } from "./icon";

describe("Icon", () => {
    it("render", async () => {
        const component = fixture(<Icon/>);
        expect(component).to.be.an.instanceof(Icon);
    });
});