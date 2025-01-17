import Post from "../components/Post";

async function getPosts() {
  const res = await fetch("http://localhost:3001/api/posts");
  const data = await res.json();
  return data.data;
}

export default async function Posts() {
  const postData = await getPosts();
  return (
    <>
      <h1>Post</h1>
      {postData?.map((post) => (
        <Post
          key={post?.id}
          id={post?.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </>
  );
}
