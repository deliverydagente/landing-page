const isProduction: boolean = process.env.NODE_ENV === "production";

const globalData = isProduction
  ? {
      apiUrl: process.env.REACT_APP_URL_API,
    }
  : {
      apiUrl: "http://localhost:3333",
    };

export { globalData, isProduction };
