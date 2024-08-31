const CrumpleEffect = () => {
    return (
        <svg width="0" height="0">
            <defs>
                <filter id="crumple-effect-2">
                    <feTurbulence 
                        type="fractalNoise" 
                        baseFrequency="0.02" 
                        numOctaves="5" 
                        result="turbulence">
                        <animate 
                            attributeName="baseFrequency" 
                            values="0.1;0.2" 
                            keyTimes="0;1" 
                            dur="10s" 
                            repeatCount="indefinite" 
                        />
                    </feTurbulence>
                    <feDisplacementMap 
                        in2="turbulence" 
                        in="SourceGraphic" 
                        scale="0">
                        <animate 
                            attributeName="scale" 
                            values="30;60" 
                            keyTimes="0;1" 
                            dur="10s" 
                            repeatCount="indefinite" 
                        />
                    </feDisplacementMap>
                </filter>
                
                <filter id="crumple-effect-3">
                    <feTurbulence 
                        type="fractalNoise" 
                        baseFrequency="0.02" 
                        numOctaves="5" 
                        result="turbulence">
                        <animate 
                            attributeName="baseFrequency" 
                            values="0.6;0.3;0.2;0.1" 
                            keyTimes="0;0.5;0.75;1" 
                            dur="15s" 
                            repeatCount="indefinite" 
                        />
                    </feTurbulence>
                    <feDisplacementMap 
                        in2="turbulence" 
                        in="SourceGraphic" 
                        scale="0">
                        <animate 
                            attributeName="scale" 
                            values="0;50;75;100" 
                            keyTimes="0;0.5;0.75;1" 
                            dur="60s" 
                            repeatCount="indefinite" 
                        />
                    </feDisplacementMap>
                </filter>
            </defs>
        </svg>
    );
};

export default CrumpleEffect;