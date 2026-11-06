import he from "he";

export default function NewsEvent({ data, isLoading }) {
  if (isLoading || !data) {
    return <div className="h-[300px] bg-gray-200 dark:bg-[#111827] animate-pulse rounded-xl" />;
  }
  const cleanText = he.decode((data.body || "").replace(/<[^>]+>/g, ""));
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-[#111827] border border-transparent dark:border-[#1E293B] transition-colors duration-300 h-full">
      <div className="w-full aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-slate-800">
        <img
          src={data.thumbnail_content}
          alt={data.title}
          width="448"
          height="280"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-[#F8FAFC] line-clamp-2">{data.title}</h3>
        <p className="text-sm text-gray-600 dark:text-[#CBD5E1] line-clamp-3">{cleanText}</p>
      </div>
    </div>
  );
}
