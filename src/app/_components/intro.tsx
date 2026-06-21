export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 border-b border-neutral-200 dark:border-neutral-800 pb-12">
      
      {/* Left Side: The Main Title */}
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        Etrain's Notes.
      </h1>
      
      {/* Right Side: The Description */}
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 text-neutral-600 dark:text-neutral-400 max-w-lg">
        Documenting my adventures in self-hosted infrastructure, Proxmox deployments, and software automation.
      </h4>
      
    </section>
  );
}