import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ACTIONS } from './redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import CreateAccountInit from './pages/CreateAccountInit.jsx'
import LandingPageInit from './pages/LandingPageInit.jsx'
import SuccessInit from './pages/SuccessInit.jsx'
import SorryInit from './pages/SorryInit.jsx'

export default function App() {
  const count = useSelector((state) => state.count)
  const investment = useSelector((state) => state.investment)
  const amount = useSelector((state) => state.amount)
  const credit = useSelector((state) => state.credit)
  const income = useSelector((state) => state.income)
  const determination = useSelector((state) => state.determination)
  const firstname = useSelector((state) => state.firstname)
  const lastname = useSelector((state) => state.lastname)
  const reason = useSelector((state) => state.reason)
  const random = useSelector((state)=>state.random)

  const dispatch = useDispatch();

  function addOne() {
    dispatch({
      type: ACTIONS.ADD_ONE,
    });
    console.log("count is " + count)
  }



  return (
    <div>



      {/* This following table is for debug purposes: commented out for now.  */}
{/*       
    <table border='1'>
      <tr>
        <td>count: {count}</td>
        <td>random: {random}</td>
        <td>investment: {investment}</td>
        <td>amount: {amount}</td>
        <td>credit: {credit}</td>
        <td>income: {income}</td>
        <td>firstname: {firstname}</td>
        <td>lastname: {lastname}</td>        
        <td>determination: {determination} ? </td>        
      </tr>
      <tr>
        <td colspan='8'>reason: {reason}</td>
      </tr>
    </table>  */}




      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPageInit />
          </Route>
          <Route exact path="/create">
            <CreateAccountInit />
          </Route>
          <Route exact path="/success">
            <SuccessInit />
          </Route>
          <Route exact path="/sorry">
            <SorryInit />
          </Route>

        </Switch>
      </Router>


    </div>


  );
}






// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import counterReducer from './reducers/counterReducer'
// const store = createStore(counterReducer)

// export default function App() {

//   return (
//     <div>
//         <Router>
//           <Switch>
//             <Route exact path="/">
//               <ContentPage />
//             </Route>
//             <Route exact path="/create">
//               <CreatePage />
//             </Route>
//           </Switch>
//         </Router>


//     </div>
//   );
// }
