import { presentationGroups } from "../components/data/presentations";

const Presentations = () => {
  return (
    <div className="flex flex-col gap-12 bg-zinc-900 p-6">
      {presentationGroups.map((group) => (
        <div key={group.id}>
          <h2 className="mb-5 text-2xl font-bold text-white">
            {group.groupTitle}
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((item) => (
              <a
                key={item.id}
                href={`/files/${item.fileName}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors duration-300 hover:border-blue-400/40 ${
                  group.orientation === "landscape"
                    ? "aspect-video"
                    : "aspect-[3/4]"
                }`}
              >
                <img
                  src={`/files/${item.thumbnail}`}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Presentations;