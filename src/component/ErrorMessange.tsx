import { useEffect, useState } from 'react';

interface Props {
  message: string;
  onClose: () => void;
}

export const ErrorMessange: React.FC<Props> = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 300);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      data-cy="ErrorNotification"
      className={`notification is-danger is-light has-text-weight-normal ${
        isVisible ? '' : 'hidden'
      }`}
    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={() => {
          setIsVisible(false);
          onClose();
        }}
      />
      {/* show only one message at a time */}
      {message}
    </div>
  );
};
