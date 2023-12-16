import { ServicesType } from "@/types/servicesType"
import styles from './style.module.css'

type ServicesProps={
    service:ServicesType;
}

export const ServicesCard=({service}:ServicesProps)=>{
    return(
        <div className={styles.services_card}>
            <h3>{service.title}</h3>
            <div>{service.icon}</div>
            <span>{service.serviceName}</span>
        </div>
    )
}