import { ServicesType } from "@/types/servicesType"
import styles from './style.module.css'
import IconComponent from "../iconComponent";

type ServicesProps={
    service:ServicesType;
}

export const ServicesCard=({service}:ServicesProps)=>{
    return(
        <div className={service.second_component?styles.orange_services_card:styles.services_card}>
            <h3>{service.title}</h3>
            <div className={styles.footer_text}>
                <IconComponent key={service.title} service={service} size={32} />
                <span>{service.serviceName}</span>
            </div>
        </div>
    )
}