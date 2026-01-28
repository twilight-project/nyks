import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomeV5 from "./pages/HomeV5";
import HomeV51 from "./pages/HomeV51";
import { useEffect } from "react";

// Block Explorer imports
import {
  Dashboard as ExplorerDashboard,
  BlockDetail,
  BlocksList,
  TransactionDetail,
  TransactionsList,
  AddressDetail,
} from "./explorer";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (true) {
      case pathname === "/":
        title = "Twilight";
        metaDescription = "Private Bitcoin Trading";
        break;
      case pathname === "/home-v5":
        title = "Twilight";
        metaDescription = "";
        break;
      case pathname === "/explorer":
        title = "Twilight Explorer - Dashboard";
        metaDescription = "Explore the Twilight blockchain";
        break;
      case pathname.startsWith("/explorer/block"):
        title = "Twilight Explorer - Block";
        metaDescription = "Block details on Twilight blockchain";
        break;
      case pathname.startsWith("/explorer/tx"):
        title = "Twilight Explorer - Transaction";
        metaDescription = "Transaction details on Twilight blockchain";
        break;
      case pathname.startsWith("/explorer/address"):
        title = "Twilight Explorer - Address";
        metaDescription = "Address details on Twilight blockchain";
        break;
      case pathname === "/explorer/blocks":
        title = "Twilight Explorer - Blocks";
        metaDescription = "Browse blocks on Twilight blockchain";
        break;
      case pathname === "/explorer/transactions":
        title = "Twilight Explorer - Transactions";
        metaDescription = "Browse transactions on Twilight blockchain";
        break;
      default:
        title = "Twilight";
        metaDescription = "";
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeV5 />} />
      <Route path="/home-v5" element={<HomeV51 />} />

      {/* Block Explorer Routes */}
      <Route path="/explorer" element={<ExplorerDashboard />} />
      <Route path="/explorer/blocks" element={<BlocksList />} />
      <Route path="/explorer/block/:heightOrHash" element={<BlockDetail />} />
      <Route path="/explorer/transactions" element={<TransactionsList />} />
      <Route path="/explorer/tx/:hash" element={<TransactionDetail />} />
      <Route path="/explorer/address/:address" element={<AddressDetail />} />
    </Routes>
  );
}
export default App;
