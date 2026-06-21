import Container from "@/app/_components/container";

export default function AboutPage() {
  return (
    <Container>
      <div className="max-w-3xl mx-auto py-12">
        <h1 className="text-5xl font-bold mb-8">About Me</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          Content goes here...
        </p>
      </div>
    </Container>
  );
}
