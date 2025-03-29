import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

type Author = {
  avatarUrl: string;
  name: string;
  role: string;
};

type Content = {
  type: "paragraph" | "link";
  content: string | Content | Content[];
  url?: string;
};

export type PostType = {
  id: number;
  author: Author;
  content: Content[];
  publishedAt: Date;
};

type PostProps = {
  post: PostType;
};

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState(["Post muito bacana, hein?!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    post.publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const renderContent = (line: Content, index: number) => {
    if (line.type === "link") {
      return (
        <a key={index} href={line.url}>
          {typeof line.content === "string"
            ? line.content
            : Array.isArray(line.content)
            ? line.content.map(renderContent)
            : renderContent(line.content, index)}{" "}
        </a>
      );
    }

    return (
      <p key={index}>
        {typeof line.content === "string"
          ? line.content
          : Array.isArray(line.content)
          ? line.content.map(renderContent)
          : renderContent(line.content, index)}
      </p>
    );
  };

  function handleCreateNewComment(e: FormEvent) {
    e.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity("");
    setNewCommentText(e.target.value);
  }

  function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity("Este campo é obrigatório");
  }

  function deleteComment(commentToDelete: string) {
    setComments(comments.filter((comment) => comment !== commentToDelete));
  }

  const isNewCommentEmpty = newCommentText.trim().length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          Publicado {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>{post.content.map(renderContent)}</div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea
          placeholder="Deixe seu comentário"
          onChange={handleNewCommentChange}
          value={newCommentText}
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
