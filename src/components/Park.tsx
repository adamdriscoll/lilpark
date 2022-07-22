import React from 'react';
import { Sprite, Text } from '@inlet/react-pixi';
import { useTextures } from './Textures';
import Bird from './Bird';

const Park = () => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const textures = useTextures("sprites/objects/objects.json");

    if (!textures) return <></>

    const body = new Array<JSX.Element>();
    for (var i = 0; i < 200; i++) {
        const y = Math.floor(Math.random() * windowHeight);
        const x = Math.floor(Math.random() * windowWidth);
        body.push(<Sprite texture={textures['tree2']} x={x} y={y} />)
    }

    body.push(<Text key='text' text='Little Park' y={windowHeight - 50} x={50} interactive={true} pointerdown={() => {
        window.open("https://github.com/adamdriscoll/lilpark")
    }} style={{
        fill: 'white',
        stroke: 'black',
        strokeThickness: 4,
        fontSize: 32
    }} />)

    body.push(<Bird x={windowWidth} y={Math.floor(Math.random() * windowHeight)} />)

    return <>{body}</>
}
export default Park;