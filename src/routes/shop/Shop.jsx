import SHOP_DATA from '../../shop-data.json';


export const Shop = () => {
  console.log(SHOP_DATA)
  return (

    <div>
   
      {
        

        SHOP_DATA.map(({id,name})=>{

         return <div key={id}>
             <h1>{name}</h1>
          </div>
        })
      }
    </div>
  )
}
