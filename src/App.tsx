import GoatAlbums from "./components/GoatAlbums";
import GoodAlbums from "./components/GoodAlbums";
import NewAlbums from "./components/NewAlbums";

/*
Above I'm importing the 3 main sections of my app!
*/

function App() {
  return (
    // Setting up some html for the 3 columns of my app
    <div className="container">
      <div className="row">
        <div className="col-sm text-center">
          <NewAlbums />
        </div>
        <div className="col-sm text-center">
          <GoodAlbums />
        </div>
        <div className="col-sm text-center">
          <GoatAlbums />
        </div>
      </div>
    </div>
  );
}

export default App;
