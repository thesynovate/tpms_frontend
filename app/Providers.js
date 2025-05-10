"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { HeroUIProvider } from "@heroui/react";
import { Provider } from "react-redux";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { store } from "./store/store";

const queryClient = new QueryClient();

export function Providers({ children }) {
    return (
        <Provider store={store}>
            <HeroUIProvider>
                <QueryClientProvider client={queryClient}>
                    {children}
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </HeroUIProvider>
        </Provider>
    );
}
