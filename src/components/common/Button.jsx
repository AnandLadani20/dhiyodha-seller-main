//react
import { forwardRef, useState } from "react";

//mui
import MuiButton from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { Fab, Grid } from "@mui/material";

const Button = forwardRef(
  ({ children, onClick = () => {}, disabled, id = "", ...rest }, ref) => {
    const [loading, setLoading] = useState(false);
    const onclick = async (e, v) => {
      setLoading(true);
      await onClick(e, v);
      setLoading(false);
    };

    return loading ? (
      <Grid container>
        <Fab color="primary" size="small">
          <CircularProgress color="secondary" size={22} />
        </Fab>
      </Grid>
    ) : (
      <MuiButton
        id={id}
        onClick={onclick}
        disabled={disabled}
        {...rest}
        ref={ref}
      >
        {children}
      </MuiButton>
    );
  }
);

export default Button;
