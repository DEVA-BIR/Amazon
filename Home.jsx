import React from 'react'
import "./Home.css"
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img 
            className="home__image"
            src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" alt=""
             />
             <div className="home__row">
                <Product 
                id="12"
                title="Get Your game on"
                price="50$"
                rating="5"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Stores-Gaming/FinalGraphics/Fuji_Gaming_store_Dashboard_card_1x_EN._SY304_CB564799420_.jpg" />
                <Product 
                id="13"
                title="Gaming accessories"
                price="23$"
                rating="4"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"/>
               <Product 
                id="13"
                title="Shop for your home essentials"
                price="23$"
                rating="4"
                image="https://m.media-amazon.com/images/I/313wAT6Iy2L._SY160_.jpg"/>
               <Product 
                id="13"
                title="Shop deals in Fashion"
                price="35$"
                rating="4"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v10._SY304_CB573698005_.jpg"/> 
             </div>
             <div className="home__row">
                <Product
                id="14"
                title="Gaming Corner"
                price="13$"
                rating="4"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Sponges._SY116_CB558654384_.jpg" />
                <Product 
                 id="13"
                 title="New home arrivals under $50"
                 price="23$"
                 rating="4"
                 image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Accessories._SY116_CB558654384_.jpg"/>
                <Product 
                 id="13"
                 title="Refresh your space"
                 price="23$"
                 rating="4"
                 image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/GWRefresh/MobileBTF/QC6/2024_QuadCard_StorageOrg_186x116._SY116_CB557731121_.jpg"/>
                <Product 
                 id="13"
                 title="Fill your basket with joy"
                 price="23$"
                 rating="4"
                 image="https://m.media-amazon.com/images/I/71zk8GJLRLL._AC_SY200_.jpg"/>
               
             </div>
             
             <div className="home__row">
                <Product 
                id="15"
                title="Shop for your home essentials"
                price="13$"
                rating="6"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Smartphone_1x._SY116_CB566164844_.jpg"/>
                <Product
                 id="13"
                 title="Have more fun with family"
                 price="23$"
                 rating="4"
                 image="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_317_HP_NewArrivals_QuadCard_D_03_1x._SY116_CB555960040_.jpg" />
         </div>
             <div className="home__row">
                <Product 
                 id="13"
                 title="Gaming merchandise"
                 price="23$"
                 rating="4"
                 image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1555947_2997386_379x304_1X_en_US._SY304_CB594429819_.jpg"/>
                <Product 
                 id="13"
                 title="Level up your gaming"
                 price="23$"
                 rating="4"
                 image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Cycling_1X._SY116_CB563192628_.jpg"/>
                
             </div>
             <div className="home__row">
                <Product 
                 id="13"
                 title="Fantastic Finds for Home"
                 price="23$"
                 rating="4"
                 image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Golf_1X._SY116_CB563192628_.jpg"/>
                <Product 
                 id="13"
                 title="Explore more in Sports"
                 price="23$"
                 rating="4"
                 image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Accessories_1x._SY116_CB566100767_.jpg"/>
                <Product 
                 id="13"
                 title="Vacation getaway"
                 price="23$"
                 rating="4"
                 image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/GWRefresh/MobileBTF/QC6/2024_QuadCard_IndoorGardening_186x116._SY116_CB557731121_.jpg"/>
                <Product 
                 id="13"
                 title="Explore more in Sports"
                 price="23$"
                 rating="4"
                 image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAUOct2024/TransformersCat_1x._SY304_CB540253513_.jpg"/>
             </div>
             <div className="home__row">
                <Product 
                 id="13"
                 title="Discover these beauty products for you"
                 price="23$"
                 rating="4"
                 image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/ValentinesDay/Fuji_Valentines_Day_Dashboard_card_1x_EN._SY304_CB551651099_.jpg"/>
                <Product 
                 id="13"
                 title="Vacation getaway"
                 price="23$"
                 rating="4"
                 image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAUOct2024/RideOn._SY116_CB545223412_.jpg"/>
                
             </div>
             <div className="home__row">
                <Product 
                 id="13"
                 title="Have more fun with family"
                 price="23$"
                 rating="4"
                 image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mug_1x._SY116_CB667159063_.jpg"/>
                <Product 
                 id="13"
                 title="Fantastic Finds for Home"
                 price="23$"
                 rating="4"
                 image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/BoyWatches_1x._SY116_CB564394432_.jpg"/>
                <Product 
                 id="13"
                 title="Wireless Tech"
                 price="23$"
                 rating="4"
                 image="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg"/>
                <Product 
                 id="13"
                 title="Toys for all ages"
                 price="23$"
                 rating="4"
                 image="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg"/>
             </div>
             <div className="home__row">
                <Product 
                 id="13"
                 title="Plug in with Electronics"
                 price="23$"
                 rating="4"
                 image="https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_SY200_.jpg"/>
                <Product 
                 id="13"
                 title="Level up your beauty routine"
                 price="23$"
                 rating="4"
                 image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg"/>
                <Product 
                 id="13"
                 title="Top categories in Kitchen appliances"
                 price="23$"
                 rating="4"
                 image="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_316_HP_NewArrivals_QuadCard_D_02_1x._SY116_CB555960040_.jpg"/>
                <Product 
                 id="13"
                title="Score the top PCs & Accessories"
                price="23$"
                rating="4"
                image="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_318_HP_NewArrivals_QuadCard_D_04_1x._SY116_CB555960040_.jpg"/>
             </div>
             






        </div>
      
    </div>
  )
}

export default Home
