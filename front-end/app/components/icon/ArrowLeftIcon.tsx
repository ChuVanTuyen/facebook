type IconProps = {
  className?: string;
};

export const ArrowLeftIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 1em 1em"
      fill="currentColor"
      width="1em"
      height="1em"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.753 4.341a1 1 0 0 0-1.412-.094l-8 7a1 1 0 0 0 0 1.506l8 7a1 1 0 0 0 1.318-1.506L9.518 12l7.14-6.247a1 1 0 0 0 .094-1.412z"
      />
    </svg>
  );
};
