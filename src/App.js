import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/slices/productSlice";

function App() {
  const data = useSelector((state) => state.products);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="App">
      <div>ds</div>
    </div>
  );
}

export default App;
