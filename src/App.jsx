import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <call-us-selector phonesystem-url="https://1747.3cx.cloud" party="joe"></call-us-selector>
        <script defer src="https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js" id="tcx-callus-js" charset="utf-8"></script>
      </body>
      <div>
        <iframe
          src="https://1747.3cx.cloud/#/office/voice-and-chat"
          sandbox="allow-scripts allow-same-origin"
          width="600"
          height="400">
        </iframe>
      </div>
    </div>
  );
}

export default App;




