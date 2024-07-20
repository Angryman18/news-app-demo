import useFetchPost from "@/hooks/useFetchPost";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { styled } from "@mui/material/styles";

const BlogPostDetails = () => {
  const params = useParams<{ id: string }>();

  const { fetchNewsPost, loading, posts } = useFetchPost(false);
  const post = posts?.[0];

  useEffect(() => {
    fetchNewsPost({ title: params.id }).catch(console.log);
  }, [fetchNewsPost, params.id]);

  if (loading) return <Loader />;
  if (!post) return <Typography>Sorry! Error Occured Fetching the Post</Typography>;

  return (
    <Box
      display='flex'
      marginX={{ lg: 32, md: 16, sm: 4 }}
      justifyContent='center'
      flexDirection='column'
      data-testid='post-detail'
    >
      <StyledImage src={post.urlToImage!} alt='post_image' />
      <StyledTypo variant='h3' align='left'>
        {post?.title}
      </StyledTypo>

      <Typography variant='subtitle1'>{new Date(post!.publishedAt!).toLocaleString()}</Typography>
      <Typography variant='body1' fontWeight={700}>
        Source - {post.source.name}
      </Typography>
      {post.author && <Typography variant='subtitle1'>Auther - {post.author}</Typography>}
      <Typography>{post.content}</Typography>
    </Box>
  );
};

const StyledTypo = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    ...theme.typography.h4,
  },
  [theme.breakpoints.down("sm")]: {
    ...theme.typography.h4,
  },
}));

const StyledImage = styled("img")(({ theme }) => ({
  width: "65%",
  [theme.breakpoints.down("xl")]: {
    width: "70%",
  },
  [theme.breakpoints.down("lg")]: {
    width: "80%",
  },
  [theme.breakpoints.down("md")]: {
    width: "95%",
  },
}));

export default BlogPostDetails;
