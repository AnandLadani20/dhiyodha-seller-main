import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Fab from "@mui/material/Fab";
import { forwardRef, useState } from "react";

const AsyncForm = forwardRef(({ onSubmit = () => {}, buttonText = "Save", buttonProps, children, boxProps, mt = 4 }, ref) => {
  const [Loading, setLoading] = useState(false);

  return (
    <form
      onSubmit={async (e, v) => {
        e.preventDefault();
        setLoading(true);
        try {
          await onSubmit(e, v);
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      }}
      ref={ref}
    >
      <Box {...boxProps}>{children}</Box>
      <Box mt={mt} maxWidth="200px" mx="auto" {...buttonProps}>
        {Loading ? (
          <Fab color="primary" size="small">
            <CircularProgress size={22} />
          </Fab>
        ) : (
          <Button id="SubmitButton" size="medium" type="submit">
            {buttonText}
          </Button>
        )}
      </Box>
    </form>
  );
});
export default AsyncForm;
