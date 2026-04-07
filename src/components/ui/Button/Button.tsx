import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps {
  as?: 'button';
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  href?: never;
  to?: never;
}

interface ButtonAsLink extends ButtonBaseProps {
  as: 'a';
  href: string;
  target?: string;
  rel?: string;
  type?: never;
  onClick?: never;
  disabled?: never;
  to?: never;
}

interface ButtonAsRouterLink extends ButtonBaseProps {
  as: 'link';
  to: string;
  type?: never;
  onClick?: never;
  disabled?: never;
  href?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsRouterLink;

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const cls = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    className,
  ].filter(Boolean).join(' ');

  if (rest.as === 'a') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as: _as, ...linkRest } = rest as ButtonAsLink & { as: 'a' };
    return <a className={cls} {...linkRest}>{children}</a>;
  }

  if (rest.as === 'link') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as: _as, to } = rest as ButtonAsRouterLink & { as: 'link' };
    return <Link to={to} className={cls}>{children}</Link>;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { as: _as, type = 'button', onClick, disabled } = rest as ButtonAsButton;
  return (
    <button className={cls} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
