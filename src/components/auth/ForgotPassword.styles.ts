import { makeStyles } from "@material-ui/core";

export const useForgotPasswordStyle = makeStyles(() => ({
  buttonContainer: {
    textAlign: "center",
  },
  button: {
    fontSize: 10,
    padding: 0,
    fontWeight: "bold",
    borderBottom: "1px dotted #fff",
    "&:hover": {
      borderBottom: "1px dashed #555",
    },
  },
}));
