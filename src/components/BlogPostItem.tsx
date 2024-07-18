import { NewsArticle } from "@/types/types";
import { Box, Card, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const BlogPostItem = ({ item }: { item: NewsArticle }) => {
  const [hovering, setIsHovering] = useState(false);
  return (
    <StyledCard
      onMouseEnter={setIsHovering.bind(null, !hovering)}
      onMouseLeave={setIsHovering.bind(null, !hovering)}
      data-testid='news-card'
    >
      <StyledImageContainer>
        <img
          src={item.urlToImage!}
          width='100%'
          height='400px'
          style={{
            opacity: "10",
            scale: hovering ? "1.1" : "1",
            transition: "scale 330ms ease-in-out",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
            backgroundColor: "black",
            opacity: "0.2",
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            margin: 2,
            fontWeight: 700,
            fontSize: 20,
            color: "white",
            textShadow: "1px 1px 2px black, 0 0 1em black, 0 0 0.2em black",
            lineHeight: "1.2",
          }}
        >
          {item.title}
        </Box>
        <Box
          style={{
            display: "inline",
            backgroundColor: "InfoBackground",
            position: "absolute",
            left: "0px",
            top: "10px",
            color: "black",
            fontSize: "12px",
            padding: "4px 8px",
            margin: "0 10px",
          }}
        >
          {new Date(item!.publishedAt!).toLocaleString()}
        </Box>
        <Box
          style={{
            display: "inline",
            marginRight: 16,
            fontSize: "12px",
            backgroundColor: "Highlight",
            color: "white",
            position: "absolute",
            padding: "4px 8px",
            right: 0,
            top: "10px",
          }}
        >
          {item?.author ?? "N/A"}
        </Box>
      </StyledImageContainer>
      <Typography variant='body2' sx={{ padding: "8px", color: "black" }}>
        {item.description?.slice(50)}...
      </Typography>
    </StyledCard>
  );
};

const StyledCard = styled(Card)(({ theme }) => ({
  color: "green",
  margin: 0,
  padding: 0,
  width: 500,
  fontFamily: "sans-serif",
  [theme.breakpoints.down("lg")]: {
    width: 400,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const StyledImageContainer = styled(Box)(({ theme }) => ({
  height: 300,
  position: "relative",
  cursor: "pointer",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    height: 200,
  },
}));

export default BlogPostItem;
