import { ServicesType } from "@/types/servicesType"

type ServicesProps={
    service:ServicesType;
}

export const ServicesCard=({service}:ServicesProps)=>{
    return(
        <div>
            <h3>{service.title}</h3>
            <div>{service.icon}</div>
            <span>{service.serviceName}</span>
        </div>
    )
}