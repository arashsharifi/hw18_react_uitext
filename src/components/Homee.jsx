import { useState } from "react";
import pic from "../images/rafiki.png";
import styles from "./Homee.module.css";
import ModalInfoHome from "./ModalInfoHome";

function Homee({ handlerPage }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className={styles.containerHome}>
      <div className={styles.header}>
        <h1>Notes</h1>
        <div className={styles.svgContainer}>
          <div className={styles.svgC}>
            <button className={styles.btn}>
              <i className="bi bi-search"></i>
            </button>
          </div>
          <div className={styles.svgC}>
            <button onClick={() => setModalShow(true)} className={styles.btn}>
              <i className="bi bi-info-circle"></i>
            </button>
          </div>
        </div>
      </div>
      <div>
        <img className={styles.imgInfo} src={pic} alt="noot" />
        <p>Creat your first note!</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.plasBtn}
          onClick={() => handlerPage("creatNote")}
        >
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>
      <ModalInfoHome show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
export default Homee;
