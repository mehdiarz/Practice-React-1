import React from "react";
import { BrowserRouter as Router} from "react-router-dom"

import Layout from "./components/Layout/Layout";
import Shopping from "./containers/Shopping/Shopping";


class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
          <Layout>
            <Shopping></Shopping>
          </Layout>
        </Router> 
      </div>
    )
  }
}
export default App;
