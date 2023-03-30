import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, Navbar, SpecialMenu } from "./components"

const App=()=>(
    <div className="text-white max-w-[2000px]">
      <Navbar/>
      <Header/>
      <AboutUs/>
      <SpecialMenu/>
      <Chef/>
      <Intro/>
      <Laurels/>
      <Gallery/>
      <FindUs/>
      <Footer/>
    </div>
  )


export default App;
