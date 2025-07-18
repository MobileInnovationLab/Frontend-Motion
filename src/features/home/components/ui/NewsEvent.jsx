export default function NewsEvent({ data, isLoading }) {
  if (isLoading) {
    return <div className="h-[300px] bg-gray-200 animate-pulse rounded-xl" />;
  }

  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white">
      <img
        src={data.thumbnail_content}
        alt={data.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{data.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">
          {data.body.replace(/<[^>]+>/g, "")}
        </p>
      </div>
    </div>
  );
}
