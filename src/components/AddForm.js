import "./AddForm.css";
const AddForm = ({ title, setTitle, addTask, editId }) => {
  return (
    <div>
      <h2>Work Management Form</h2>
      <form className="form-group" onSubmit={addTask}>
        <div className="form-control">
          <input
            type="text"
            className="text-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {editId ? "Update":"Add"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddForm;
