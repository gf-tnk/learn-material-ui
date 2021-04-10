import React from "react";
import { Modal, Paper, Box, Button, IconButton, Grid } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import { useStyles } from "./style";

interface Props {
  isOpen: boolean;
  title: string;
  desc?: string;
  mascot?: string;
  handleClose: () => void;
}

const ConfirmModal: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <>
      <Modal
        open={props.isOpen}
        onClose={props.handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className={classes.modal}
        container={() => document.querySelector("#root") as HTMLElement}
      >
        <Paper className={classes.paperModal}>
          <IconButton
            className={classes.closeIcon}
            aria-label="ยกเลิก"
            onClick={props.handleClose}
          >
            <CloseIcon />
          </IconButton>
          <Box justifyContent="center" display="flex">
            <Box p={4} textAlign="center">
              <Grid container>
                {props.mascot && (
                  <Grid item xs={12} sm={6}>
                    <Box
                      style={{ height: "100%" }}
                      display="flex"
                      alignItems="center"
                    >
                      <img
                        src={props.mascot}
                        alt="mascot"
                        className={classes.mascotImg}
                      />
                    </Box>
                  </Grid>
                )}
                <Grid item xs={12} sm={props.mascot ? 6 : 12}>
                  <h2 className="wh2" id="modal-title">
                    {props.title}
                  </h2>
                  <p className="wd2" id="modal-description">
                    {props.desc}
                  </p>
                  {props.children}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Modal>
    </>
  );
};

export default ConfirmModal;
