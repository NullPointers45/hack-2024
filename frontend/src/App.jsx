import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Chatbot from "./components/pages/Chatbot";
import Profile from "./components/pages/Profile";
import EditProfile from "./components/pages/EditProfile";
import ListingsFarmer from "./components/farmer/pages/listings";
import ListingsForm from "./components/farmer/forms/listingForm";
import ListingsBuyer from "./components/buyer/pages/listings";
import FarmerForm from "./components/farmer/forms/FarmerForm";
// import PaymentPage from "./components/pages/PaymentPage";
import BuyerForm from "./components/buyer/forms/buyerForm";
import FarmerIssues from "./components/farmer/pages/issue";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-900">
        <Routes>
          <Route path="/farmer">
          <Route
              path="/farmer"
              element={
                <>
                  <Header />
                  <div className="flex-1 text-white text-justify">
                    <Home />
                  </div>
                </>
              }
            />
            <Route
              path="/farmer/listings"
              element={
                <>
                  <Header />
                  <div className="flex-1 mx-20 py-8 text-white text-justify">
                    <ListingsFarmer />
                  </div>
                </>
              }
            />
            <Route
              path="/farmer/listings/add-edit"
              element={
                <>
                  <Header />
                  <div className="flex-1 mx-20 py-8 text-white text-justify">
                    <ListingsForm />
                  </div>
                </>
              }
            />
            <Route
              path="/farmer/issues"
              element={
                <>
                  <Header />
                  <div className="flex-1 mx-20 py-8 text-white text-justify">
                    <FarmerIssues />
                  </div>
                </>
              }
            />
            <Route
              path="/farmer/forms/FarmerForm"
              element={
                <>
                  <Header />
                  <div className="flex-1 mx-20 py-8 text-white text-justify">
                    <FarmerForm />
                  </div>
                  {/* <Footer /> */}
                </>
              }
            />
          </Route>

          <Route path="/buyer">
            <Route
              path="/buyer/listings"
              element={
                <>
                  <Header />
                  <div className="flex-1 mx-20 py-8 text-white text-justify">
                    <ListingsBuyer />
                  </div>
                </>
              }
            />
            <Route
              path="/buyer/form/profile"
              element={
                <>
                  <div className="flex-1 mx-20 py-8 text-white text-justify">
                    <BuyerForm />
                  </div>
                </>
              }
            />
          </Route>
          

          <Route
            path="/"
            element={
              <>
                <Header />
                <div className="flex-1 text-white text-justify">
                  <Home />
                </div>
              </>
            }
          />
          <Route
            path="/chatbot"
            element={
              <>
                <Header />
                <div className="flex-1 mx-20 py-8 text-white text-justify">
                  <Chatbot />
                </div>
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Header />
                <div className="flex-1 mx-20 py-8 text-white text-justify">
                  <Profile />
                </div>
              </>
            }
          />
          <Route
            path="/edit-profile"
            element={
              <>
                <Header />
                <div className="flex-1 mx-20 py-8 text-white text-justify">
                  <EditProfile />
                </div>
              </>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<PaymentPage />} /> {/* Added Payment route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
