import Image from "next/image";
import Provider from "@/app/wish/Provider";

export async function generateMetadata(props) {
  const searchParams = await props.searchParams
  const nameParam = searchParams.name
  const name = nameParam
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');


  return {
    title: "EID MUBARAK",
    openGraph: {
      title: `Eid Wishes for ${name}`,
      description: "Wishing you love, joy & blessings today. 🌙✨", 
      images: [
        {
          url: 'https://the-eid-wishes.vercel.app/eidog.jpg', // Must be an absolute URL
          width: 800,
          height: 600,
          alt: 'Eid Image',

        },

      ],
      
    },
  }

}

export default function Home() {
  return (
  <>
  <Provider/>
  </> 
  );
}
