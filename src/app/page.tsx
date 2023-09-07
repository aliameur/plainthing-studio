import { Nav } from "@/components/nav";
import { Header } from "@/features/header";
import { ServicesScrollbar } from "@/features/services";
import { ScrollableProjects } from "@/features/projects";
import { ProjectImg, ProjectVideo } from "@/features/projects";
import { CopyComponent as Copy } from "@/features/copy";
import { Process } from "@/features/process";
import { Reviews } from "@/features/reviews";
import { Footer } from "@/features/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <ServicesScrollbar />
      <ScrollableProjects>
        <ProjectVideo src="https://cdn.dribbble.com/userupload/3237703/file/original-6a7372febb8e52298529db2e32a0d157.mp4" />
        <ProjectVideo src="https://cdn.dribbble.com/userupload/3788399/file/original-6d3ba574e2f2c4d7df15f11f5581c29b.mp4" />
        <ProjectImg src="/Project-3.jpeg" />
        <ProjectVideo src="https://cdn.dribbble.com/users/1904192/screenshots/17820238/media/bff6c04dae85aa9cb1880d283d8780a6.mp4" />
        <ProjectVideo src="https://cdn.dribbble.com/users/11087757/screenshots/19727026/media/e9dc32a8ccc2b5470baf6eabf0422d41.mp4" />
      </ScrollableProjects>
      <Copy />
      <Process />
      <Reviews />
      <Footer />
    </>
  );
}
