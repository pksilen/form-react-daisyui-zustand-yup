import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const SubmitButton = ({ children, className }: Props) => (
  <button className={`btn btn-primary${className ? ` ${className}` : ''}`}>{children}</button>
);
