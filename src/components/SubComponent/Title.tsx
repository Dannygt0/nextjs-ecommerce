import React from 'react';

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text?: string;
}

const Title = ({ text, children, className = '', ...props }: TitleProps) => {
  const baseClasses = "font-semibold text-xl sm:text-2xl xl:text-heading-5 text-dark mb-1.5";

  return (
    <h2 
      className={`${baseClasses} ${className}`.trim()} 
      {...props}
    >
      {text || children}
    </h2>
  );
};

export default Title;