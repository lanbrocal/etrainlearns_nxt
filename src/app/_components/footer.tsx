import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-10 flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left Side: Copyright */}
          <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 lg:mb-0">
            &copy; {new Date().getFullYear()} Etrain. All rights reserved.
          </div>

          {/* Right Side: Social Links */}
          <div className="flex space-x-6 items-center font-medium">
            <a
              href="https://github.com/lanbrocal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/elliot-comerio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-[#0A66C2] dark:text-neutral-300 dark:hover:text-[#0A66C2] transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://youtube.com/@etrainlearns"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-[#FF0000] dark:text-neutral-300 dark:hover:text-[#FF0000] transition-colors duration-200"
            >
              YouTube
            </a>
          </div>

        </div>
      </Container>
    </footer>
  );
}

export default Footer;