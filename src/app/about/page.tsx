import Container from "@/app/_components/container";

export default function AboutPage() {
  return (
    <Container>
      <div className="py-16 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
          About Me.
        </h1>
        
        {/* Mirroring the text styling and spacing from the projects page */}
        <div className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-8">
          
          <p className="text-xl font-medium text-neutral-800 dark:text-neutral-200">
            Hi, I'm Elliot (but you probably know me as Etrain). I'm a Florida-based IT professional currently working in desktop support, with a heavy focus on transitioning into cloud infrastructure and network automation.
          </p>

          <hr className="border-neutral-200 dark:border-neutral-800 my-8" />

          <div>
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">What I Do</h2>
            <p>
              My day-to-day involves keeping systems running smoothly, but my real passion lies in building and automating infrastructure. I manage a robust home lab running high-availability Proxmox clusters and Ubiquiti networking hardware. Lately, I've been diving deep into Infrastructure as Code, using tools like Terraform, Ansible, Python, and PowerShell to orchestrate complex deployments and eliminate manual configurations.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 mt-8 text-black dark:text-white">Education & Certifications</h2>
            <p className="mb-4">
              I am currently pursuing a degree in Cloud Computing at Western Governors University (WGU), actively working on network automation topologies for my capstone project. 
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Microsoft Azure Administrator (AZ-104)</li>
              <li>CompTIA Cloud+</li>
              <li>CompTIA Network+</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 mt-8 text-black dark:text-white">Off the Clock</h2>
            <p>
              When I'm not configuring ZFS pools or studying for my next certification, I'm usually hanging out with my wife and our dog, Jimmy. I enjoy cooking outdoors—specifically trying to master a brisket or smoke some wings on my Traeger pellet grill. I also spend time working on the meticulous mechanical repair of vintage watches, logging films in my custom-built Bad Movie Database, and keeping up with the San Antonio Spurs.
            </p>
          </div>

        </div>
      </div>
    </Container>
  );
}