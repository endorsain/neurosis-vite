import { usePageLayout } from '../../context/page-layout/PageLayoutProvider';

// Componente para un botón individual
const Button = ({
  onClick,
  className = '',
  viewName,
  icon = null,
  ...restProps
}) => {
  const { changeView } = usePageLayout();
  onClick = () => changeView(viewName);

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
