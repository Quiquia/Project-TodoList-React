import { useContext } from "react";
import FormContext from "../../context/context";

function Footer() {
  const { checkedAllTask, deleteAllTask } = useContext(FormContext);
  return (
    <footer className="footer">
      <button className="button button-check" onClick={() => checkedAllTask()}>
        Check All
      </button>
      <button className="button button-delete" onClick={() => deleteAllTask()}>
        Delete Tasks
      </button>
    </footer>
  );
}

export default Footer;
