export default {
  title: "Button",
  component: "todo-button",
  argTypes: {
    title: {
      name: "title",
      type: { name: "string", required: false, default: "Button" },
    },
    primary: {
      name: "primary",
      type: { name: "boolean", required: false },
    },
    type: {
      name: "type",
      options: ["success", "info", "danger", "dark"],
      control: { type: "radio" },
    },
    size: {
      name: "size",
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    loading: {
      name: "loading",
      type: { name: "boolean", required: false },
    },
    rounded: {
      name: "rounded",
      type: { name: "boolean", required: false },
    },
    icon: {
      name: "icon",
      type: { name: "string", required: false },
    },
    onclick: {
      action: "clicked",
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
  if (typeof args.icon != "undefined") {
    button.icon = args.icon;
  }
  button.onclick = args.onclick;

  return button;
};

export const Button = Template.bind({});

Button.args = {
  title: "Button",
  primary: true,
  type: "info",
  size: "medium",
  loading: false,
  rounded: false,
};
