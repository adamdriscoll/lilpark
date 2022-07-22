import React from 'react';
import { Sprite } from '@inlet/react-pixi';
import { useTextures } from './Textures';
import Bird from './Bird';
import Title from './Title';

const ParkContext = React.createContext({});

const Park = () => {
    const [objects, setObjects] = React.useState(new Array<any>());
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const textures = useTextures("sprites/objects/objects.json");

    React.useEffect(() => {
        const objs = new Array<any>();
        for (var i = 0; i < 200; i++) {
            const y = Math.floor(Math.random() * windowHeight);
            const x = Math.floor(Math.random() * windowWidth);
            objs.push({
                id: Math.random(),
                type: 'sprite',
                texture: 'tree1',
                x,
                y
            })
        }
        objs.push({
            id: Math.random(),
            type: 'bird',
            x: windowWidth,
            y: Math.floor(Math.random() * windowHeight)
        });

        setObjects(objs);
    }, [setObjects, windowHeight, windowWidth]);

    if (!textures) return <></>

    const newBird = (id) => {
        const objs = objects.filter(x => x.id !== id);
        objs.push({
            id: Math.random(),
            type: 'bird',
            x: windowWidth,
            y: Math.floor(Math.random() * windowHeight)
        });
        setObjects(objs);
    }

    const renderedObjects = objects.map(obj => {
        if (obj.type === 'bird') return <Bird {...obj} onFlewAway={newBird} key={obj.id} />
        if (obj.type === 'sprite') return <Sprite key={obj.id} texture={textures[obj.texture]} x={obj.x} y={obj.y} />
        return <></>
    })

    return <ParkContext.Provider value={{ objects }}>
        {renderedObjects}
        <Title windowHeight={windowHeight} />
    </ParkContext.Provider>
}
export default Park;