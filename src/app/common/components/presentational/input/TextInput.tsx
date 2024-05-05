import React from 'react';

export type TextInputProps = {
  className?: string;
  error?: string | null | undefined;
  label?: string;
  maxLength?: number | undefined;
  required?: boolean;
};

export const TextInput = React.forwardRef(
  ({ className, error, label, maxLength, required, ...restOfProps }: TextInputProps, ref) => (
    <label className={`form-control w-full${className ? ` ${className}` : ''}`}>
      <div className="label">
        <span className="label-text">{`${label}${required ? ' *' : ''}`}</span>
      </div>
      <input
        className={`input input-bordered w-full ${error ? ' input-error' : ''}`}
        maxLength={maxLength}
        type="text"
        {...restOfProps}
      />
      <div className="label">
        <span className="label-text-alt text-error">{error}</span>
      </div>
    </label>
  )
);
