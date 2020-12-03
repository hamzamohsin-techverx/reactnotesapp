import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SideMenu from './SideMenu';
import {Route , Switch ,Redirect} from 'react-router-dom';
import Trash from './Trash';
import Reminder from './Reminder';
import EditLabels from './EditLabels';
import MainNotes from './MainNotes';
import Search from './Search';
import Error from './Error';


const App = () => {
  
  return(
    <>
    <Header />
    <div className="main-wrapper">
      <div className="row m-0">
        <div className="col-sm-2 pl-0">
          <SideMenu />
          </div>
          <div className="col-sm-10">
            <Switch>
              {/* <Route>
                  <CreateNote passNote={addNote}/>
                  <Reminder />
                  <EditLabels />
                  <Trash />
              </Route> */}
              <Route  exact path="/" render={() => <MainNotes />}  />
              <Route path="/Reminder" component={Reminder} />
              <Route path="/EditLabels" component={EditLabels} />
              <Route path="/Trash/:name" component={Trash} />
              <Route path="/Search" component={Search} />
              {/* <Route  component={Error}/> */}
              <Redirect to="/" />
            </Switch>
            
  
       {/* <Footer /> */}
    </div>
 
    </div>
 
    </div>
 
   
    </>
  )
}

export default App;