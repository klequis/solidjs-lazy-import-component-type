import type { ParentComponent } from 'solid-js';

// 
const App: ParentComponent = (props) => {
  return (
    <div class="container app">
      <div class="card">
        <h1>App</h1>
        {props.children}
      </div>
    </div>
  );
};

export default App;
