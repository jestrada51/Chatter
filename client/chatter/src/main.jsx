import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'

/*

  NOTE:

  What this does is that it find id=root within the index.html file 
  and sticks the StrictMode DOM object inside the div which now looks something like this:

  <div id="root">
      <StrictMode>
        <App />
      </StrictMode>
  </div>

  App.js then finds the element '<App />' and then renders stuff there...

*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
