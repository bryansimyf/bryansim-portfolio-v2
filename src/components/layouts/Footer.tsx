import { APP_INFO } from "@constants/index";

const Footer = () => {
  return (
    <footer className="max-w-2xl mx-auto px-4 my-10 flex justify-between">
      <div></div>
      <span className="text-responsive-3 text-gray-300">
        Last Update: {APP_INFO.lastUpdated}
      </span>
    </footer>
  );
};

export default Footer;
