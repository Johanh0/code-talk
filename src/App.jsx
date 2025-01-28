// Import Components
import Header from "./components/Header";
import Main from "./components/Main";
import VideoPlayer from "./components/VideoPlayer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Main>
        <VideoPlayer />
      </Main>
      <Footer />
    </>
  );
}

export default App;
