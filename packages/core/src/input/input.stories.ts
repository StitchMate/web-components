export default {
  title: "Input",
  component: "seam-input",
  argTypes: {
    placeholder: {
      name: "placeholder",
      type: { name: "string", required: false, default: "Placeholder" },
      defaultValue: "Placeholder",
    },
    icon: {
      name: "icon",
      type: { name: "string", required: false },
    },
    value: {
      name: "value",
      type: { name: "string", required: false },
    },
    type: {
      name: "type",
      options: ["text", "password", "email", "number"],
      control: { type: "radio" },
      defaultValue: "text",
    },
    onchange: {
      action: "changed",
    },
  },
  parameters: {
    docs: {
      source: {
        code: "<seam-input></seam-input>",
      },
    },
  },
};

const Template = (args) => {
  const input = document.createElement("seam-input");

  input.placeholder = args.placeholder;
  input.value = args.value;
  input.type = args.type;

  if (typeof args.icon != "undefined") {
    input.icon = args.icon;
  }

  input.onchange = args.onchange;

  return input;
};

export const Input = Template.bind({});

Input.args = {};
