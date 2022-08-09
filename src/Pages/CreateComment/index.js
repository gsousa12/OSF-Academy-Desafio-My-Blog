import Header from "../../components/header/Header";
import "./index.css";

function CreateComment() {
  return (
    <>
      <Header />
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
            <textarea name="Coment" id="Coment" cols="30" rows="10" placeholder="Type here..."></textarea>
          </div>
        </form>

        <button className="saveBtn">Salvar</button>
      </section>
    </>
  );
}

export default CreateComment;
