import React, { createContext, useContext, useEffect, useState } from "react";
import { UserInfo, UserHandler } from "../interfaces/UserInfo";

interface CompanyInfo {
  symbol: string;
  name: string;
  price: number;
}

type Action =
  | { type: "initial"; data: CompanyInfo[] }
  | { type: "add"; newCompany: CompanyInfo }
  | { type: "delete"; symbol: string };

function SampleUseReducer() {
  const startData: CompanyInfo[] = [
    { symbol: "MSFT", name: "Microsoft", price: 200 },
    { symbol: "ORCL", name: "Oracle", price: 300 },
  ];

  function maintainCompanies(data: CompanyInfo[], action: Action) {
    switch (action.type) {
      case "initial":
        return { data: startData };
      case "add":
        return {[...data, newCompany]}
      case "delete":
    }
  }
  const [companies, setCompanies] = React.useReducer(
    startData,
    maintainCompanies
  );

  return <div>useReducer</div>;
}

export default SampleUseReducer;
