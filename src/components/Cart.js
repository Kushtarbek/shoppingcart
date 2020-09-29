const FunctionalComponent = () => {
    const [count, setCount] = React.useState(0);
  
    return (
      <div>
        <p>count: { count }</p>
        <button onClick={() => setCount(count + 1)}>Click</button>
        <button onClick={() => setCount(count - 1)}>Click minus</button>
      </div>
    );
  };

  //https://codepen.io/syamazaki/pen/wvGKRBg