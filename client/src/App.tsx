import React from 'react';
import './scss/pages/homepage.scss';
import './App.scss';
import './scss/main.scss';
import { Button } from 'semantic-ui-react';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="homepage__header">
          <h1>Workout App</h1>
        </div>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <main>
        <div className="flex-layout homepage__btn-menu">
          <Button className="ui primary button labeled icon  massive fluid">
            <i className="pause icon"></i>
            Quick Start</Button>
          <Button className="ui primary button labeled icon  massive fluid">
            <i className="pause icon"></i>
            Create Routine</Button>
          <Button className="ui primary button labeled icon  massive fluid">
            <i className="pause icon"></i>
            Choose Routine</Button>
        </div>

      </main>
        <div id="dialog_layer" className="dialogs">
          <div role="dialog" className="dialog-backdrop">
            <div className="dialog-box">
              {/* if there's been a routine started */}
              <h2 id="dialog1_label" className="dialog_label">Today's Workout</h2>
              <Button className="ui primary button labeled icon">
                <i className="pause icon"></i>
                Continue Routine</Button>
              <button className="ui button">
                Back
</button>
            </div>
          </div>

        </div>
    </div>
      );
    }
    
    export default App;
