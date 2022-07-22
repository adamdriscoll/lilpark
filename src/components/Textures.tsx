import React, { useEffect, useState } from 'react';
import { useApp } from '@inlet/react-pixi'

const getTextures = (textures, asTextureChain) => {
    return asTextureChain
        ? Object.keys(textures).map((k) => textures[k])
        : textures;
}

export function useTextures(spriteSheetPath, asTextureChain = false) {
    const [textures, setTextures] = useState();
    const app = useApp();

    useEffect(() => {
        // get from cache
        if (app.loader.resources[spriteSheetPath] && !app.loader.loading) {
            setTextures(
                getTextures(app.loader.resources[spriteSheetPath].textures, asTextureChain)
            );
            return;
        }

        if (app.loader.loading) return;

        // else load
        app.loader.add(spriteSheetPath).load((_, resource) => {
            setTextures(
                getTextures(resource[spriteSheetPath].textures, asTextureChain)
            );
        });
    }, [app.loader, spriteSheetPath, asTextureChain]);

    return textures;
}

export const Textures = ({ children, spritesheet, textureChain = false }) => {
    const textures = useTextures(spritesheet, textureChain);
    return <>{textures && children(textures)}</>
};