import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import { NotificationContextProvider } from "./Context/NotificationContext";
import Messages from "./Components/Messages";
import Home from "./Pages/Home";
import About from "./Pages/About";
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <NotificationContextProvider>
        <Messages />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </NotificationContextProvider>
    </div>
  );
}

export default App;
