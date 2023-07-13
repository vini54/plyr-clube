import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  wrapBg: {
    width: "100%",
    background:
      "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  container: {
    height: "100dvh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: rem(16),
    padding: rem(48),
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    zIndex: 1,
    position: "relative",
    [theme.fn.smallerThan("sm")]: {
      padding: rem(24),
    },
  },
  title: {
    maxWidth: rem(720),
    color: theme.white,
    fontSize: rem(52),
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(40),
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      lineHeight: 1.3,
    },
  },
  description: {
    color: theme.white,
    maxWidth: 600,
    fontSize: theme.fontSizes.lg,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: theme.fontSizes.sm,
    },
  },
}));
