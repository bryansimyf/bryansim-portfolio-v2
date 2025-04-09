import { AnimatePresence, motion } from "motion/react";

import { Card } from "@components/ui/Card";

const PreviewCard = () => {
  return (
    <div className="relative border rounded-lg h-80 overflow-hidden">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8COBW0FgQyt0cBKr8dVAqkbLp5slYRV9byg&s"
        alt="Card background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute z-20 top-2 left-2 px-2.5 py-1.5 rounded-3xl backdrop-blur-md bg-charcoal-gray/35 text-responsive-2.5">
        My Portfolio
      </div>
      <motion.div
        className="absolute bottom-0 px-3 py-2 h-[50%] w-full z-20 backdrop-blur backdrop-saturate-50 subpixel-antialiased bg-charcoal-gray/40 rounded-lg"
        initial={{ y: 60 }}
        whileHover={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 60, // default 1 resistance to movement
          damping: 12, // default 10 bounce factor
          mass: 0.5, // default 1
        }}
      >
        Content here
      </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-nav">
      <div id="projects-wrapper" className="flex flex-col gap-4 p-2">
        <p className="font-semibold text-responsive-4.5">Projects</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <PreviewCard />
          <Card>123</Card>
          <Card>123</Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
