import { Stage, TilingSprite } from '@inlet/react-pixi'
import React from 'react';
import Park from './components/Park';

// const Sign = () => {
//   return <ResourceContext.Consumer>{(context) => {
//     if (context?.objects?.texture) {
//       return (<Sprite texture={new PIXI.Texture(context.objects.texture as any, new PIXI.Rectangle(0, 0, 16, 16))} x={0} y={0} height={16} width={16} />)
//     }

//   }}</ResourceContext.Consumer>
// }

// const Tree = ({ x = 0, y = 0 }) => {
//   return <ResourceContext.Consumer>{(resources) => {

//     var treeTextures = [
//       // trees
//       new PIXI.Texture(resources.objects.texture as any, new PIXI.Rectangle(0, 80, 48, 64)),
//       new PIXI.Texture(resources.objects.texture as any, new PIXI.Rectangle(0, 144, 48, 64)),
//       new PIXI.Texture(resources.objects.texture as any, new PIXI.Rectangle(48, 80, 48, 64)),
//       new PIXI.Texture(resources.objects.texture as any, new PIXI.Rectangle(48, 144, 48, 64)),
//     ];

//     const spriteIndex = Math.floor(Math.random() * treeTextures.length);
//     return (<Sprite texture={treeTextures[spriteIndex]} x={x} y={y} />)
//   }}</ResourceContext.Consumer>
// }

const Home = () => {
  // const [resources, setResources] = React.useState<PIXI.utils.Dict<PIXI.LoaderResource>>({});
  // const [loading, setLoading] = React.useState(true);

  // const load = (app: PIXI.Application) => {
  //   app.loader.add('objects', 'sprites/objects/objects.png').load(({ resources }) => {
  //     setResources(resources);
  //     setLoading(false);
  //   })
  // }


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

  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;


  // for (var i = 0; i < 20; i++) {
  //   const spriteIndex = Math.floor(Math.random() * logTextures.length);
  //   sprites.trees.push(<Sprite texture={logTextures[spriteIndex]} />);
  // }

  return (<>
    <Stage height={windowHeight} width={windowWidth} >
      <TilingSprite
        image={'./sprites/tilesets/grass.png'}
        width={windowWidth}
        height={windowHeight}
        tilePosition={{ x: 100, y: 150 }}
      />
      <Park />
    </Stage>
    <audio autoPlay controls loop>
      <source src={'sounds/birds.wav'} type="audio/wav" />
      Your browser does not support the audio element.
    </audio></>)
}

export default Home
