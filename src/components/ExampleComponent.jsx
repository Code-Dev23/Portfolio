import { TypeAnimation } from 'react-type-animation';

function ExampleComponent() {
  return (
    <TypeAnimation
      sequence={[
        'One',
        1000,
        'Two', 
        2000, 
        'Three',
        3000, 
        () => {
          console.log('Sequence completed'); 
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
  );
};

export default ExampleComponent;