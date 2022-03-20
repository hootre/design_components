import { Box, Typography } from "@mui/material";
import { Header_box } from "./styles";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <Header_box>
      <Box
        component="header"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="10vh"
        bgcolor="#5AA9E6"
      >
        <Typography component="h1" variant="h5" color="#F9F9F9">
          <Link to="/">HOME</Link>
          <Link to="/components">COMPONENTS</Link>
        </Typography>
      </Box>
    </Header_box>
  );
}
