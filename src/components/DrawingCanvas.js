import React, { useRef } from "react";
import CanvasDraw from "react-canvas-draw";

function Canvas() {
    const canvasRef = useRef(null);

    const startDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;
    };

    return (
        <CanvasDraw canvasHeight={700} canvasWidth={700} ref={canvasRef} onMousedown={startDrawing} />
    );
};

export default Canvas;