import Image from "next/image"
import { IMAGES } from "../assets/images"
import { MainSlide, Nav } from "../components"
import Test from "../components/test/test"


const Home= () => {
  return (
    <div >
      <Nav/>
      <MainSlide />
      <Test />
    </div>
  )
}

export default Home
