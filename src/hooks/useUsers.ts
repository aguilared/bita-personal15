import { fetchUsers } from "../services/users";
import { useInfiniteQuery } from "@tanstack/react-query";
import { type User } from "../app/types";

export const useUsers = () => {
  const {
    data,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    isLoading,
    refetch,
    isError,
  } = useInfiniteQuery<{ nextCursor?: number; users: User[] }>({
    queryKey: ["users"],
    queryFn: async ({ pageParam = 0 }) => {
      const data = await fetchUsers({ pageParam });
      return {
        refetch,
        fetchNextPage,
        isLoading,
        isError,
        users: data?.pages.flatMap((page) => page.users) ?? [],
        hasNextPage,
      };
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => lastPage?.next,
    getPreviousPageParam: (firstPage, allPages) => firstPage?.previous,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 3,
  });
};
