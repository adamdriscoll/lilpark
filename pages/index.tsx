import type { NextPage } from 'next'
import { Stage, Sprite, TilingSprite, Text } from '@inlet/react-pixi'
import React from 'react';
import * as PIXI from 'pixi.js';

export const ResourceContext = React.createContext<PIXI.utils.Dict<PIXI.LoaderResource>>({});

const Sign = () => {
  return <ResourceContext.Consumer>{(context) => {
    if (context?.objects?.texture) {
      return (<Sprite texture={new PIXI.Texture(context.objects.texture as any, new PIXI.Rectangle(0, 0, 16, 16))} x={0} y={0} height={16} width={16} />)
    }

  }}</ResourceContext.Consumer>
}

const Tree = ({ x = 0, y = 0 }) => {
  return <ResourceContext.Consumer>{(resources) => {

    var treeTextures = [
      // trees
      new PIXI.Texture(resources.objects.texture as any, new PIXI.Rectangle(0, 80, 48, 64)),
      new PIXI.Texture(resources.objects.texture as any, new PIXI.Rectangle(0, 144, 48, 64)),
      new PIXI.Texture(resources.objects.texture as any, new PIXI.Rectangle(48, 80, 48, 64)),
      new PIXI.Texture(resources.objects.texture as any, new PIXI.Rectangle(48, 144, 48, 64)),
    ];

    const spriteIndex = Math.floor(Math.random() * treeTextures.length);
    return (<Sprite texture={treeTextures[spriteIndex]} x={x} y={y} />)
  }}</ResourceContext.Consumer>
}

const Home: NextPage = () => {
  const [resources, setResources] = React.useState<PIXI.utils.Dict<PIXI.LoaderResource>>({});
  const [loading, setLoading] = React.useState(true);
  const [windowHeight, setWindowHeight] = React.useState(0);
  const [windowWidth, setWindowWidth] = React.useState(0);

  const load = (app: PIXI.Application) => {
    app.loader.add('objects', '/sprites/objects/objects.png').load(({ resources }) => {
      setResources(resources);
      setLoading(false);
    })
  }

  React.useEffect(() => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  })

  // const sprites = {
  //   sign: {},
  //   trees: new Array<React.ReactElement>
  // };
  // sprites.sign = <Sprite texture={new PIXI.Texture(resources.objects.texture, new PIXI.Rectangle(0, 0, 16, 16))} />



  // for (var i = 0; i < 300; i++) {
  //   const spriteIndex = Math.floor(Math.random() * treeTextures.length);
  //   sprites.trees.push(<Sprite texture={treeTextures[spriteIndex]} />);
  // }

  // var logTextures = [

  //   //logs
  //   new PIXI.Texture(resources.objects.texture, new PIXI.Rectangle(96, 80, 32, 16)),
  //   new PIXI.Texture(resources.objects.texture, new PIXI.Rectangle(96, 96, 32, 16)),
  //   new PIXI.Texture(resources.objects.texture, new PIXI.Rectangle(96, 144, 48, 32)),

  //   // bush
  //   new PIXI.Texture(resources.objects.texture, new PIXI.Rectangle(96, 112, 32, 32)),
  //   new PIXI.Texture(resources.objects.texture, new PIXI.Rectangle(128, 96, 32, 48)),

  //   // saproling
  //   new PIXI.Texture(resources.objects.texture, new PIXI.Rectangle(128, 80, 16, 16)),
  //   new PIXI.Texture(resources.objects.texture, new PIXI.Rectangle(144, 80, 16, 16)),

  //   // stump
  //   new PIXI.Texture(resources.objects.texture, new PIXI.Rectangle(160, 88, 32, 32)),
  //   new PIXI.Texture(resources.objects.texture, new PIXI.Rectangle(160, 120, 32, 32)),
  // ]


  // for (var i = 0; i < 20; i++) {
  //   const spriteIndex = Math.floor(Math.random() * logTextures.length);
  //   sprites.trees.push(<Sprite texture={logTextures[spriteIndex]} />);
  // }

  const body = []
  if (!loading) {
    body.push(<Sign />)

    for (var i = 0; i < 200; i++) {
      const y = Math.floor(Math.random() * windowHeight);
      const x = Math.floor(Math.random() * windowWidth);
      body.push(<Tree x={x} y={y} />)
    }

    body.push(<Text text='Little Park' y={windowHeight - 50} x={50} style={{
      fill: 'white',
      stroke: 'black',
      strokeThickness: 4,
      fontSize: 32
    }} />)
  }

  return (<Stage height={windowHeight} width={windowWidth} onMount={load} >

    <TilingSprite
      image={'./sprites/tilesets/grass.png'}
      width={windowWidth}
      height={windowHeight}
      tilePosition={{ x: 100, y: 150 }}
    />
    <ResourceContext.Provider value={resources}>
      {body}
    </ResourceContext.Provider>
  </Stage>)
}

export default Home
