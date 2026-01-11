import styles from './yourMessage.module.css'
import { useTranslation } from "react-i18next";
import { Box, TextField, Button, Typography } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from 'react';
import HorizontalDotstLoader from '../../_utils/customLoaders/HorizontalDotstLoader'
import { FaCheck } from "react-icons/fa";


const YourMessage = () => {

  // STATES //
  const [msgLoad, setMsgLoad] = useState(false)
  const [successSend, setSuccessSend] = useState(false)


  // TRANSLATE FUNCTION //
  const { t } = useTranslation();


  // REFERENCES //
  const form = useRef()


  // MSG HANDLER //
  const sendEmail = async (e) => {
    e.preventDefault();
    setMsgLoad(true)
    try {
      // Send message
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      // Clear form
      form.current.reset()
    }
    catch (err) {
      console.error(err)
    }
    finally {
      setMsgLoad(false)
      setSuccessSend(true)
    }
  }


  useEffect(() => {
    if (!successSend) return;

    const timer = setTimeout(() => {
      setSuccessSend(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [successSend]);



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
            color: "#000000",
            height: "50px"
        }}
        >
        {msgLoad ? <HorizontalDotstLoader/> : successSend ? <span className={styles.msgSuccess}>Successfully send <FaCheck/></span> : `${t("yourMessage.btnSend")}`}
        </Button>
    </Box>
  );

}


export default YourMessage