export default {
  title: "Button",
  component: "todo-button",
  argTypes: {
    title: {
      name: "title",
      type: { name: "string", required: false, default: "Button" },
      defaultValue: "Button",
    },
    primary: {
      name: "primary",
      type: { name: "boolean", required: false },
      defaultValue: true,
    },
    type: {
      name: "type",
      options: ["success", "info", "danger", "dark"],
      control: { type: "radio" },
      defaultValue: "info",
    },
    size: {
      name: "size",
      options: ["small", "medium", "large"],
      control: { type: "radio" },
      defaultValue: "medium",
    },
    loading: {
      name: "loading",
      type: { name: "boolean", required: false },
      defaultValue: false,
    },
    rounded: {
      name: "rounded",
      type: { name: "boolean", required: false },
      defaultValue: false,
    },
    icon: {
      name: "icon",
      type: { name: "string", required: false },
    },
    onclick: {
      action: "clicked",
    },
    styles: {
      name: "styles",
      type: { name: "object", required: false },
    },
  },
  parameters: {
    docs: {
      source: {
        code: "<todo-button></todo-button>",
      },
    },
  },
};

const Template = (args) => {
  const button = document.createElement("todo-button");

  button.title = args.title;
  button.primary = args.primary;
  button.type = args.type;
  button.size = args.size;
  button.loading = args.loading;
  button.rounded = args.rounded;
  button.styles = args.styles;

  if (typeof args.icon != "undefined") {
    button.icon = args.icon;
  }
  button.onclick = args.onclick;

  return button;
};

export const Button = Template.bind({});

Button.args = {
  rounded: true,
};

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  primary: true,
  ...Button.args,
};

export const SecondaryButton = Template.bind({});

SecondaryButton.args = {
  primary: false,
  ...Button.args,
};
