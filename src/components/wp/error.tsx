import React from 'react';
import Link from 'next/link';

interface WpErrorProps {
  icon?: string;
  title?: string;
  message?: string;
  transfer_link?: string;
  transfer_label?: string;
}

const WpError: React.FC<WpErrorProps> = ({
  icon,
  title = 'Error',
  message,
  transfer_link,
  transfer_label = ''
}) => {
  return (
    <div className="wpError">
      {icon && <div className="wpError__icon">{icon}</div>}
      {title && <h4 className="wpError__title">{title}</h4>}
      {message && <p className="wpError__message">{message}</p>}
      <button></button>
      {transfer_link && (
        <Link href={transfer_link}>
          <a className="wpError__transfer">{transfer_label}</a>
        </Link>
      )}
    </div>
  );
};

export default WpError;
