import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <StyledBar>
        <Typography fontFamily='monospace' fontWeight={700} variant='h3' marginTop={1}>
          News Station
        </Typography>
        <Typography variant='body2' marginTop={1}>
          Today : {new Date().toLocaleString()}
        </Typography>
      </StyledBar>
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {children}
      </Box>
    </Container>
  );
};

const StyledBar = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  textAlign: "center",
  position: "sticky",
  top: 0,
  backgroundColor: "Background",
  paddingBottom: 2,
  zIndex: 10,
  borderBottom: "1px solid gray",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "center",
  },
}));

export default Layout;
