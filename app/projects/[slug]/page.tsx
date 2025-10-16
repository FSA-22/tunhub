import { allProjects } from '@/constants/projects';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = allProjects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a0524] via-[#1a0b44] to-[#2b0f5e] py-24 px-6 md:px-12 lg:px-20 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#e91e63] via-[#f06292] to-[#ffb6c1] bg-clip-text text-transparent">
          {project.title}
        </h1>

        <div className="mt-8 relative w-full h-96 rounded-2xl overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <p className="mt-8 text-gray-300 leading-relaxed text-lg">
          {project.description}
        </p>

        <div className="mt-6 text-gray-400">
          <strong>Tools:</strong> {project.tools.join(', ')}
        </div>
      </div>
    </section>
  );
}
