import React, { useReducer } from "react";

type CompanyInfo = {
  symbol: string;
  name: string;
  price: number;
}

type Action =
  | { type: "initial" }
  | { type: "add"; newCompany: CompanyInfo }
  | { type: "delete"; symbol: string };

const initialAction: Action = {type : "initial"}
const addAction: Action = {type: "add", newCompany: {symbol: "ORCL", name: "Oracle", price: 540}}
const deleteAction: Action = {type: "delete", symbol: "MSFT"}

function SampleUseReducer(){
  const InitialCompanies: CompanyInfo[] = 
    [{symbol: "MSFT", name: "Microsoft", price: 200}]


  function maintainCompanies(data: CompanyInfo[], action: Action): CompanyInfo[] {
    console.log("I am in maintainCompanies");
    switch (action.type) {
      case "initial":
        return InitialCompanies ;
      case "add":
          if (data) {console.log("Add company");data.push(action.newCompany); return [...data]}
          else  return  InitialCompanies 
      case "delete":
        if (data) {data = data.filter((s) => s.symbol !== action.symbol); return [...data]}
        else return InitialCompanies
        }
    }
  const [companies, setCompanies] = useReducer(maintainCompanies, InitialCompanies)

  function takeAction(s:string){
    console.log("I am in takeAction");
    if (s === "add") {setCompanies(addAction)};
    if (s === "delete") {setCompanies(deleteAction)};
  }

  return (<div>
      <div>Total Companies: {companies.length.toString()}</div>
      <button onClick={() => setCompanies(initialAction)} >Initial</button>
      <button onClick={() => takeAction("add")} >Add</button>
      <button onClick={() => takeAction("delete")} >Delete</button>
      <table>{companies.map(item => {
          return <tr><td>{item.name}</td></tr>;
        })}  </table></div>);
}

export default SampleUseReducer;

