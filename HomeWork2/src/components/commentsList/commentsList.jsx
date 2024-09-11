import { useState } from "react";

function CommentsList() {
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);
  const [commentId, setCommentId] = useState(3);

  const addComment = () => {
    if (comment.trim() !== "") {
      setCommentsList([
        ...commentsList,
        {
          id: setCommentId((prevCommentId) => prevCommentId + 1),
          text: comment,
        },
      ]);
      setComment("");
    } else {
      setComment("");
    }
  };

  const deleteComment = (id) => {
    const newCommentsList = commentsList.filter((el) => {
      return el.id !== id;
    });
    setCommentsList(newCommentsList);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="comment"
          value={comment}
          placeholder="Введите сообщение"
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <button onClick={addComment}>Добавить комментарий</button>
      </div>
      <div>
        {commentsList?.length > 0 ? (
          <ul>
            {commentsList.map((el) => (
              <li key={el.id}>
                <p>
                  {el.text}
                </p>

                <button onClick={() => {
                  deleteComment(el.id);}
                  }>
                  Удалить комментарий
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <p>Список сообщений пуст</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CommentsList;
