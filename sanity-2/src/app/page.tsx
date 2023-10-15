import { client } from "./lib/sanityClient"

export const getProduct = async () => {
  const productData = await client.fetch(`*[_type=="product"]{
      title,
      description,
     }`)
  return productData;
   }

export default async function Home() {

  let recvData = await getProduct();
  console.log(recvData);
   
  return (
    <>
      {recvData.map((item: any) => {
        return (
          <>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          </>
        )
      })}
    </>
  )
}
