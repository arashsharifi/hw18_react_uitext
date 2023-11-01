import styles from "./CreatNote.module.css";
import { listsNote } from "../data";
import { useState } from "react";
function CreatNote({ handlerPage }) {
  const [listData, setListData] = useState(listsNote);
  // useEffect(() => setListData(listsNote), []);
  const [enteredTitle, setEnteredTitle] = useState("");

  function handlerInput(event) {
    setEnteredTitle(event.target.value);
  }
  function submitData(event) {
    event.preventDefault();
    const data = {
      title: enteredTitle,
      decriptionOne:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five",
      decriptiontwo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also…",
      id: Math.random().toString(),
    };
    const neWrefrence = [...listsNote];
    setListData(neWrefrence.push(data));
    console.log(listData);
  }
  return (
    <div className={styles.containerCreatNote}>
      <div className={styles.iconContainer}>
        <button onClick={() => handlerPage("home")} className={styles.coIcon}>
          <i className="bi bi-chevron-compact-left"></i>
        </button>
        <button onClick={submitData} className={styles.coIcon}>
          <i className="bi bi-floppy"></i>
        </button>
      </div>
      <div className={styles.inputTxt}>
        <input onChange={handlerInput} type="text" placeholder="Title" />
        <p className={styles.txt}>Type something....</p>
      </div>
    </div>
  );
}
export default CreatNote;
