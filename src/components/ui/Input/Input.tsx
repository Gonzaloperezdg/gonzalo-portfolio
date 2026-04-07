import React from 'react';
import styles from './Input.module.css';

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  className?: string;
  variant?: 'default' | 'underline';
}

interface InputProps extends FieldProps, React.InputHTMLAttributes<HTMLInputElement> {
  as?: 'input';
}

interface TextareaProps extends FieldProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  as: 'textarea';
}

type Props = InputProps | TextareaProps;

export function Input({ id, label, error, className = '', as: tag = 'input', variant = 'underline', ...rest }: Props) {
  if (variant === 'underline') {
    return (
      <div className={`${styles.fieldUnderline} ${className}`}>
        {tag === 'textarea' ? (
          <textarea
            id={id}
            className={styles.textareaUnderline}
            placeholder=" "
            {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            id={id}
            className={styles.inputUnderline}
            placeholder=" "
            {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        <label htmlFor={id} className={styles.labelFloating}>{label}</label>
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  }

  return (
    <div className={`${styles.field} ${className}`}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      {tag === 'textarea' ? (
        <textarea
          id={id}
          className={styles.textarea}
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          className={styles.input}
          {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
