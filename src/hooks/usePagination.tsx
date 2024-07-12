import { getClientCount, getClients } from "@/actions";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const usePagination = () => {
  const searchParmas = useSearchParams();
  // get params
  const page = searchParmas.get("page") ?? "1";
  const perPage = searchParmas.get("per_page") ?? "5";

  //   getTotalClients
  const [totalClientCount, setTotalClientCount] = useState<number | null>();

  const fetchTotalClient = async () => {
    const totalClient = await getClientCount();
    setTotalClientCount(totalClient);
  };

  useEffect(() => {
    fetchTotalClient();
  }, []);

  const clientsPerPage = async () => {
    return await getClients(+page, +perPage);
  };

  const { data: clients, error, isLoading } = useSWR("clients", clientsPerPage);

  return { totalClientCount, clients, isLoading };
};

export default usePagination;
