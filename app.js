import points from "./data.js";

const drawCircle = (canvas, point) => {
    const radius = 6;

    const circle = new fabric.Circle({
        radius,
        hoverCursor: "pointer",
        strokeWidth: 2,
        fill: "rgba(128,128,128,0.5)",
        stroke: "#0000ff",
        selectable: false,
        left: point.x - radius,
        top: point.y - radius,
    });
    canvas.add(circle);
};

const drawLine = (canvas, start, end) => {
    const line = new fabric.Line([start.x, start.y, end.x, end.y], {
        stroke: "#ff0000",
        strokeWidth: 1,
        selectable: false,
        evented: false,
    });
    canvas.add(line);
};

const initialiseCanvas = () => {
    const canvas = new fabric.Canvas("canvas");

    canvas.on("mouse:over", function (e) {
        if (e.target) {
            e.target.set("stroke", "#00ffff");
            e.target.set("fill", "#000");
            canvas.renderAll();
        }
    });

    canvas.on("mouse:out", function (e) {
        if (e.target) {
            e.target.set("stroke", "#0000ff");
            e.target.set("fill", "rgba(128,128,128,0.5)");
            canvas.renderAll();
        }
    });

    for (let i = 0; i < points.length - 1; i++) {
        drawLine(canvas, points[i], points[i + 1]);
    }

    points.forEach((point) => {
        drawCircle(canvas, point);
    });
};

window.onload = () => {
    initialiseCanvas();
};
