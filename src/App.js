// import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import Body from './componets/Body';
import Header from './componets/Header';
import store from './utils/store';
import Maincontainer from './componets/Maincontainer';
import WatchPage from './componets/WatchPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
  


const appRouter = createBrowserRouter( [  {

     path : "/" ,
     element : <Body/> ,
     children  : [
  
        {
          path : "/" ,
          element : <Maincontainer/>
        }
         ,
          {
              path : "watch" ,
              element: <WatchPage/>
          },
        ] 
}])

function App() {
  return (

   
     <Provider store = {store}> 
    <div className="App">       
           <Header/>
       
          <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
