import useFetchPost from "@/hooks/useFetchPost";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import post from "./post";
import BlogPostItem from "./BlogPostItem";

export default function BlogPostList() {
  const [posts, setPosts] = useState<Record<string, any>>(post);
  // const { fetchAllPost } = useFetchPost();

  // useEffect(() => {
  //   fetchAllPost().then(setPosts);
  // }, [fetchAllPost]);

  console.log(posts);

  return (
    <Stack direction='row' gap={4} flexWrap='wrap' justifyContent='center'>
      {posts.articles.map((item: any) => {
        return <BlogPostItem key={item.title} item={item} />;
      })}
    </Stack>
  );
}
