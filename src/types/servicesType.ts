import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface ServicesType{
    title:string;
    icon?:IconType;
    serviceName:string;
    second_component?:boolean;
}