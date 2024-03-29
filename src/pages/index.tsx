import Image from 'next/image'
import FruitColor from '@/components/FruitColor'
import { Fruit } from '@/components/FruitColor'
import AllowValues from '@/components/AllowValues'

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24`}
    >
      <FruitColor fruit={Fruit.Apple} />
      <FruitColor fruit={Fruit.Orange} />
      <FruitColor fruit={Fruit.Banana} />
      <AllowValues />
    </main>
  )
}
