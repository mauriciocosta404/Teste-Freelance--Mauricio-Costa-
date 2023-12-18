import { ServicesType } from "@/types/servicesType"
import styles from './style.module.css'

type ServicesProps={
    service:ServicesType;
}

export const ServicesCard=({service}:ServicesProps)=>{
    return(
        <div className={service.second_component?styles.orange_services_card:styles.services_card}>
            <h3>{service.title}</h3>
            <div className={styles.footer_text}>
                <div>{service.icon}</div>
                <span>{service.serviceName}</span>
            </div>
        </div>
    )
}