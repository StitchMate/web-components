const defaultClassList = (primary, loading = false, rounded = false) => {
  return {
    "text-white": primary,
    border: !primary,
    "bg-transparent": !primary,
    "hover:border-transparent": !primary && !loading,
    flex: true,
    rounded: rounded,
    "items-center": true,
    "gap-2": true,
    "disabled:opacity-50": loading,
  };
};

const typeClassList = (primary, loading = false) => {
  return {
    info: {
      "bg-blue-500": primary,
      "hover:bg-blue-700": primary && !loading,
      "hover:bg-blue-500": !primary && !loading,
      "text-blue-700": !primary,
      "hover:text-white": !primary && !loading,
      "border-blue-500": !primary,
    },
    dark: {
      "text-white": !primary,
      "hover:border-white": !primary && !loading,
      "hover:bg-white": !primary && !loading,
      "hover:text-blue-500": !primary && !loading,
    },
    success: {
      "bg-green-500": primary,
      "hover:bg-green-700": primary && !loading,
      "hover:bg-green-500": !primary && !loading,
      "text-green-700": !primary,
      "hover:text-white": !primary && !loading,
      "border-green-500": !primary,
    },
    danger: {
      "bg-red-500": primary,
      "hover:bg-red-700": primary && !loading,
      "hover:bg-red-500": !primary && !loading,
      "text-red-700": !primary,
      "hover:text-white": !primary && !loading,
      "border-red-500": !primary,
    },
  };
};

const sizeClassList = {
  small: {
    "px-4": true,
    "h-8": true,
    "text-sm": true,
  },
  medium: {
    "py-2": true,
    "px-4": true,
    "h-10": true,
  },
  large: {
    "px-6": true,
    "h-12": true,
    "text-lg": true,
  },
};

export { sizeClassList, typeClassList, defaultClassList };
