import { ExternalLink, FolderGit2 } from "lucide-react";

import { PROJECTS_DETAILS } from "@constants/index";

import { Badge } from "@components/ui/Badge";
import { Button } from "@components/ui/Button";
import { Card } from "@components/ui/Card";
interface PreviewCardProps {
  previewData: {
    name: string;
    image: string;
    repoUrl: string;
    url: string;
    description: string;
    techStack: string[];
  };
}

const PreviewCard = (props: PreviewCardProps) => {
  const { previewData } = props;
  const { name, image, repoUrl, url, description, techStack } = previewData;

  const handleRedirect = (source: "github" | "project") => {
    window.open(
      source === "github" ? repoUrl : url,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Card className="bg-iridium p-3">
      <div className="flex items-center gap-4">
        <img
          alt={name}
          src={image}
          className="w-[30%] h-[100px] rounded-lg object-cover shadow-md shadow-black/5"
        />
        <div className="flex-1 flex flex-col gap-2">
          <p className="font-semibold text-responsive-3.5">{name}</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((techStackItem) => (
              <Badge key={techStackItem}>{techStackItem}</Badge>
            ))}
          </div>
          <p className="text-responsive-3 text-gray-400">{description}</p>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => handleRedirect("github")}>
              <FolderGit2 /> Source
            </Button>
            <Button variant="outline" onClick={() => handleRedirect("project")}>
              <ExternalLink /> Link
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-nav">
      <div id="projects-wrapper" className="flex flex-col gap-4 p-2">
        <p className="font-semibold text-responsive-4.5">Projects</p>

        <div className="grid grid-cols-1 gap-3">
          {PROJECTS_DETAILS.map((project, index) => (
            <PreviewCard key={index} previewData={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
