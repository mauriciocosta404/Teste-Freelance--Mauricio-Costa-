import Image from 'next/image'
import styles from './page.module.css'
import { MockCardService } from '@/mock/MockCardService'
import { ServicesCard } from '@/components/ServicesCard'
import { CiViewList } from "react-icons/ci";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.bannerContainer}>
        <header className={styles.itemsContainer}>
          <div className={styles.header_left}>
            <Image width={130} height={25} src="/images/logo.png" alt='logo' />

            <ul className={styles.linkList}>
              <li>Inicio</li>
              <li>Produtos</li>
              <li>Laudos</li>
              <li>Sobre nós</li>
              <li>Certificações</li>
              <li>Contato</li>  
            </ul>   
          </div>
          
          <button className={styles.header_btn}> <CiViewList /> Orçamento</button>
        </header>

        <div>
            {
              MockCardService.map((item,index)=>(
                <ServicesCard key={index} service={item}/>        
              ))
            }
        </div>
      </div>
    </main>
  )
}
