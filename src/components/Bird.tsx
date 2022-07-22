
import React, { useState } from 'react';
import { AnimatedSprite, useTick } from '@inlet/react-pixi';
import { useTextures } from './Textures';

const Bird = (props) => {
    const [x, setX] = useState(props.x);
    useTick(delta => {
        const xLocation = x - delta;
        if (xLocation < -16) {
            props.onFlewAway(props.id);
        }
        setX(xLocation);
    });

    const textures = useTextures("sprites/characters/BirdSprite.json", true);
    if (!textures) return <></>

    return <AnimatedSprite {...props} textures={textures} isPlaying={true} animationSpeed={0.5} x={x} />
}
export default Bird;