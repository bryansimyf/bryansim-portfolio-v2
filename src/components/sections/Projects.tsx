import { Card } from "@components/ui/Card";

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-nav">
      <div id="projects-wrapper" className="flex flex-col gap-4 p-2">
        <p className="font-semibold text-responsive-4.5">Projects</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <Card>123</Card>
          <Card>123</Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
