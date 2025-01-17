import PostButton from "./PostButton";

export default function Post({ title, body, id }) {
  return (
    <div style={{border:"1px solid black",padding:"50px",margin:"50px"}}>
      <h3>{title}</h3>
      <p>{body}</p>
      <PostButton id={id} />
    </div>
  );
}
 