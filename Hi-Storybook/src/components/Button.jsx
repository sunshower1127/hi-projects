export const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
}) => {
  const variantStyles = {
    primary: {
      backgroundColor: "blue",
    },
    secondary: {
      backgroundColor: "gray",
    },
  };

  const sizeStyles = {
    sm: {
      padding: "0.5rem",
    },
    md: {
      padding: "0.75rem",
    },
    lg: {
      padding: "1rem",
    },
  };

  return (
    <button
      style={{
        outline: "none",
        border: "none",
        cursor: "pointer",
        borderRadius: 10,
        ...variantStyles[variant],
        ...sizeStyles[size],
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
