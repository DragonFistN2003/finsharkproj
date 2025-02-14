import axios from "axios";
import { CompanyProfile, CompanySearch } from "./company";

export interface SearchResponse {
  companies: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  try {
    const response = await axios.get<SearchResponse>("/companies.json");

    const filteredCompanies = response.data.companies.filter(
      (company) =>
        company.name.toLowerCase().includes(query.toLowerCase()) ||
        company.symbol.toLowerCase().includes(query.toLowerCase())
    );

    return filteredCompanies;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Error message: ", error.message);
      return error.message;
    } else {
      console.log("Unexpected error: ", error);
      return "An unexpected error has occurred.";
    }
  }
};

export const getCompanyProfile = async (query: string) => {
  try {
    const data = await axios.get<CompanyProfile[]>(
      `/companies/${query}.json`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};
