import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Button } from "./Button";
import styles from "./Comment.module.css";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => state + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/natasha-m-oliveira.png"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Natasha M Oliveira</strong>
              <time title="29 de Outubro às 14:48" dateTime="2022-10-29 14:48">
                Cerca de 1h atrás
              </time>
            </div>

            <Button
              onClick={handleDeleteComment}
              title="Deletar comentário"
              color="danger"
              text
              className={styles.delete}
            >
              <Trash size={24} />
            </Button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <Button
            onClick={handleLikeComment}
            title="Aplaudir comentário"
            text
            className={styles.like}
          >
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </Button>
        </footer>
      </div>
    </div>
  );
}
