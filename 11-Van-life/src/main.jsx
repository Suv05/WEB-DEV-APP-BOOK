import React from "react";
import ReactDOM from "react-dom/client";
import { createServer, Model } from "miragejs";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./components/routes/App.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Vans, { loader as vansLoader } from "./components/van-page/Vans.jsx";
import VanDetails, {
  loader as vanDetails,
} from "./components/van-page/VanDetails.jsx";
import HostLayout from "./components/host-page/HostLayout.jsx";
import Dashboard, {
  loader as host,
} from "./components/host-page/DashBoard.jsx";
import Income from "./components/host-page/Income.jsx";
import Reviews from "./components/host-page/Reviews.jsx";
import HostVan, {
  loader as hostVanLoader,
  loader,
} from "./components/host-page/HostVan.jsx";
import HostVanDetails, {
  loader as vandataLoader,
} from "./components/host-van-page/HostVanDetails.jsx";
import Details from "./components/host-van-page/Details.jsx";
import Edit from "./components/host-van-page/Edit.jsx";
import Pricing from "./components/host-van-page/Pricing.jsx";
import Photos from "./components/host-van-page/photos.jsx";
import PageNotFound from "./components/pages/pageNotFound.jsx";
import Error1 from "./components/pages/Error1.jsx";

// Initialize MirageJS server
createServer({
  models: {
    van: Model,
  },

  seeds(server) {
    server.create("van", {
      id: "1",
      name: "Modest Explorer",
      price: 60,
      description:
        "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
      type: "simple",
      hostId: "123",
    });
    server.create("van", {
      id: "2",
      name: "Beach Bum",
      price: 80,
      description:
        "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
      type: "rugged",
      hostId: "456",
    });
    server.create("van", {
      id: "3",
      name: "Reliable Red",
      price: 100,
      description:
        "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",
      type: "luxury",
      hostId: "123",
    });
    server.create("van", {
      id: "4",
      name: "Dreamfinder",
      price: 65,
      description:
        "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png",
      type: "simple",
      hostId: "456",
    });
    server.create("van", {
      id: "5",
      name: "The Cruiser",
      price: 120,
      description:
        "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png",
      type: "luxury",
      hostId: "123",
    });
    server.create("van", {
      id: "6",
      name: "Green Wonder",
      price: 70,
      description:
        "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png",
      type: "rugged",
      hostId: "456",
    });
  },

  routes() {
    this.namespace = "api";
    this.logging = false;

    this.get("/vans", (schema, request) => {
      //return new Response(400, {}, { errors: ["Bad request"] });
      return schema.vans.all();
    });

    this.get("/vans/:id", (schema, request) => {
      const id = request.params.id;
      return schema.vans.find(id);
    });

    this.get("/host/van", (schema, request) => {
      return schema.vans.where({ hostId: "123" });
    });
    this.get("/host/van/:id", (schema, request) => {
      const id = request.params.id;
      return schema.vans.where({ id, hostId: "123" });
    });
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error1 />}>
      <Route path="*" element={<PageNotFound />} />
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} loader={vansLoader} />
      <Route path="vans/:id" element={<VanDetails />} loader={vanDetails} />

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} loader={host} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="van" element={<HostVan />} loader={hostVanLoader} />
        <Route
          path="van/:id"
          element={<HostVanDetails />}
          loader={vandataLoader}
        >
          <Route index element={<Details />} />

          <Route path="pricing" element={<Pricing />} />

          <Route path="photos" element={<Photos />} />

          <Route path="edit" element={<Edit />} />
        </Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
