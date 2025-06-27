// locals
import { NavigationList, NavigationMenu } from "./components";

export const Navigation = () => {
  return (
    <div className="flex items-center md:mx-2 order-3 md:order-none">
      <NavigationMenu />
      <NavigationList />
    </div>
  );
};
