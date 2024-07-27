import {Hero} from "@/app/partials/Hero";
import {ProjectList} from "@/app/partials/ProjectList";
import {redirect} from "next/navigation";

export default function Home() {
  return (
      redirect('https://shattereddisk.github.io/rickroll/rickroll.mp4')
      // <div>
      //     <Hero/>
      //     <ProjectList/>
      // </div>
  );
}
