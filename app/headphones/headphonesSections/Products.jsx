"use client"

import React from 'react'

export default function Products() {

    const cards = [
        {
          title: "Bose QuietComfort® 45 Headphones",
          image: "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc45/product_silo_images/QC45-LE_Left-Angle_1200x1022_Midnight-Blue_RGB.png/_jcr_content/renditions/cq5dam.web.320.320.png",
          price: "$270.00"
        },
        {
            title: "Bose QuietComfort® 45 Headphones",
            image: "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc45/product_silo_images/QC45-LE_Left-Angle_1200x1022_Midnight-Blue_RGB.png/_jcr_content/renditions/cq5dam.web.320.320.png",
            price: "$270.00"
          },
        {
            title: "Samsung Galaxy Buds",
            image: "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_earbuds_ii/product_silo_image/COM-3679_QCEBII-LE_Buds_Front_EclipseGrey_hero.png/_jcr_content/renditions/cq5dam.web.320.320.png",
            price: "$390.00"
          },
        {
            title: "Airpods Pro Max 2",
            image: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHNhbXN1bmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=100",
            price: "$250.00"
        },
        
      ]

  return (
    <div>
        <div className='mt-16 '>
        <div  className="mx-10  md:ml-14 md:mb-3 gap-14 md:flex md:flex-wrap">
            {cards.map((card, index) => (
            <div className="pt-14 bg-gray-50 ">
                <div className=' flex items-center justify-center'>
                     
            <img
            src={card.image}
            alt=""
            className="object-cover h-[200px] "
            />
            </div>

            <div className=' bg-yellow-800/80 mt-10 mb-10 md:mb-0'>

            <h2 className="font-extrabold text-base ml-3 pt-5 ">{card.title}</h2>
            <p className="text-sm pt-2 pb-5 ml-3">Headphones</p>
            <p className=' md:ml-[270px] ml-[250px] text-lg font-medium pb-1'>{card.price}</p>
            </div>


            </div>
            ))};
          </div>
        </div>
    </div>
  )
}
