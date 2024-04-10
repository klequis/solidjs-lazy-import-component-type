import { createSignal, Switch, Match } from "solid-js";

export function FlowSwitch() {
  const [x] = createSignal(7);

  return (
    <>
    <h1>Flow Switch</h1>
     <Switch fallback={<p>{x()} is between 5 and 10</p>}>
       <Match when={x() > 10} >
         <p>{x()} is greater than 10</p>
       </Match>
       <Match when={5 > x()}>
         <p>{x()} is less than 5</p>
       </Match>
     </Switch>
    </>
  );
}
