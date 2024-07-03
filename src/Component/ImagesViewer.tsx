import { Carousel } from "flowbite-react"
import { useState } from "react"


export const ImagesViewer = () => {

    const instructionServiceEndpoint = import.meta.env.VITE_INSTRUCTION_SERVICE_ENDPOINT
    const items = [
        {
            url: "/openresources/gofarmstay/menu_for_foreigner_guest.png",
            note: "The main dishes will be prepared together with rice and vegetables included"
        },
        {
            url: "/openresources/gofarmstay/phucsinh_baverage_menu.jpg",
            note: "Please find the drink from the fridge or talk to us directly"
        },
        {
            url: "/openresources/gofarmstay/mekong_boat_tour.png",
            note: "We also organize the private boat excursion on the Mekong river. Please let me know so we will organize it for you."
        }
    ]

    const [currentSlideNum, setCurrentSlideNum] = useState(0)

    const onSlideChange = (slideNumber: number) => {
        console.info("Changed to slide number " + slideNumber)
        setCurrentSlideNum(slideNumber)
    }

    return (
        <div className="h-full w-auto">
            <span>{items[currentSlideNum].note}</span>
            <Carousel slide={false} onSlideChange={onSlideChange}>
                {items.map((im,i)=>{
                    return(<img key={i} src={instructionServiceEndpoint + im.url}></img>)
                })}
            </Carousel>
        </div>
    )
}
