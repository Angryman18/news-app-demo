import useFetchPost from "@/hooks/useFetchPost";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import BlogPostItem from "./BlogPostItem";
import Loader from "./Loader";
import { NewsArticle } from "@/types/types";

export default function BlogPostList() {
  const [page, setPage] = useState<number>(1);
  const { fetchNewsPost, posts, loading, totalResult } = useFetchPost(true);

  useEffect(() => {
    fetchNewsPost({ page }).catch(console.log);
  }, [fetchNewsPost, page]);

  if (loading) return <Loader />;
  return (
    <>
      <Stack direction='row' gap={4} flexWrap='wrap' justifyContent='center'>
        {posts?.map((item: NewsArticle) => {
          return <BlogPostItem key={item.title} item={item} />;
        })}
        {!loading && !posts?.length ? <Box>No Post Available</Box> : null}
      </Stack>
      <Box marginLeft='auto' marginRight={{ md: 8, sm: 2, xs: 0 }} marginTop={5}>
        <Typography>
          Page: {page}/{Math.ceil(totalResult! / 10)}
        </Typography>
      </Box>
      <Box
        display='flex'
        marginY={5}
        marginX={{ md: 8, sm: 2, xs: 0 }}
        justifyContent='space-between'
      >
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
