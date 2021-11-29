import { html } from "atomico";
import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import { tag } from "./button";

describe("todo-button", () => {
  it("renders", async () => {
    const component = fixture(html`<${tag}></${tag}>`);
    await component.updated;
    /** Test logic */
  });
});
