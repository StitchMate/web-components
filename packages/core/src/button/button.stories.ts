export default {
  title: "Button",
  component: "seam-button",
  argTypes: {
    title: {
      name: "name",
      type: { name: "string", required: false, default: "Button" },
      defaultValue: "Button",
    },
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
  const button = document.createElement("seam-button");

  button.title = args.title;

  return button;
};

export const Button = Template.bind({});

Button.args = {};
