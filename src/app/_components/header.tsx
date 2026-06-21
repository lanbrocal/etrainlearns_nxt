import Link from "next/link";
import Container from "@/app/_components/container"; 
import { ThemeSwitcher } from "@/app/_components/theme-switcher";

const Header = () => {
  return (
    // Changed mb-12 to mb-8 to pull content closer
    <header className="border-b border-neutral-200 dark:border-neutral-800 mb-8">
      <Container>
        {/* Changed py-8 to py-4 for a tighter navigation bar */}
        <div className="flex items-center justify-between py-4">
          
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Etrain
            </Link>
          </h2>

          <nav className="flex items-center space-x-6 text-sm md:text-base font-medium text-neutral-600 dark:text-neutral-300">
            <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">
              About
            </Link>
            <Link href="/projects" className="hover:text-black dark:hover:text-white transition-colors">
              Projects
            </Link>
            
            <div className="pl-4 border-l border-neutral-200 dark:border-neutral-700">
              <ThemeSwitcher />
            </div>
          </nav>

        </div>
      </Container>
    </header>
  );
};