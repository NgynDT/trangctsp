import BubbleTeeForm from "../components/bubble-tee-form";
import styles from "./index.module.css";

const Frame = () => {
  return (
    <div className={styles.trangChiTitSnPhmParent}>
      <div className={styles.trangChiTitSnPhm}>
        <BubbleTeeForm />
      </div>
    </div>
  );
};

export default Frame;
