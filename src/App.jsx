import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Subjects from "./pages/subjects/subjects";
import Blockchain from "./pages/subject/subject";
import FacultyPage from "./pages/FacultyPage/FacultyPage";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
const queryClient = new QueryClient()
function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/student" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route exact strict path="/login/password-reset" element={<ForgotPassword />} />
            <Route exact strict path="/faculty" element={<FacultyPage />} />
            <Route exact strict path="/faculty/semester:6" element={<Subjects />} />
            <Route exact strict path="/faculty/semester:6/blockchain" element={<Blockchain />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  )
}

export default App
