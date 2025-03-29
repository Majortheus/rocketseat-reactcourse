import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  const [likedCount, setLikedCount] = useState(0);

  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  function handleLikeComment() {
    setLikedCount((state) => state + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="http://github.com/majortheus.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Limão</strong>
              <time
                title={
                  new Intl.DateTimeFormat("pt-BR", {
                    dateStyle: "long",
                    timeStyle: "short",
                  }).format(new Date("2025-03-28T22:18:00")) + "h"
                }
                dateTime="2025-03-28 22:18:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={24} /> Aplaudir <span>{likedCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
