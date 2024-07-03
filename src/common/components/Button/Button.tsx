import classNames from 'classnames';
import './button.scss';

interface Props {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const Button = ({ text, onClick, disabled, className }: Props) => {
  return (
    <button disabled={disabled} onClick={onClick} className={classNames('button', className)}>
      {text}
    </button>
  );
};

export default Button;
