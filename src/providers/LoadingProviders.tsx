import { createContext, ReactNode, useContext, useState } from "react";

interface LoadingProvidersProps {
  children: ReactNode;
}

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProviders = (props: LoadingProvidersProps) => {
  const { children } = props;

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

// export default LoadingProviders;
