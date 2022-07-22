import { Text } from '@inlet/react-pixi';

const Title = ({ windowHeight }) => {
    return <Text key='text' text='Little Park' y={windowHeight - 50} x={50} interactive={true} pointerdown={() => {
        window.open("https://github.com/adamdriscoll/lilpark")
    }} style={{
        fill: 'white',
        stroke: 'black',
        strokeThickness: 4,
        fontSize: 32
    }} buttonMode={true} />
}
export default Title;