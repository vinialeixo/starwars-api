import React from 'react';

interface IButtonProps {
  onClick: () => void;
  doubleClick?: () => void;
  title: string;
}

const Button = (props: IButtonProps) => {
  const { onClick, doubleClick, title } = props;
  // console.log('reenderizei no filho');

  return (
    <button onDoubleClick={doubleClick} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
