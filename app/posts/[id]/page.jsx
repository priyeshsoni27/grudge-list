import Post from "@/app/components/Post";

async function getPosts(id) {
  const res = await fetch(`http://localhost:3001/api/posts/${id}`);
  const data = await res.json();
  return data.data;
}

export default async function PostPage({ params }) {
  const post = await getPosts(params.id);

  console.log("pospostpost",params)
  return (
    <>
      <h1>Post</h1>
      <Post id={post.id} title={post.title} body={post.body} />
    </>   
  );
}
