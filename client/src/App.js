import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";

const App = () => {
  return (
    <div>
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>
          Video Chat App
        </Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
};

export default App;
