import "./index.css";

function CreatePost() {
  return (
    <>
      <h1 className="h1Text">Create a Post</h1>

      <section>
        <form>
          <div className="labelContainer">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" placeholder="Type here..." />
          </div>

          <br />

          <div className="labelContainer">
            <label htmlFor="title">Teaser</label>
            <textarea
              name="teaser"
              id="teaser"
              cols="30"
              rows="10"
              placeholder="Type here..."
            ></textarea>
          </div>

          <div className="labelContainer">
            <label htmlFor="title">Content</label>
            <textarea
              name="teaser"
              id="teaser"
              cols="30"
              rows="10"
              placeholder="Type here..."
            ></textarea>
          </div>
        </form>
      </section>

      <br />

      <button className="addParagraphBtn">Add Paragraph</button>

      <button className="saveBtnPost">Salvar</button>
    </>
  );
}

export default CreatePost;
