import React, { useRef, useEffect } from 'react';
import { useTheme } from 'components/ThemeProvider';
import './index.css';

const CursorCanvas = () => {
    const canvasRef = useRef(null);
    const theme = useTheme();
    document.addEventListener('DOMContentLoaded', () => {
    
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Mouse click effect handler
        const handleClick = (e) => {
            const x = e.pageX;
            const y = e.pageY;
    
            const span = document.createElement('span');
            span.classList.add('clickEffect');
            span.style.top = `${y}px`;
            span.style.left = `${x}px`;
            document.body.appendChild(span);
    
            setTimeout(() => {
                span.remove();
            }, 600);
        };
        document.addEventListener('click', handleClick);

        // Scale controls the size of the trail (1 = full size, 0 = disappeared)
        let scale = 1;
        let idleTimeout; 

        const params = {
            pointsNumber: 40,
            widthFactor: .3,
            mouseThreshold: .6,
            spring: .4,
            friction: .5,
            strokeColor: theme.themeId === 'dark' ? 'white' : 'black',
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
        if (mouseMoved) {
            console.log('');
        }

        const updateMousePosition = (eX, eY) => {
            pointer.x = eX - window.scrollX;
            pointer.y = eY - window.scrollY;

            scale = 1; // grow back to full size

            // Reset idle timer
            if (idleTimeout) clearTimeout(idleTimeout);
            idleTimeout = setTimeout(() => {
            // Start shrinking after 1.5 seconds of no movement
            idleTimeout = null;
            }, 700);

        };

        const update = (t) => {
            // Demo effect
            // if (!mouseMoved) {
            //     pointer.x = (.5 + .3 * Math.cos(.002 * t) * (Math.sin(.005 * t))) * window.innerWidth;
            //     pointer.y = (.5 + .2 * (Math.cos(.005 * t)) + .1 * Math.cos(.01 * t)) * window.innerHeight;
            // }

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // If idle timer passed, shrink scale gradually
            if (!idleTimeout && scale > 0) {
                scale -= 0.02; // speed of shrinking
                if (scale < 0) scale = 0;
            }

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
                ctx.lineWidth = params.widthFactor * (params.pointsNumber - i) * scale;;
                ctx.strokeStyle = params.strokeColor;
                ctx.stroke();
            }
            ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
            ctx.lineWidth = params.widthFactor * scale;
            ctx.strokeStyle = params.strokeColor;
            ctx.stroke();

            window.requestAnimationFrame(update);
        };

        const setupCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleThemeChange = () => {
            params.strokeColor = theme.themeId === 'dark' ? 'white' : 'black';
        };
        
        const buttonsOrLinks = document.querySelectorAll('button, a, input, label, select, textarea, icon, .button, .icon, i, a');

        buttonsOrLinks.forEach(e => {
            e.addEventListener('mouseover', () => {
                // Update pointsNumber and adjust stroke properties
                params.pointsNumber = 30;
                params.widthFactor = 0.5;
                params.strokeColor = theme.themeId === 'dark' ? '#4ed2fe' : '#91e4ff';
                ctx.shadowColor = '#00befd';
                ctx.shadowBlur = 2;
            });
        
            e.addEventListener('mouseout', () => {
                // Reset to the original parameters when not hovering
                params.pointsNumber = 40;
                params.widthFactor = 0.3;
                params.strokeColor = theme.themeId === 'dark' ? 'white' : 'black';
                ctx.shadowBlur = 0;
            });
        });

        // Add event listener for theme change
        window.addEventListener("mousemove", e => {
            mouseMoved = true;
            updateMousePosition(e.pageX, e.pageY);
        });
        window.addEventListener("touchmove", e => {
            mouseMoved = true;
            updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
        });
        window.addEventListener("resize", setupCanvas);

        // Listen for changes in the theme
        handleThemeChange();
        setupCanvas();
        update(0);

        return () => {
            // Cleanup event listener on component unmount
            document.removeEventListener('click', handleClick);
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("touchmove", updateMousePosition);
            window.removeEventListener("resize", setupCanvas);
        };
    }, [theme.themeId]);

    return <canvas ref={canvasRef} className="cursor-canvas" />;
};

export default CursorCanvas;
