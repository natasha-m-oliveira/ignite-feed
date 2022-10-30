import "./global.css";

import { Header } from "./components/Header";
import { Content, Post } from "./components/Post";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { posts } from "./utils/posts";

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
              author={post.author}
              content={post.content as Content[]}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
