// locals
import { NavigationList, NavigationMenu } from "./components";

export const Navigation = () => {
  
  return (
    <div className="mx-2 flex items-center">
      <NavigationMenu />
      <NavigationList />
    </div>
  );
};
