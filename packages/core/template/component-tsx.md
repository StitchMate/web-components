---
{
  tags: ["{%", "%}"],
  questions: [{ type: "text", name: "name", message: "Component name?" }],
}
---

## component

```tsx {%name|kebabCase%}/{%name|kebabCase%}.tsx
import { c, css } from "atomico";
import tailwindcss from "../tailwindcss.css";

const {%name|camelCase%} = () => {
  return (
    <host shadowDom>
      <slot></slot>
    </host>
  );
};

{%name|camelCase%}.props = {
  myProp: String
};

{%name|camelCase%}.styles = [tailwindcss];

export const {%name|pascalCase%} = c({%name|camelCase%});

customElements.define("seam-{%name|kebabCase%}", {%name|pascalCase%});
```

## Component documentation

````markdown {%name|kebabCase%}/README.md
## {%name|kebabCase%}

### Properties

| Property | Type   | Description                        |
| -------- | ------ | ---------------------------------- |
| myProp   | string | defines the title of the component |

### Slots

| Property   | Type      | Description     |
| ---------- | --------- | --------------- |
| Unassigned | ChildNode | General content |

### Example

```html
<{%name|kebabCase%} my-prop="my value"></{%name|kebabCase%}>
```
````

## Component test

```tsx {%name|kebabCase%}/{%name|kebabCase%}.test.tsx
import { expect } from "@esm-bundle/chai";
import { fixture } from "atomico/test-dom";
import { {%name|pascalCase%} } from "./{%name|kebabCase%}";

describe("{%name|pascalCase%}", () => {
  it("render", async () => {
    const component = fixture(<{%name|pascalCase%}/>);
    expect(component).to.be.an.instanceof({%name|pascalCase%});
  });
});
```
