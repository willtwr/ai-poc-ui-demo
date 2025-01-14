import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import SendIcon from "@mui/icons-material/Send";
import SmartToy from "@mui/icons-material/SmartToy";
import Person from "@mui/icons-material/Person";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    chatSection: {
        width: '100%',
        height: '80vh'
    },
    headBG: {
        backgroundColor: '#e0e0e0'
    },
    borderRight500: {
        borderRight: '1px solid #e0e0e0'
    },
    messageArea: {
        height: '70vh',
        overflowY: 'auto'
    }
});

function Chat() {
    const classes = useStyles();
    const [chatHistory, setChatHistory] = useState([{ role: "system", content: "Hi! How may I help you?" }]);
    const [msg, setMsg] = useState('');
    
    function onMsgChange(e) {
        setMsg(e.target.value);
    };

    function onKeyPress(e) {
        if (e.keyCode === 13) {
            addMessage();
        };
    };

    function addMessage() {
        if (msg !== "") {
            setChatHistory([...chatHistory, { role: "user", content: msg }, { role: "system", content: "Sorry, chat function not implemented... yet!" }]);
        };
        setMsg("");
    };

    return (
        <Container>
            <Grid2 container>
                <Grid2 item size={12} >
                    <Typography variant="h5">Chat</Typography>
                </Grid2>
            </Grid2>
            <Grid2 container component={Paper} className={classes.chatSection}>
                <Grid2 item size={12}>
                    <List className={classes.messageArea}>
                        {chatHistory.map((item, index) => {
                            return (
                                <ListItem key={index}>
                                    <Grid2 container component={Paper} size={12}>
                                        <Grid2 item size={1}>
                                            {item.role === "system" ? <SmartToy /> : <Person />}
                                        </Grid2>
                                        <Grid2 item size={11}>
                                            <ListItemText primary={item.content}></ListItemText>
                                        </Grid2>
                                    </Grid2>
                                </ListItem>
                            );
                        })};
                    </List>
                    <Divider />
                    <Grid2 container style={{ padding: '20px' }} spacing={2}>
                        <Grid2 item size={11}>
                            <TextField id="msgfield" onChange={onMsgChange} onKeyDown={onKeyPress} value={msg} label="Type something" fullWidth />
                        </Grid2>
                        <Grid2 size={1}>
                            <Fab color="primary" onClick={() => addMessage()} aria-label="add"><SendIcon /></Fab>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Container>
    );
};

export default Chat;