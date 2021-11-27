import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = (props) => {
  /* console.log(
    props
  )    //Reciver all props
  */

  /*console.log(
    props.data[1] //Acess only on onject
  )*/

  const listProducts = props.data;
  
  return (
    <div className={styles.container}>
      <h1>Hello, Lets get start</h1>
      {
        listProducts.map( (item: object, index: number) => {
          return <h2 key={index}>{item.name}</h2>
        } )
      }
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:4000/products')
  const data = await response.json();

  const props = { data }

  return { props } 
}

export default Home
