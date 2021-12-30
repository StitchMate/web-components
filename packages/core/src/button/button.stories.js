export default {
  title: "Button",
  component: "seam-button",
  argTypes: {
    name: {
      name: "name",
      type: { name: "string", required: false },
      defaultValue: "Button",
    },
    loading: {
      name: "loading",
      type: { name: "boolean", required: false },
      defaultValue: false,
    },
    disabled: {
      name: "disabled",
      type: { name: "boolean", required: false },
      defaultValue: false,
    },
    ghost: {
      name: "ghost",
      type: { name: "boolean", required: false },
      defaultValue: false,
    },
    spacing: {
      name: "spacing",
      control: { type: "select", options: ["default", "compact"] },
      defaultValue: "default",
    },
    kind: {
      name: "kind",
      control: {
        type: "select",
        options: ["primary", "warning", "danger", "link"],
      },
      defaultValue: "primary",
    },
    skeleton: {
      name: "skeleton",
      type: { name: "boolean", required: false },
      defaultValue: false,
    },
    full: {
      name: "full",
      type: { name: "boolean", required: false },
      defaultValue: false,
    },
    onClick: { action: "clicked" },
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

  button.name = args.name;
  button.loading = args.loading;
  button.disabled = args.disabled;
  button.ghost = args.ghost;
  button.spacing = args.spacing;
  button.kind = args.kind;
  button.skeleton = args.skeleton;
  button.full = args.full;
  button.onClick = args.onClick;

  return button;
};

export const Primary = Template.bind({});

Primary.args = {};

export const PrimaryGhost = Template.bind({});

PrimaryGhost.args = {
  ghost: true,
};

export const PrimaryLink = Template.bind({});

PrimaryLink.args = {
  kind: "link",
};

export const Warning = Template.bind({});

Warning.args = {
  kind: "warning",
};

export const WarningGhost = Template.bind({});

WarningGhost.args = {
  kind: "warning",
  ghost: true,
};

export const Danger = Template.bind({});

Danger.args = {
  kind: "danger",
};

export const DangerGhost = Template.bind({});

DangerGhost.args = {
  kind: "danger",
  ghost: true,
};

export const SubtleLink = Template.bind({});

SubtleLink.args = {
  kind: "link",
  ghost: true,
};

export const Skeleton = Template.bind({});

Skeleton.args = {
  skeleton: true,
};
