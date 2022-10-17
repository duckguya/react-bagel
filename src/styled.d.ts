import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    accentColor: string;
    dark: {
      backColor: string;
      fontColor: string;
    };
    light: {
      backColor: string;
      darker: string;
      lighter: string;
    };
  }
}
