"use client";
import { Provider } from "react-redux";
import { store } from "./AppStore";

export const AppStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Provider store={store}>{children}</Provider>;
};
