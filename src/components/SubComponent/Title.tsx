import React from 'react';

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text?: string;
  children?: React.ReactNode;
}

const Title = ({ text, children, ...props }: TitleProps) => {
  return (
    // Cambiamos <Title> por <h2> para romper el bucle infinito
    <h2 {...props}>
      {text || children}
    </h2>
  );
};

export default Title;