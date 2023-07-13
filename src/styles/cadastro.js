import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    height: "100dvh",
    display: "flex",
    alignItems: "center",
    position: "relative",
    // overflow: "hidden",
  },
  formDiv: {
    height: "100%",
    overflowY: "auto",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: rem(8),
    padding: rem(24) + " " + rem(36),
    transition: ".2s ease",

    "::-webkit-scrollbar": { width: 8 },

    "::-webkit-scrollbar-thumb": {
      background: "#FF6600",
      border: "2px transparent solid",
      borderTopWidth: 8,
      borderBottomWidth: 8,
      borderRadius: 32,
      backgroundClip: "padding-box",
    },

    [theme.fn.smallerThan(860)]: {
      position: "absolute",
      width: "80%",
      left: "10%",
      zIndex: 2,
      background: "rgba(255, 255, 255, 0.75)",
      borderRadius: rem(16),
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(4.1px)",
      WebkitBackdropFilter: "blur(4.1px)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
    },
    [theme.fn.smallerThan(768)]: {
      width: "92%",
      left: "4%",
    },
    [theme.fn.smallerThan(510)]: {
      position: "static",
      width: "100%",
      height: "100%",
      background: "#fff",
      padding: rem(16),
    },
  },
  formwrap: {
    display: "flex",
    flexDirection: "column",
    gap: rem(16),

    [theme.fn.smallerThan(575)]: {
      gap: rem(4),
    },
  },
  imageBg: {
    width: "54%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    transition: ".2s ease",

    [theme.fn.largerThan(1200)]: {
      maxWidth: "880px",
    },
    [theme.fn.smallerThan(1200)]: {
      width: "48%",
    },
    [theme.fn.smallerThan(860)]: {
      width: "100%",
    },
    [theme.fn.smallerThan(510)]: {
      display: "none",
    },
  },
  checkbox: {
    [theme.fn.smallerThan(860)]: {
      marginTop: rem(8),
    },
  },
}));
