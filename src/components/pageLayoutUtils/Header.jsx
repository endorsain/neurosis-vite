import { usePageLayout } from '../../context';

// Componente para un botón individual
const Button = ({
  onClick,
  className = '',
  viewName = null,
  icon = null,
  ...restProps
}) => {
  const { changeView } = usePageLayout();

  if (viewName !== null) {
    onClick = () => changeView(viewName);
  }

  return (
    <button
      className={`button_2 ${className}`}
      onClick={onClick}
      {...restProps}
    >
      {icon}
    </button>
  );
};

// Componente contenedor
const PageLayoutHeader = ({ children }) => {
  return <>{children}</>;
};
// Exportamos el componente principal con el subcomponente Button
PageLayoutHeader.Button = Button;
export default PageLayoutHeader;
