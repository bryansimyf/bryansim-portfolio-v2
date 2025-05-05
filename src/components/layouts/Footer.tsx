import { APP_INFO } from "@constants/index";

const Footer = () => {
  return (
    <footer className="max-w-2xl mt-30 mx-auto mb-10 px-6 md:px-4 flex justify-between text-responsive-4 text-gray-300 font-vt323">
      <span>{APP_INFO.version}</span>
      <span>Last Update: {APP_INFO.lastUpdated}</span>
    </footer>
  );
};

export default Footer;
