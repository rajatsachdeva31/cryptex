"use client";

import React, { useContext, useEffect, useState } from "react";
import Container from "@/components/global/container";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { UserContext } from "@/contexts/UserContext";
import { fetchNews } from "@/api/news/route";

const News = () => {
  const { user, isLoaded } = useContext(UserContext);
  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getNews() {
      const newsListing = await fetchNews();
      setNews(newsListing);
      setLoading(false);
      console.log(newsListing.data)
    }
    getNews();
  }, []);

  return (
    <Container className="pt-2 h-full flex flex-col gap-4 overflow-y-scroll">
      <div className="flex justify-between items-center">
        <h1 className="font-medium md:text-xl">News</h1>
        {user?.type == "FREE" && (
          <Button variant={"ghost"} className="flex items-center gap-1">
            <Zap fill="#facc15" size={20} color="#facc15" />
            Upgrade
          </Button>
        )}
      </div>
      <div></div>
    </Container>
  );
};

export default News;
