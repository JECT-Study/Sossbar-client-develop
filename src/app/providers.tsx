"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { ReactNode } from "react";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // 서버에서 받은 데이터를 hydration 직후 다시 요청하지 않도록 0보다 크게 둔다.
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined;

function getQueryClient() {
  // 서버는 요청마다 새로 만들어 사용자 간 캐시가 섞이지 않게 하고, 브라우저는 하나를 재사용한다.
  if (typeof window === "undefined") return makeQueryClient();
  browserQueryClient ??= makeQueryClient();
  return browserQueryClient;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={getQueryClient()}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="top-left" />
    </QueryClientProvider>
  );
}
