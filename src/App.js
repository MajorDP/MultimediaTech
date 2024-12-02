import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Excercises from "./pages/Excercises";
import AppLayout from "./components/AppLayout";
import WorkoutPlans from "./pages/WorkoutPlans";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/excercises" element={<Excercises />} />
          <Route path="/workouts" element={<WorkoutPlans />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
