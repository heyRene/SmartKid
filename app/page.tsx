import SectionPride from "./sections/SectionPride/SectionPride";
import SectionAbout from "./sections/SectionAbout/SectionAbout";
import SectionAchievements from "./sections/SectionAchievements/SectionAchievements";
import SectionDocs from "./sections/SectionDocs/SectionDocs";
import SectionIntro from "./sections/SectionIntro/SectionIntro";
import { SectionPrograms } from "./sections/SectionPrograms/SectionPrograms";


export default function Home() {
  return (
    <div>
      <main className="main">
        <SectionIntro />

        <SectionAbout />

        <SectionPrograms />

        <SectionAchievements />

        <SectionPride />

        <SectionDocs />
      </main>
    </div>
  );
}
