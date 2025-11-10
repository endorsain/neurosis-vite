import {
  Body,
  ButtonModal,
  Modal,
  PageLayout,
  View,
} from "@/layout/page-layout/PageLayout";
import styles from "./HomePage.module.css";

export function HomePage() {
  return (
    <PageLayout>
      <Body>
        <CronometroView />
        <EstadisticasView />
      </Body>
    </PageLayout>
  );
}

function CronometroView() {
  return (
    <View viewname="cronometro">
      <h1>Cronometro view</h1>
      <ButtonModal modalname="test">modal</ButtonModal>
      <TestModal modalname="test" />
    </View>
  );
}

function TestModal({ modalname }: any) {
  return (
    <Modal modalname={modalname}>
      <h1>El maldito modal</h1>
    </Modal>
  );
}

function EstadisticasView() {
  return (
    <View viewname="estadisticas">
      <h1>Estadisticas view</h1>
    </View>
  );
}
