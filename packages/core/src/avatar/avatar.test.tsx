import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import { Avatar } from "./avatar";

describe("Avatar", () => {
    it("render", async () => {
        const component = fixture(<Avatar/>);
        expect(component).to.be.an.instanceof(Avatar);
    });
});