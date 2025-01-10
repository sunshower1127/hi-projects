import { fetchRandomImage } from "@/services/fake-server";
import { getImageUrl } from "@/utils/image-helper";
import { useQuery } from "@tanstack/react-query";

export default function RandomImageViewer() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["random-image"],
    queryFn: () => fetchRandomImage(),
    staleTime: 1000 * 5, // 10초에 한 번씩 바뀜
  });

  if (isPending) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <img
      className="h-96 w-96 object-cover"
      src={getImageUrl(data)}
      alt="Random"
    />
  );
}
