import { useAppSelector } from "@/redux";
import styles from "./view.module.css";

export function View({ children, isActive }: any) {
  return (
    <div
      className={`${styles.defaultView} ${
        isActive ? styles.visible : styles.hidden
      }`}
    >
      {children}
    </div>
  );
}

export function BodyView({ children, viewName }: any) {
  const { ui } = useAppSelector((s: any) => s.access);

  const isActive = ui.bodyViewActive === viewName;

  return <View isActive={isActive}>{children}</View>;
}

export function FormView({ children, viewName }: any) {
  const { ui } = useAppSelector((s: any) => s.access);

  const isActive = ui.formViewActive === viewName;

  return <View isActive={isActive}>{children}</View>;
}
