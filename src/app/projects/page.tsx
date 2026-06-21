import Container from "@/app/_components/container";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <Container>
      <div className="py-16 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
          Projects.
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-16 max-w-2xl">
          A collection of my recent work, spanning bare-metal hypervisor deployments, full-stack web applications, and network automation architecture.
        </p>

        {/* CSS Grid for Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Project 1: Home Lab */}
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between bg-white dark:bg-slate-900">
            <div>
              <h3 className="text-2xl font-bold mb-4">High-Availability Proxmox Cluster</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                Built and maintained a robust home lab cluster utilizing four HP EliteDesk mini PCs with Intel vPro/AMT. Configured for high availability, managing ZFS storage pools, LXC containers, and local Ubiquiti networking.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-neutral-100 dark:bg-slate-800 text-sm font-medium px-3 py-1 rounded-full">Proxmox</span>
                <span className="bg-neutral-100 dark:bg-slate-800 text-sm font-medium px-3 py-1 rounded-full">ZFS</span>
                <span className="bg-neutral-100 dark:bg-slate-800 text-sm font-medium px-3 py-1 rounded-full">Ubiquiti</span>
              </div>
            </div>
            <Link href="/projects/homelab" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline inline-flex items-center">
              Read the deployment notes &rarr;
            </Link>
          </div>

          {/* Project 2: BMDB */}
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between bg-white dark:bg-slate-900">
            <div>
              <h3 className="text-2xl font-bold mb-4">Bad Movie Database (BMDB)</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                A custom full-stack web application designed to track, rank, and log films using a proprietary scoring algorithm. Features a modern, responsive frontend hooked into a robust backend database structure.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-neutral-100 dark:bg-slate-800 text-sm font-medium px-3 py-1 rounded-full">Next.js</span>
                <span className="bg-neutral-100 dark:bg-slate-800 text-sm font-medium px-3 py-1 rounded-full">React</span>
                <span className="bg-neutral-100 dark:bg-slate-800 text-sm font-medium px-3 py-1 rounded-full">SQL</span>
              </div>
            </div>
            <Link href="https://bmdb.etrainlearns.com" target="_blank" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline inline-flex items-center">
              Visit live application &rarr;
            </Link>
          </div>

          {/* Project 3: Capstone */}
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between bg-white dark:bg-slate-900">
            <div>
              <h3 className="text-2xl font-bold mb-4">Infrastructure Automation Topology</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                Architected a network automation environment utilizing infrastructure as code. Designed to orchestrate and deploy complex, simulated network topologies dynamically.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-neutral-100 dark:bg-slate-800 text-sm font-medium px-3 py-1 rounded-full">Terraform</span>
                <span className="bg-neutral-100 dark:bg-slate-800 text-sm font-medium px-3 py-1 rounded-full">GNS3</span>
                <span className="bg-neutral-100 dark:bg-slate-800 text-sm font-medium px-3 py-1 rounded-full">Python</span>
              </div>
            </div>
            <Link href="/projects/automation" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline inline-flex items-center">
              View the architecture &rarr;
            </Link>
          </div>

        </div>
      </div>
    </Container>
  );
}