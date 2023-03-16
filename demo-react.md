App.js
```
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      {/* <Header />
      <Content />
      <Footer /> */}
      <Layout />
    </div>
  );
}

export default App;
```

App.css
```
.toolbar {
  display: flex;
  justify-content: space-between;
}

.main-content {
  margin-top: 64px;
}

.list-item {
  cursor: pointer;
}

.selected-item {
  background-color: #f0f0f0;
}
```

Header.js
```
import React from "react";
function Header() {
  return (
    <header>
      <h1>My Website</h1>
      <img style={{ width: "100px" }} src={require("./logo.png")} alt="Logo" />
    </header>
  );
}
export default Header;
```

Sidebar.js
```
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { Home, Settings } from "@mui/icons-material";
import { Menu, Close } from "@mui/icons-material";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [toggleIcon, setToggleIcon] = useState(<Close />);
  const [title, setTitle] = useState("Side Nav");
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setToggleIcon(isOpen ? <Menu /> : <Close />);
    setTitle(isOpen ? "" : "Side Nav");
  };
  return (
    <div style={{ width: isOpen ? "240px" : "40px", transition: "all 0.3s" }}>
      {title} <IconButton onClick={toggleSidebar}>{toggleIcon}</IconButton>
      {isOpen || false ? (
        <List>
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </ListItemButton>
        </List>
      ) : (
        <div>
          <IconButton>
            <Home />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      )}
    </div>
  );
}
export default Sidebar;
```
MainContent.js
```
import { Typography } from "@mui/material";

function MainContent() {
  return (
    <div style={{ marginLeft: "10px", transition: "all 0.3s" }}>
      <Typography variant="h2">Welcome to My App</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum
        nulla vitae augue consequat, euismod faucibus ipsum vehicula. Nulla
        consequat est vitae est placerat, eget maximus turpis vulputate.
        Pellentesque vitae lacinia nibh. Sed pellentesque, sapien ut laoreet
        bibendum, metus tellus pulvinar tellus, id lacinia lacus magna quis est.
      </Typography>
      <img src="https://placekitten.com/400/300" alt="Kitten" />
    </div>
  );
}
export default MainContent;
```
Footer.js
```
import { Typography, Paper } from "@mui/material";
function Footer() {
  return (
    <Paper elevation={3}>
      <Typography variant="body1" align="center">
        This is the footer
      </Typography>
    </Paper>
  );
}
export default Footer;
```

Layout.js
```
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import { Box } from "@mui/material";

function Layout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Box sx={{ flexGrow: 0 }}>
        <Header />
      </Box>
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Box sx={{ flexGrow: 0, width: "240px" }}>
          <Sidebar />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <MainContent />
        </Box>
      </Box>
      <Box sx={{ flexGrow: 0 }}>
        <Footer />
      </Box>
    </Box>
  );
}

export default Layout;
```


