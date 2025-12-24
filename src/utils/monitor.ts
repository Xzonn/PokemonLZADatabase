import Aegis from "aegis-web-sdk";

// Lazy initialize aegis only on client side
export const aegis =
  typeof window !== "undefined"
    ? new Aegis({
        id: "8lgbqfovdjPJrJ1xv3",
        reportApiSpeed: true,
        reportAssetSpeed: true,
        spa: true,
        hostUrl: "https://rumt-zh.com",
        blankScreen: true,
      })
    : ({
        error: () => {},
        info: () => {},
        report: () => {},
      } as unknown as Aegis);
