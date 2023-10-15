import { urlForImage } from "../../sanity/lib/image";
import product from "../../sanity/product";
import { client } from "./lib/sanityClient"
import Image from "next/image";
export const getProduct = async () => {
  const productData = await client.fetch(`*[_type=="product"]{
      title,
      description,
      image
     }`)
  return productData;
   }

export default async function Home() {

  let recvData = await getProduct();
  console.log('Data Output')
  console.log(recvData);
   
  return (
    <>
      {recvData.map((item: any,index:number) => {
        return (
          <div key={index}>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <Image src={urlForImage(item.image.asset).url()} width={100} height={100} alt="Loading"></Image>
         </div>
        )
      })}
    </>
  )
}
