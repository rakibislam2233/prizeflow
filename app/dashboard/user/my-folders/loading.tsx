import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500 ">
      {/* Header Skeleton */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-gray-100">
        <div className="space-y-3">
          <Skeleton className="h-10 w-48 rounded" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-16 rounded" />
            <Skeleton className="h-4 w-4 rounded" />
            <Skeleton className="h-4 w-24 rounded" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-32 rounded" />
          <Skeleton className="h-12 w-32 rounded" />
        </div>
      </div>

      {/* Grid Content Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="p-5 rounded border border-gray-50 bg-white space-y-4"
          >
            <div className="flex items-start justify-between">
              <Skeleton className="w-12 h-12 rounded" />
              <Skeleton className="w-8 h-8 rounded-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-5 w-3/4 rounded" />
              <div className="flex justify-between items-center pt-2">
                <Skeleton className="h-4 w-20 rounded" />
                <Skeleton className="h-4 w-12 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
