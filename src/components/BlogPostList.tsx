import useFetchPost from "@/hooks/useFetchPost";
import { Box, Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import BlogPostItem from "./BlogPostItem";
import Loader from "./Loader";
import { NewsArticle } from "@/types/types";

export default function BlogPostList() {
  const [page, setPage] = useState<number>(1);
  const { fetchAllPost, posts, loading, totalResult } = useFetchPost();

  useEffect(() => {
    fetchAllPost(page).catch(console.log);
  }, [fetchAllPost, page]);

  if (loading) return <Loader />;
  return (
    <>
      <Stack direction='row' gap={4} flexWrap='wrap' justifyContent='center'>
        {posts?.map((item: NewsArticle) => {
          return <BlogPostItem key={item.title} item={item} />;
        })}
        {!loading && !posts?.length ? <Box>No Post Available</Box> : null}
      </Stack>
      <Box display='flex' marginY={5} marginX={8} justifyContent='space-between'>
        {page > 1 && (
          <Button
            variant='contained'
            data-testid='prev-page-btn'
            onClick={setPage.bind(null, page - 1)}
          >
            Prev Page
          </Button>
        )}
        {page * 10 < totalResult! && (
          <Button
            variant='contained'
            sx={{ marginLeft: "auto" }}
            onClick={setPage.bind(null, page + 1)}
            data-testid='next-page-btn'
          >
            Next Page
          </Button>
        )}
      </Box>
    </>
  );
}
