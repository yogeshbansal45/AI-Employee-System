// function App() {

//   return (

//     <div>

//       <h1>AI Employee Performance System</h1>

//     </div>

//   );

// }

// export default App;

// import Login from "./pages/Login";

// import Dashboard from "./pages/Dashboard";

// import AIPage from "./pages/AIPage";

// function App() {

//   return (

//     <div>

//       <h1>AI Employee Performance System</h1>

//       <Login />

//       <Dashboard />

//       <AIPage />

//     </div>

//   );

// }

// export default App;


import "./App.css";

import {

  BrowserRouter,

  Routes,

  Route,

  Link

} from "react-router-dom";

import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";

import AIPage from "./pages/AIPage";

function App() {

  return (

    <BrowserRouter>

      <div
        style={{
          padding: "20px"
        }}
      >

        <h1>
          AI Employee Performance System
        </h1>

        <nav>

          <Link to="/">
            Login
          </Link>

          {" | "}

          <Link to="/dashboard">
            Dashboard
          </Link>

          {" | "}

          <Link to="/ai">
            AI Recommendation
          </Link>

        </nav>

        <br />

        <Routes>

          <Route
            path="/"
            element={<Login />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/ai"
            element={<AIPage />}
          />

        </Routes>

      </div>

    </BrowserRouter>

  );

}

export default App;