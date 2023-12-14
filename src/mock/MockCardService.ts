import { ServicesType } from "@/types/servicesType"
import { CiPillsBottle1 } from "react-icons/ci";
import { FaWineBottle } from "react-icons/fa6";

export const MockCardService:ServicesType[] = [
    {
        title:"PRODUTOS",
        icon:"<CiPillsBottle1 />",
        serviceName:"Vidrarias e Equipamentos"
    },
    {
        title:"QUIMICOS",
        icon:"<FaWineBottle />",
        serviceName:"Materiais Químicos"
    },
    {
        title:"LABORATÓRIOS",
        serviceName:"Ferramentas e Utensílios"
    },
]  