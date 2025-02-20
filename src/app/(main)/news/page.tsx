"use client";

import React, { Suspense, useContext, useEffect, useState } from "react";
import Container from "@/components/global/container";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { UserContext } from "@/contexts/UserContext";
import { fetchNews } from "@/api/news/route";
import Image from "next/image";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Skeleton } from "@/components/ui/skeleton";

interface NewsItem {
  uuid: string;
  title: string;
  description: string;
  image_url: string;
}

const News = () => {
  const { user, isLoaded } = useContext(UserContext);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getNews() {
      const newsListing = await fetchNews();
      setNews(newsListing.data);
      setLoading(false);
      console.log(newsListing.data);
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
      <div className="flex flex-wrap h-fit relative">
        <Suspense
          fallback={[1, 2, 3].map((s) => (
            <Skeleton key={s} className="h-64 w-1/2" />
          ))}
        >
          {!loading &&
            news.map((news) => (
              <Container key={news.uuid} className="w-full h-fit xl:w-1/2 p-2">
                <div className="lg:h-64 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col lg:flex-row border dark:border-neutral-700">
                  <div className="w-full lg:w-1/2 my-auto h-full overflow-hidden">
                    <Image
                      src={news.image_url}
                      alt={news.title}
                      width={600}
                      height={600}
                      className="h-full w-hull object-cover object-left"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 h-full text content flex flex-col justify-between p-4">
                    <div>
                      <h1 className="font-bold text-xl md:text-2xl">
                        {news.title}
                      </h1>
                      <p className="font-normal text-sm mt-4">
                        {news.description}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground text-end">
                      Read More
                    </p>
                  </div>
                </div>
              </Container>
            ))}
          {user?.type == "FREE" && news && (
            <div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-full w-full bg-gradient-to-t from-white dark:from-[#121212]"></div>
              <RainbowButton className="w-fit text-white dark:text-[#121212] absolute bottom-[-40] left-1/2 transform -translate-x-1/2">
                Get Unlimited Access
              </RainbowButton>
            </div>
          )}
        </Suspense>
      </div>
    </Container>
  );
};

export default News;
