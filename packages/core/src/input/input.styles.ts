const containerStyles = (error) => ({
  flex: true,
  "items-center": true,
  "h-10": true,
  "bg-white": true,
  relative: true,
  border: true,
  "border-red-300": error,
  rounded: true,
});

const inputStyles = (error) => ({
  "h-full": true,
  "appearance-none": false,
  "leading-tight": true,
  "pl-8": true,
  "pr-2": true,
  "focus:outline-none": true,
  "focus:ring-blue-300": !error,
  "focus:ring-red-300": error,
  "focus:ring": true,
  "text-sm": true,
  "font-light": true,
  rounded: true,
});

const iconStyles = (icon) => {
  let iconStyles = {
    "text-blue-500": true,
    absolute: true,
    flex: true,
    "items-center": true,
    "ml-2": true,
  };

  iconStyles[icon] = true;

  return iconStyles;
};

export { containerStyles, inputStyles, iconStyles };
