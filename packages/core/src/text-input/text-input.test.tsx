import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import { TextInput } from "./text-input";

describe("TextInput", () => {
  it("render", async () => {
    const component = fixture(<TextInput />);
    expect(component).to.be.an.instanceof(TextInput);
  });
});
