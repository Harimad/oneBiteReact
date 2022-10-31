import React, { useEffect, useState } from 'react';

const UnMountTest = () => {
  useEffect(() => {
    console.log('Component Did Mount (UnMountTest)');

    return () => {
      console.log('Component Will Unmount(UnMountTest)');
    };
  }, []);
  return <div>UN MOUNT TEST</div>;
};

const LifeCycle = () => {
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState('');

  // useEffect(() => {
  //   console.log('Component Did Mount! (LifeCycle)');
  // }, []);

  // useEffect(() => {
  //   console.log('Component Did Updadte! (LifeCycle)');
  // });

  // useEffect(() => {
  //   console.log(`count is updated : ${count} (LifeCycle)`);
  // }, [count]);

  // useEffect(() => {
  //   console.log(`text is updated : ${text} (LifeCycle)`);
  // }, [text]);

  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);
  return (
    <div>
      {/* <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        ></input>
      </div> */}
      <button onClick={toggle}>ON/OFF BUTTON</button>
      {isVisible && <UnMountTest />}
    </div>
  );
};

export default LifeCycle;
