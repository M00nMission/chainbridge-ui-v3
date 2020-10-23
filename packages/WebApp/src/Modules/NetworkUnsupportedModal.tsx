import React from "react";

import { makeStyles, createStyles, ITheme } from "@imploy/common-themes";
import CustomModal from "../Components/Custom/CustomModal";
import {
  Button,
  ExclamationCircleInverseSvg,
  Typography,
} from "@imploy/common-components";

const useStyles = makeStyles(({ constants, palette }: ITheme) =>
  createStyles({
    root: {
      width: "100%",
    },
    inner: {
      width: "100% !important",
      maxWidth: "unset !important",
      borderRadius: "4px",
      display: "flex",
      flexDirection: "row",
      padding: `${constants.generalUnit * 6}px ${constants.generalUnit * 7}px`,
    },
    heading: {
      marginBottom: constants.generalUnit,
    },
    icon: {
      height: 20,
      width: 20,
      marginTop: constants.generalUnit * 0.8,
      marginRight: constants.generalUnit * 2,
      fill: palette.additional["gray"][7],
    },
    buttons: {
      display: "flex",
      flexDirection: "row",
      marginTop: constants.generalUnit * 5,
      "& > *": {
        marginRight: constants.generalUnit,
      },
    },
    button: {
      borderColor: palette.additional["gray"][8],
      color: palette.additional["gray"][8],
      "&:hover": {
        borderColor: palette.additional["gray"][8],
        backgroundColor: palette.additional["gray"][8],
        color: palette.common.white.main,
      },
    },
  })
);

interface INetworkUnsupportedModalProps {
  open: boolean;
  close: () => void;
  network: string;
}

const NetworkUnsupportedModal: React.FC<INetworkUnsupportedModalProps> = ({
  open,
  close,
  network,
}) => {
  const classes = useStyles();

  return (
    <CustomModal
      className={classes.root}
      injectedClass={{
        inner: classes.inner,
      }}
      active={open}
    >
      <section>
        <ExclamationCircleInverseSvg className={classes.icon} />
      </section>
      <section>
        <Typography className={classes.heading} variant="h3" component="h3">
          Network Unsupported
        </Typography>
        <Typography component="p" variant="body1">
          This app does not currently support transfers on {network}. Please
          change networks from within your browser wallet.
        </Typography>
        <section className={classes.buttons}>
          <Button
            onClick={close}
            size="small"
            className={classes.button}
            variant="outline"
          >
            OK
          </Button>
          <Button size="small" className={classes.button} variant="outline">
            Ask a question on Discord
          </Button>
        </section>
      </section>
    </CustomModal>
  );
};

export default NetworkUnsupportedModal;