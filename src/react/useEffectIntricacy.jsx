export default function App(props) {
  useEffect(() => {
    console.log('on Parent mount');
  }, []);

  useEffect(() => {
    console.log('on parent mount 2');
  }, []);

  console.log('rendering parent');
  return (
    <div>
      <ChildComponent />
    </div>
  );
}

function ChildComponent(props) {
  useEffect(() => {
    console.log('child component mounted');
  }, []);

  console.log('rendering child');
  return <div>child</div>;
}

// rendering parent 
// rendering child 
// child component mounted 
// on Parent mount 
// on parent mount 2 