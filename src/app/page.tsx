"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { MockCardService } from '@/mock/MockCardService'
import { ServicesCard } from '@/components/ServicesCard'
import { CiViewList } from "react-icons/ci";
import { FaBars } from 'react-icons/fa'
import { useApi } from '@/hooks/useFetch'
import { ProductCards } from '@/components/produtsCard'

export default function Home() {

  const { data, loading, error } = useApi();

  
  if (loading) {
    return <p>Carregando...</p>;
  }
  
  if (error) {
    return <p>{error}</p>;
  }

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
          
          <div className={styles.menu_bar}>
            <div className={styles.mobile_buttons}>
              <div className={styles.mobile_list_services}>
                <CiViewList />
              </div>
              <div className={styles.mobile_bars}>
                <FaBars/>
              </div>
            </div>
          </div>
        </header>

        <div className={styles.mobile_menu}>
          <h3>Navegue por nosso site</h3> 

          <ul>
            <li>Início</li>
            <li>Laudos</li>
            <li>Sobre nós</li>
            <li>Certificações</li>
            <li>Contato</li>
          </ul>   
        </div>

        <div className={styles.services_container}>
            {
              MockCardService.map((item,index)=>(
                <ServicesCard key={index} service={item}/>        
              ))
            }
        </div>

      </div>

      <h3 className={styles.section_title}>PRODUTOS</h3>

      <section className={styles.body_container}>
        {
          data?.map((item,index)=>(
            <ProductCards key={index} product={item}/>
          ))
        }
      </section>
    </main>
  )
}

