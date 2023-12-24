import { Layout, Sidebar } from "./components";

function App() {
  return (
    <>
      <div className="flex gap-[30px]">
        <Sidebar />
        <Layout />
      </div>
    </>
  );
}

export default App;
