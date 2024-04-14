// import React, {useState, useMemo} from 'react'
// import styled from "styled-components";
// import bg from './img/bg.png'
// import {MainLayout} from './styles/Layouts'
// import Orb from './Components/Orb/Orb'
// import Navigation from './Components/Navigation/Navigation'
// import Dashboard from './Components/Dashboard/Dashboard';
// import Income from './Components/Income/Income'
// import Expenses from './Components/Expenses/Expenses';
// import { useGlobalContext } from './context/globalContext';
// import Login from './Components/login/Login';
// import SignUp from './Components/login/SignUp';


// function App() {
//   const [active, setActive] = useState(1)

//   const global = useGlobalContext()
//   console.log(global);

//   const displayData = () => {
//     switch(active){
//       case 1:
//         return <Dashboard />
//       case 2:
//         return <Dashboard />
//       case 3:
//         return <Income />
//       case 4: 
//         return <Expenses />
//       case 5:
//         return <Login/>
//       case 6:
//         return <SignUp/>
//       default: 
//         return <Dashboard />
//     }
//   }

//   const orbMemo = useMemo(() => {
//     return <Orb />
//   },[])

//   return (
//     <AppStyled bg={bg} className="App">
//       {orbMemo}
//       <MainLayout>
//         <Navigation active={active} setActive={setActive} />
//         <main>
//           {displayData()}
//         </main>
//       </MainLayout>
//     </AppStyled>
//   );
// }

// const AppStyled = styled.div`
//   height: 100vh;
//   background-image: url(${props => props.bg});
//   position: relative;
//   main{
//     flex: 1;
//     background: rgba(252, 246, 249, 0.78);
//     border: 3px solid #FFFFFF;
//     backdrop-filter: blur(4.5px);
//     border-radius: 32px;
//     overflow-x: hidden;
//     &::-webkit-scrollbar{
//       width: 0;
//     }
//   }
// `;

// export default App;
import React, { useState, useMemo } from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import bg from './img/bg.png';
import { MainLayout } from './styles/Layouts';
import Orb from './Components/Orb/Orb';
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income';
import Expenses from './Components/Expenses/Expenses';
import Login from './Components/login/Login';
import SignUp from './Components/login/SignUp';

function App() {
  const [active, setActive] = useState(1);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4: 
        return <Expenses />;
      case 5:
        return <Login />;
      case 6:
        return <SignUp />;
      default: 
        return <Dashboard />;
    }
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  },[]);

  return (
    <Router> {/* Wrap your application with BrowserRouter */}
      <AppStyled bg={bg} className="App">
        {orbMemo}
        <MainLayout>
          <Navigation active={active} setActive={setActive} />
          <main>
            <Routes> {/* Use Routes component to define routes */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/income" element={<Income />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </main>
        </MainLayout>
      </AppStyled>
    </Router>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;
