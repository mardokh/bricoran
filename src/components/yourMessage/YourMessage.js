import styles from './yourMessage.module.css'
import { useTranslation } from "react-i18next";
import { Box, TextField, Button, Typography } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useRef } from 'react';


const YourMessage = () => {

  const { t } = useTranslation();


  const form = useRef()


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("Message sent successfully");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          console.log("Failed to send message");
        }
      );
  };


  return (
    <Box
      component="form"
      ref={form}
      onSubmit={sendEmail}
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