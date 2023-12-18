// mock/MockCardService.ts
import { icons } from "../components/icons";
import { ServicesType } from "@/types/servicesType";

type IconType = React.ComponentType<{ size?: number }>;

export const MockCardService: ServicesType[] = [
  {
    title: "PRODUTOS",
    icon: icons.CiPillsBottle1,
    serviceName: "Vidrarias e Equipamentos",
  },
  {
    title: "QUÍMICOS",
    icon: icons.FaWineBottle,
    second_component: true,
    serviceName: "Materiais Químicos",
  },
  {
    title: "LABORATÓRIOS",
    serviceName: "Ferramentas e Utensílios",
  },
];
