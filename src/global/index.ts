const isProduction: boolean = process.env.NODE_ENV === "production";

const globalData = isProduction
    ? {
          apiUrl: process.env.REACT_APP_URL_API,
      }
    : {
          apiUrl: "http://192.168.1.13:1404",
      };

export { globalData, isProduction };
