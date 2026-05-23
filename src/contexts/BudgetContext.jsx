import { useState, createContext, useContext } from "react";

const BudgetContext = createContext();

function BudgetModeProvider({ children }) {

  const [budgetMode, setBudgetMode] = useState("");



  return (

    <BudgetContext.Provider value={{ budgetMode, setBudgetMode }}>
      {children}
    </BudgetContext.Provider>

  );
}


function useBudget() {
  const context = useContext(BudgetContext);
  return context;
}

export { BudgetModeProvider, useBudget };