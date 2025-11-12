import {
  ButtonModal,
  Modal,
  PageLayout,
  View,
} from "@/layout/page-layout/PageLayout";
import styles from "./HomePage.module.css";

export function HomePage() {
  return (
    <PageLayout>
      {/* <Body> */}
      <CronometroView />
      <EstadisticasView />
      <MilanesaView />
      {/* </Body> */}
    </PageLayout>
  );
}

function CronometroView() {
  return (
    <View viewname="cronometro">
      <h1>Cronometro view</h1>
      <ButtonModal modalname="test1">modal test 1</ButtonModal>
      <TestModal1 modalname="test1" />
    </View>
  );
}

function TestModal1({ modalname }: any) {
  return (
    <Modal modalname={modalname}>
      <div className={styles.testModal1}>
        <h1>Test modal 1</h1>
      </div>
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

function MilanesaView() {
  return (
    <View viewname="milanesa">
      <h1>Milanesa view</h1>
      <ButtonModal modalname="test2">modal test 2</ButtonModal>
      <TestModal2 modalname="test2" />
    </View>
  );
}

function TestModal2({ modalname }: any) {
  return (
    <Modal modalname={modalname}>
      <div className={styles.testModal2}>
        <h1>Test modal 2</h1>
      </div>
    </Modal>
  );
}
