import { ReactNode } from "react";

export interface ServicesType{
    title:string;
    icon?:ReactNode;
    serviceName:string;
    second_component?:boolean;
}