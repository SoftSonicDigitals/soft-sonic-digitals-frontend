import { getClients, searchClients } from "@/actions";
import { CLIENT_TABLE_LIMIT } from "@/constants/dashboard";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

const usePagination = () => {
  const searchParmas = useSearchParams();
  const searchQuery = searchParmas.get("query");

  // get params
  let page = Number(searchParmas.get("page"));
  if (!page || page < 1) {
    page = 1;
  }

  //   getTotalClients

  const clientsPerPage = async () => {
    if (searchQuery && searchQuery.length >= 4) {
      return await searchClients(page, CLIENT_TABLE_LIMIT, searchQuery);
    } else {
      return await getClients(page, CLIENT_TABLE_LIMIT);
    }
  };

  const { data, error, isLoading } = useSWR(
    ["clients", page, searchQuery],
    clientsPerPage
  );

  const { clients, totalClientCount } = data || {
    clients: [],
    totalClientCount: 0,
  };
  console.log("pagination :", { totalClientCount, clients, isLoading, page });
  return { totalClientCount, clients, isLoading, page };
};

export default usePagination;
