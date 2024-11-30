import "./Item.css";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";
const Item = ({ data, deleteTask, editTask }) => {
  return (
    <div className="list-item">
      <p className="title">
        {data.id} : {data.title}
      </p>
      <div className="btn-container">
        <RiEdit2Fill className="btn edit" onClick={() => editTask(data.id)} />
        <RiDeleteBack2Fill
          className="btn delete"
          onClick={() => deleteTask(data.id)}
        />
      </div>
    </div>
  );
};

export default Item;
