export default {
  title: "Text Input",
  component: "seam-text-input",
  argTypes: {
    placeholder: {
      name: "placeholder",
      type: { name: "string", required: false },
      defaultValue: "Placeholder",
    },
    autocomplete: {
      name: "autocomplete",
      type: { name: "string", required: false },
      defaultValue: "off",
    },
    disabled: {
      name: "disabled",
      type: { name: "boolean", required: false },
      defaultValue: false,
    },
    autoFocus: {
      name: "autoFocus",
      type: { name: "boolean", required: false },
      defaultValue: false,
    },
    invalid: {
      name: "invalid",
      type: { name: "boolean", required: false },
      defaultValue: false,
    },
    readOnly: {
      name: "readOnly",
      type: { name: "boolean", required: false },
      defaultValue: false,
    },
    labelText: {
      name: "labelText",
      type: { name: "string", required: false },
      defaultValue: "Label",
    },
    kind: {
      name: "kind",
      control: {
        type: "select",
        options: ["text", "password"],
      },
      defaultValue: "text",
    },
    value: {
      name: "value",
      type: { name: "string", required: false },
      defaultValue: "",
    },
    helperText: {
      name: "helperText",
      type: { name: "string", required: false },
      defaultValue: "Helper Text",
    },
    iconPlacement: {
      name: "iconPlacement",
      control: {
        type: "select",
        options: ["before", "after"],
      },
    },
    validityMessage: {
      name: "validityMessage",
      type: { name: "string", required: false },
      defaultValue: "Validity message",
    },
    onChange: { action: "changed" },
  },
  parameters: {
    docs: {
      source: {
        code: "<seam-button></seam-button>",
      },
    },
  },
};

const Template = (args) => {
  const textInput = document.createElement("seam-text-input");

  textInput.placeholder = args.placeholder;
  textInput.autocomplete = args.autocomplete;
  textInput.disabled = args.disabled;
  textInput.autoFocus = args.autoFocus;
  textInput.invalid = args.invalid;
  textInput.readOnly = args.readOnly;
  textInput.labelText = args.labelText;
  textInput.value = args.value;
  textInput.helperText = args.helperText;
  textInput.iconPlacement = args.iconPlacement;
  textInput.validityMessage = args.validityMessage;
  textInput.onChange = args.onChange;
  textInput.kind = args.kind;

  return textInput;
};

export const Text = Template.bind({});

Text.args = {};

export const Password = Template.bind({});

Password.args = {
  kind: "password",
};

export const Invalid = Template.bind({});

Invalid.args = {
  invalid: true,
};
