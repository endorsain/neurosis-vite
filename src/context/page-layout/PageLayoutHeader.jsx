import { usePageLayout } from './PageLayoutProvider';

// Componente para un botón individual
const Button = ({
  children,
  onClick,
  className = '',
  buttonView,
  ...restProps
}) => {
  const { changeView } = usePageLayout();
  onClick = () => changeView(buttonView);
  return (
    <button
      className={`button_2 ${className}`}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  );
};

// Componente contenedor
const Header = ({ children }) => {
  return <>{children}</>;
};

// Exportamos el componente principal con el subcomponente Button
Header.Button = Button;
export default Header;
