import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import { useRouter } from "next/navigation";

type AuthContextType = {
  user: string | null;
  setUser: (user: string | null) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(stored);
    } else {
      setUser(null);
      router.push("/signin");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};


