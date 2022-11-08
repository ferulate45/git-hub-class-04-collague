import styles from '../styles/Home.module.css'
import { ReactPhotoCollage } from "react-photo-collage";
import React, { useState, useEffect } from 'react'
import Collague from './components/collague';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null)
  
  useEffect(() => {
    setLoading(true)
    fetch('/api/readtexts')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
  
  const setting = {
    width: "1200px",
    height: ["300px", "240px"],
    layout: [4,4],
    photos: [],
    showNumOfRemainingPhotos: true,
    name: []
  };
  if(!data) return <h1>Loading...</h1>
  
  data.map((element, index) => {
    setting.photos[index] = 
      {
        source:`/img/${element[0]}`
      }
      setting.name[index] = 
      
        element[1]
      
  })
  
  return (
    <div className={styles.container}>
      <h1>Collage: </h1>
      <Collague setting={setting} />
    </div>
  )
}
