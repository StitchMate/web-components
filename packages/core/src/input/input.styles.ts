const containerStyles = (focused) => ({
  "bg-white": true,
  border: true,
  flex: true,
  "py-2": true,
  "h-10": true,
  "px-2": true,
  "items-center": true,
  rounded: true,
  "border-blue-500": focused,
});

const inputStyles = {
  "appearance-none": true,
  "leading-tight": true,
  "focus:outline-none": true,
  "focus:border-transparent": true,
  "text-sm": true,
  "font-light": true,
};

const iconStyles = (icon) => {
  let iconStyles = {
    "text-blue-500": true,
    "mr-2": true,
  };

  iconStyles[icon] = true;

  return iconStyles;
};

export { containerStyles, inputStyles, iconStyles };
