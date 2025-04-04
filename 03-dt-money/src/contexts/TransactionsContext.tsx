import { useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../lib/axios";

type Transaction = {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
};

type CreateTransactionInput = {
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
};

type TransactionsContextType = {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => void;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
};

export const TransactionsContext = createContext({} as TransactionsContextType);

type TransactionsProviderProps = {
  children: React.ReactNode;
};

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get("/transactions", {
      params: { _sort: "createdAt", _order: "desc", q: query },
    });
    setTransactions(response.data);
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { description, price, category, type } = data;
      const response = await api.post("/transactions", {
        description,
        price,
        category,
        type,
        createdAt: new Date().toISOString(),
      });

      setTransactions((prev) => [response.data, ...prev]);
    },
    []
  );

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
