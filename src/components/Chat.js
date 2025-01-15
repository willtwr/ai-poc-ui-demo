import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
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
import { grey } from '@mui/material/colors';

const MessageBubble = styled(Box)(({ isSystem }) => ({
    backgroundColor: isSystem ? grey[400] : grey[100],
    padding: 5,
    borderRadius: 8,
    width: '100%'
}));

function Chat() {
    // const theme = useTheme();
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
            <Grid2 container component={Paper}>
                <Grid2 item size={12}>
                    <Typography variant="h3" gutterBottom align="center">Chat</Typography>
                </Grid2>
                <Grid2 item size={12}>
                    <List sx={{ minHeight: "70vh" }}>
                        {chatHistory.map((itm, index) => {
                            return (
                                <ListItem key={index}>
                                    <MessageBubble key={index} isSystem={itm.role === "system"}>
                                        <Grid2 container>
                                            <Grid2 item size={1}>
                                                {itm.role === "system" ? <SmartToy /> : <Person />}
                                            </Grid2>
                                            <Grid2 item size={11}>
                                                <ListItemText primary={itm.content}></ListItemText>
                                            </Grid2>
                                        </Grid2>
                                    </MessageBubble>
                                </ListItem>
                            );
                        })}
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