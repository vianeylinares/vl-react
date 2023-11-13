import { Routing } from "./router/Routing";
import { ContentAreaHeight } from "./components/helpers/ContentAreaHeight";

function App() {
  ContentAreaHeight();
  return (
    <div className="wrapper">
      <Routing />
    </div>
  );
}

export default App;
