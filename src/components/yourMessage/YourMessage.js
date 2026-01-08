import styles from './yourMessage.module.css'
import { useTranslation } from "react-i18next";
import { Box, TextField, Button, Typography } from "@mui/material";


const YourMessage = () => {

    const { t } = useTranslation();

    const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const formValues = {
      fullName: data.get("fullName"),
      email: data.get("email"),
      message: data.get("message"),
    };

    console.log(formValues);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 800,
        mx: "auto",
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h5" align="center">
        <p className={styles.title}>{t("yourMessage.title")}</p>
      </Typography>

      <TextField
        label={t("yourMessage.yourName")}
        name="fullName"
        variant="standard"  // <-- line only
        required
        fullWidth
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        variant="standard"  // <-- line only
        required
        fullWidth
      />

      <TextField
        label="Message"
        name="message"
        multiline
        rows={4}
        variant="standard"  // <-- line only
        required
        fullWidth
      />

        <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{
            mt: 2,
            backgroundColor: "#FFFFFF",       // default color
            "&:hover": { backgroundColor: "#FFFFFF" },  // hover color
            "&:active": { backgroundColor: "#FFFFFF" }, // color when clicked
            color: "#000000"
        }}
        >
        <span>{t("yourMessage.btnSend")}</span>
        </Button>
    </Box>
  );

}


export default YourMessage