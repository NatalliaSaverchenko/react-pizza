import classNames from 'classnames';

const Button = ({ outline, onClick, className, children }) => {
  return (
    <button
      className={classNames('button', className, { 'button--outline': outline })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
