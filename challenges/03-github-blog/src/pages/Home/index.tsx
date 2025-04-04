import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaArrowUpRightFromSquare,
  FaBuilding,
  FaGithub,
  FaUserGroup,
} from "react-icons/fa6";
import ReactMarkdown from "react-markdown";
import * as z from "zod";
import { api } from "../../lib/axios";
import { formatDateDistance } from "../../utils/formatters";
import {
  HomeContainer,
  PostCard,
  PostDate,
  PostDescription,
  PostHeader,
  PostsContainer,
  PostTitle,
  SearchContainer,
  SearchCount,
  SearchTitle,
  SearchTitleContainer,
  UserCard,
  UserCardDescription,
  UserCardGithub,
  UserCardInfo,
  UserCardName,
  UserCardSocial,
  UserCardSocials,
  UserCardTitle,
} from "./styles";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormValues = z.infer<typeof searchFormSchema>;

type UserType = {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  followers: number;
  company: string;
};

export type PostType = {
  number: number;
  title: string;
  created_at: string;
  body: string;
  user: UserType;
  comments: number;
  html_url: string;
};

export function Home() {
  const [user, setUser] = useState<UserType>();
  const [posts, setPosts] = useState<PostType[]>([]);

  const { handleSubmit, register } = useForm<SearchFormValues>({
    resolver: zodResolver(searchFormSchema),
  });

  async function fetchPosts(query?: string) {
    try {
      const response = await api("/search/issues", {
        params: {
          q: `${query} repo:Majortheus/rocketseat-reactcourse`,
        },
      });
      setPosts(response.data.items);
      console.log({ response });
    } catch (error) {
      console.log({ error });
    }
  }

  async function handleFindIssues(data: SearchFormValues) {
    fetchPosts(data.query);
  }

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api("/users/majortheus");
        setUser(response.data);
      } catch (error) {
        console.log({ error });
      }
    }

    fetchUser();
  }, []);

  useEffect(() => {
    fetchPosts();
  }, []);

  if (!user) {
    return (
      <HomeContainer>
        <UserCard>
          <UserCardName>Carregando...</UserCardName>
        </UserCard>
      </HomeContainer>
    );
  }

  return (
    <HomeContainer>
      <UserCard>
        <img src={user.avatar_url} />
        <UserCardInfo>
          <UserCardTitle>
            <UserCardName>{user.name}</UserCardName>
            <UserCardGithub href={user.html_url} target="_blank">
              Github
              <FaArrowUpRightFromSquare size={12} />
            </UserCardGithub>
          </UserCardTitle>
          <UserCardDescription>{user.bio}</UserCardDescription>

          <UserCardSocials>
            <UserCardSocial>
              <FaGithub size={18} />
              {user.login}
            </UserCardSocial>
            <UserCardSocial>
              <FaBuilding size={18} />
              {user.company}
            </UserCardSocial>
            <UserCardSocial>
              <FaUserGroup size={18} />
              {user.followers} Seguidores
            </UserCardSocial>
          </UserCardSocials>
        </UserCardInfo>
      </UserCard>

      <SearchContainer onSubmit={handleSubmit(handleFindIssues)}>
        <SearchTitleContainer>
          <SearchTitle>Publicações</SearchTitle>
          <SearchCount>6 publicações</SearchCount>
        </SearchTitleContainer>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register("query")}
        />
      </SearchContainer>

      <PostsContainer>
        {posts.map((post) => (
          <PostCard key={post.number} to={`/post/${post.number}`}>
            <PostHeader>
              <PostTitle>{post.title}</PostTitle>
              <PostDate>{formatDateDistance(post.created_at)}</PostDate>
            </PostHeader>

            <PostDescription>
              <ReactMarkdown>
                {post.body.substring(0, 200) + "..."}
              </ReactMarkdown>
            </PostDescription>
          </PostCard>
        ))}
      </PostsContainer>
    </HomeContainer>
  );
}
