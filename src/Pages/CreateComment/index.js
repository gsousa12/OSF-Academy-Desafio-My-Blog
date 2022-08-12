import "./index.css";

function CreateComment() {
  return (
    <>
      <h1 className="h1Text">Create a Coment</h1>

      <section>
        <form>
          <div className="labelContainer">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" placeholder="Type here..." />
          </div>

          <br />

          <div className="labelContainer">
            <label htmlFor="title">Coment</label>
            <textarea
              name="Coment"
              id="Coment"
              cols="30"
              rows="10"
              placeholder="Type here..."
            ></textarea>
          </div>
        </form>
      </section>
    </>
  );
}

export default CreateComment;
