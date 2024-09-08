import { FocusCards } from "./ui/focus-cards";
import Image from "next/image";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Forest Adventure",
      src: (
        <Image
          src="https://images.pexels.com/photos/11884525/pexels-photo-11884525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="na"
          width="600"
          height="400"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Forest Adventure",
      src: (
        <Image
          src="https://images.pexels.com/photos/11884525/pexels-photo-11884525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="na"
          width="600"
          height="400"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Forest Adventure",
      src: (
        <Image
          src="https://images.pexels.com/photos/11884525/pexels-photo-11884525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="na"
          width="600"
          height="400"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Forest Adventure",
      src: (
        <Image
          src="https://images.pexels.com/photos/11884525/pexels-photo-11884525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="na"
          width="600"
          height="400"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Forest Adventure",
      src: (
        <Image
          src="https://images.pexels.com/photos/11884525/pexels-photo-11884525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="na"
          width="600"
          height="400"
          className="h-full w-full object-cover"
        />
      ),
    },

  ];

  //   console.log(cards[1].src)
  return(
    <div className="w-screen h-screen">
        <FocusCards cards ={cards} />

    </div>
  ) ;
}
