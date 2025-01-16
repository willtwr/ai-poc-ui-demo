import React from "react";
import Header from "components/Header";
import Chat from "components/Chat";
import Canvas from 'components/DrawingCanvas';
import Grid2 from '@mui/material/Grid2';

function Home() {
    return (
        <div>
            <Header />
            <Grid2 container>
                <Grid2 item size={6}>
                    <Chat />
                </Grid2>
                <Grid2 item size={6}>
                    <Canvas />
                </Grid2>
            </Grid2>
        </div>
    );
}

export default Home;