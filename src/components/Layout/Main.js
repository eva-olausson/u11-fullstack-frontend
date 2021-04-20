import React from "react";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";

const Main = ({ children }) => (
  <div>
    <Header />
    <div className="wrapper">
      <Grid container justify="center">
        <Grid item xs={12} sm={6} style={{ marginTop: 30 }}>
          <main>{children}</main>
        </Grid>
      </Grid>
    </div>
  </div>
);

export default Main;
