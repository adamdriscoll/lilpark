import React from 'react';
import { Sprite } from '@inlet/react-pixi';
import { useTextures } from './Textures';

const TexturedObject = ({ texture, ...props }) => {
    const textures = useTextures("sprites/objects/objects.json");
    return <>{textures && <Sprite {...props} texture={textures[texture]} />}</>
}
export default TexturedObject;