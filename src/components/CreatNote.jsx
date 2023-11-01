import styles from "./CreatNote.module.css";
function CreatNote({ handlerPage }) {
  return (
    <div className={styles.containerCreatNote}>
      <div className={styles.iconContainer}>
        <button onClick={() => handlerPage("home")} className={styles.coIcon}>
          <i class="bi bi-chevron-compact-left"></i>
        </button>
        <button className={styles.coIcon}>
          <i class="bi bi-floppy"></i>
        </button>
      </div>
      <div className={styles.inputTxt}>
        <input type="text" placeholder="Title" />
        <p className={styles.txt}>Type something....</p>
      </div>
    </div>
  );
}
export default CreatNote;
