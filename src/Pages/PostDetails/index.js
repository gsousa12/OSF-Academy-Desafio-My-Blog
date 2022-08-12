import { useParams } from "react-router";
import useDetails from "../../hooks/useDetails";

function PostDetails() {
  const { id } = useParams();

  const { title, author, date, content } = useDetails(id);

  return (
    <>
      <div>
        <p>{title}</p>
      </div>
    </>
  );
}

export default PostDetails;
