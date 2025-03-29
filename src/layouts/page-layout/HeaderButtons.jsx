import React from 'react';

const HeaderButtons = ({ setChange, select, children }) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <>
      {childrenArray.map((child, index) => (
        <button className="button_2" key={index}>
          {child}
        </button>
      ))}
    </>
  );
};

export default HeaderButtons;
