import { NextResponse } from "next/server";

export async function GET(request, { params }) // params are destructred from the response
{
  const postId=params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = await res.json();
  return NextResponse.json({ data });
}
