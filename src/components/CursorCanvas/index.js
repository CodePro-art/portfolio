import React, { useRef, useEffect } from 'react';
import './index.css';

const CursorCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Define cursor effect parameters
        const params = {
            pointsNumber: 40,
            widthFactor: .3,
            mouseThreshold: .6,
            spring: .4,
            friction: .5,
            strokeColor: 'black'
        };

        const pointer = {
            x: .4 * window.innerWidth,
            y: .4 * window.innerHeight,
        };

        const trail = new Array(params.pointsNumber);
        for (let i = 0; i < params.pointsNumber; i++) {
            trail[i] = {
                x: pointer.x,
                y: pointer.y,
                dx: 0,
                dy: 0,
            };
        }

        let mouseMoved = false;
        // let cursorStrokeColor = 'black';

        const updateMousePosition = (eX, eY) => {
            pointer.x = eX - window.scrollX;
            pointer.y = eY - window.scrollY;
        };

        const update = (t) => {
            if (!mouseMoved) {
                pointer.x = (.5 + .3 * Math.cos(.002 * t) * (Math.sin(.005 * t))) * window.innerWidth;
                pointer.y = (.5 + .2 * (Math.cos(.005 * t)) + .1 * Math.cos(.01 * t)) * window.innerHeight;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            trail.forEach((p, pIdx) => {
                const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
                const spring = pIdx === 0 ? .4 * params.spring : params.spring;
                p.dx += (prev.x - p.x) * spring;
                p.dy += (prev.y - p.y) * spring;
                p.dx *= params.friction;
                p.dy *= params.friction;
                p.x += p.dx;
                p.y += p.dy;
            });

            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(trail[0].x, trail[0].y);

            for (let i = 1; i < trail.length - 1; i++) {
                const xc = .5 * (trail[i].x + trail[i + 1].x);
                const yc = .5 * (trail[i].y + trail[i + 1].y);
                ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
                ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
                ctx.stroke();
            }
            ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
            ctx.strokeStyle = params.strokeColor;
            ctx.stroke();

            window.requestAnimationFrame(update);
        };

        const setupCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("mousemove", e => {
            mouseMoved = true;
            updateMousePosition(e.pageX, e.pageY);
        });
        window.addEventListener("touchmove", e => {
            mouseMoved = true;
            updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
        });
        window.addEventListener("resize", setupCanvas);

        setupCanvas();
        update(0);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("touchmove", updateMousePosition);
            window.removeEventListener("resize", setupCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} className="cursor-canvas" />;
};

export default CursorCanvas;
