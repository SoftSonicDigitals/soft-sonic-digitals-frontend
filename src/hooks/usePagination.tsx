import { getClientCount, getClients } from "@/actions";
import { CLIENT_TABLE_LIMIT } from "@/constants/dashboard";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const usePagination = () => {
  const searchParmas = useSearchParams();
  // get params
  let page = Number(searchParmas.get("page"));
  if (!page || page < 1) {
    page = 1;
  }

  //   getTotalClients
  const [totalClientCount, setTotalClientCount] = useState<number>(0);

  const fetchTotalClient = async () => {
    const totalClient = await getClientCount();
    setTotalClientCount(totalClient);
  };

  useEffect(() => {
    fetchTotalClient();
  }, []);

  const clientsPerPage = async () => {
    return await getClients(page, CLIENT_TABLE_LIMIT);
  };

  const { data: clients, error, isLoading } = useSWR("clients", clientsPerPage);

  return { totalClientCount, clients, isLoading, page };
};

export default usePagination;
