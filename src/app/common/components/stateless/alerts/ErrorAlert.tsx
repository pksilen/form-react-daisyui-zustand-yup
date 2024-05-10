import React from 'react';
import { ErrorIcon } from '../icons/ErrorIcon';

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export const ErrorAlert = ({ children, className }: Props) => (
  <div role="alert" className={`alert alert-error${className ? ` ${className}` : ''}`}>
    <ErrorIcon />
    <span>{children}</span>
  </div>
);
