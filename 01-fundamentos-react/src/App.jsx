import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "http://github.com/majortheus.png",
      name: "Matheus Limão",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "paragraph",
        content: {
          type: "link",
          content: "👉 jane.design/doctorcare",
          url: "#",
        },
      },
      {
        type: "paragraph",
        content: [
          { type: "link", content: "#novoprojeto", url: "#" },
          { type: "link", content: "#nlw", url: "#" },
          { type: "link", content: "#rocketseat", url: "#" },
        ],
      },
    ],
    publishedAt: new Date("2025-03-28T22:18:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "http://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      // { type: "link", content: "jane.design/doctorcare", url: "#" },
      // { type: "link", content: "#novoprojeto", url: "#" },
      // { type: "link", content: "#nlw", url: "#" },
      // { type: "link", content: "#rocketseat", url: "#" },
    ],
    publishedAt: new Date("2025-03-20T22:18:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
