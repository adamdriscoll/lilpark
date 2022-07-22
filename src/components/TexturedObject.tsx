import React from 'react';
import { Sprite } from '@inlet/react-pixi';
import { Textures } from './Textures';

const TexturedObject = ({ texture, ...props }) => {
    return <Textures spritesheet={"sprites/objects/objects.json"}>
        {textures => {
            return <Sprite {...props} texture={textures[texture]} />
        }
        }
    </Textures>
}
export default TexturedObject;