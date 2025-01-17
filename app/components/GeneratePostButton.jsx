"use client";

export default  function GeneratePostButton() {
  function handleClick() {
    fetch("http://localhost:3000/api/posts", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  return <button onClick={handleClick}>Generate Post</button>;
}
