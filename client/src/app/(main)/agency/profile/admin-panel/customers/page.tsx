"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import UsersTable from "../_components/userTable";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User } from "@/types/user";

const DEFAULT_PAGE = 1;
const DEFAULT_TOTAL_ITEMS = 7;

export default function Users() {
  // const [currentSearch, setCurrentSearch] = useState<string>("");
  // const [isMounted, setIsMounted] = useState(false);
  
  // const router = useRouter();

  // // Vérification si le composant est monté (côté client)
  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // if (!isMounted) {
  //   return null; // Ou un loader, si nécessaire
  // }

  // const page = +(router.query.page as string ?? DEFAULT_PAGE);
  // const totalItems = +(router.query.totalItems as string ?? DEFAULT_TOTAL_ITEMS);
  // const search = router.query.search as string;

  // const { data, isPending } = trpc.users.get.useQuery({
  //   page: page < 1 ? DEFAULT_PAGE : page,
  //   totalItems: totalItems < 1 ? DEFAULT_TOTAL_ITEMS : totalItems,
  //   search,
  // });

  // const handleSearch = () => {
  //   const params = new URLSearchParams(router.query as any);
  //   params.set("search", currentSearch);
  //   router.push({ pathname: router.pathname, query: params.toString() });
  // };

  return (
    <div className="m-10 flex flex-col gap-5">
      {/* <div className="flex gap-3 w-max">
        <Input
          value={currentSearch}
          placeholder="Search"
          onChange={(e) => setCurrentSearch(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <UsersTable
        users={data?.items ?? []}
        isLoading={isPending}
        totalPages={data?.totalPages ?? 1}
        currentPage={page}
        totalItems={totalItems}
      /> */}
    </div>
  );
}
