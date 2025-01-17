"use client";

import { useRouter } from "next/navigation";

export default function PostButton({ id }) {
  const router = useRouter();
  function handleClick() {
    router.push(`/posts/${id}`);
  }

  return <button onClick={handleClick}>View Post</button>;
}
