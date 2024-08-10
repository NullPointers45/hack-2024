import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Chatbot from "./components/pages/Chatbot";
import Profile from "./components/pages/Profile";
import EditProfile from "./components/pages/EditProfile"; // Import the EditProfile component
import ListingsFarmer from "./components/farmer/pages/listings";
import ListingsForm from "./components/farmer/forms/listingForm";
import ListingsBuyer from "./components/buyer/pages/listings";
import BuyerForm from "./components/buyer/forms/buyerForm";

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
                  {/* <Footer /> */}
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
                  {/* <Footer /> */}
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
                  {/* <Footer /> */}
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
                {/* <Footer /> */}
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
                {/* <Footer /> */}
              </>
            }
          />
          <Route
            path="/edit-profile"
            element={
              <>
                <Header />
                <div className="flex-1 mx-20 py-8 text-white text-justify">
                  <EditProfile /> {/* Added EditProfile route */}
                </div>
                {/* <Footer /> */}
              </>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
