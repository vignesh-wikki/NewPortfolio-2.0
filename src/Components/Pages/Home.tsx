import About from "../main/About";
import Achievements from "../main/Achievements";
import Bio from "../main/Bio";
import HeroImage from "../main/HeroImage";
import Hobbies from "../main/Hobbies";
import Destination from "../main/Distination";
import SocialMediaLinks from "../main/SocialMediaLinks";
import homoLogo from "../../assets/pexels-shkrabaanthony-5475779.jpg";
import { useSelector } from "react-redux";

export default function Home() {
  const { backgroundColor } = useSelector(
    (state: { themeData: { backgroundColor: string } }) => state.themeData
  );
  return (
    <>
      <div className={`pt-[7rem] pb-16 flex justify-center ${backgroundColor}`}>
        <div className="grid grid-cols-2 gap-10">
          {/* Hero Image */}
          <HeroImage value={homoLogo} />
          {/* Distination */}
          <Destination />
          {/* About */}
          <About />
          {/* Bio */}
          <Bio />
          {/* Hobbies */}
          <Hobbies />
          {/* Achievements */}
          <Achievements />
          {/* Social Media Links */}
          <SocialMediaLinks />
        </div>
      </div>
    </>
  );
}
