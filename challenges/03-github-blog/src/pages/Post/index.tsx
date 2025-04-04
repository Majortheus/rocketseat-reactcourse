import { useEffect, useState } from "react";
import {
  FaArrowUpRightFromSquare,
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from "react-icons/fa6";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { formatDateDistance } from "../../utils/formatters";
import { PostType } from "../Home";
import {
  PostContainer,
  PostContent,
  UserCard,
  UserCardBack,
  UserCardGithub,
  UserCardNav,
  UserCardSocial,
  UserCardSocials,
  UserCardTitle,
} from "./styles";

export function Post() {
  const { id } = useParams();
  const [post, setPost] = useState<PostType>();

  console.log({ id });

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await api(
          `/repos/Majortheus/rocketseat-reactcourse/issues/${id}`
        );
        setPost(response.data);
      } catch (error) {
        console.log({ error });
      }
    }

    fetchPost();
  }, [id]);

  if (!post) {
    return (
      <PostContainer>
        <UserCard>
          <UserCardTitle>Carregando...</UserCardTitle>
        </UserCard>
      </PostContainer>
    );
  }

  return (
    <PostContainer>
      <UserCard>
        <UserCardNav>
          <UserCardBack to="/">
            <FaChevronLeft size={12} />
            <span>Voltar</span>
          </UserCardBack>
          <UserCardGithub href={post.html_url} target="_blank">
            Ver no Github
            <FaArrowUpRightFromSquare size={12} />
          </UserCardGithub>
        </UserCardNav>
        <UserCardTitle>{post.title}</UserCardTitle>
        <UserCardSocials>
          <UserCardSocial>
            <FaGithub size={18} />
            {post.user.login}
          </UserCardSocial>
          <UserCardSocial>
            <FaCalendarDay size={18} />
            {formatDateDistance(post.created_at)}
          </UserCardSocial>
          <UserCardSocial>
            <FaComment size={18} />
            {post.comments} comentários
          </UserCardSocial>
        </UserCardSocials>
      </UserCard>
      <PostContent>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  );
}
