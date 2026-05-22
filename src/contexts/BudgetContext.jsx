import  { useState, createContext } from "react";

export const BudgetContext = createContext();

export default function BudgetModeProvider({ children }) {

  const [budgetMode, setBudgetMode] = useState(false);

  return (

    <BudgetContext.Provider value={{ budgetMode, setBudgetMode }}>
      {children}
    </BudgetContext.Provider>

  );
}