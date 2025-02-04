import { tw } from 'twind';

interface IButton {
  primary?: boolean;
  children: React.ReactNode;
  modifier?: string;
  className?: string;
  onClick?: () => void;
  href?: string;
}

const Button = ({ primary, modifier, className, children, onClick, href, ...rest }: IButton) => {
  const baseStyle = `font-sans font-medium py-2 px-4 border rounded`;
  const styles = primary
    ? `bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700`
    : `bg-white text-gray-600 border-gray-300 hover:bg-gray-100`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={tw(`${baseStyle} ${styles} ${modifier ?? ``} ${className ?? ``}`)}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={tw(`${baseStyle} ${styles} ${modifier ?? ``} ${className ?? ``}`)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
