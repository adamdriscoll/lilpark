
import React, { useState } from 'react';
import { AnimatedSprite, useTick } from '@inlet/react-pixi';
import { useTextures } from './Textures';


const Bird = (props) => {
    const [x, setX] = useState(props.x);

    // custom ticker
    useTick(delta => {
        setX(x - delta);
    });

    const textures = useTextures("sprites/characters/BirdSprite.json", true);
    if (!textures) return <></>

    return <AnimatedSprite {...props} textures={textures} isPlaying={true} animationSpeed={0.5} x={x} />
}
export default Bird;