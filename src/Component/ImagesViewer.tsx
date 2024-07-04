import { Carousel } from "flowbite-react"
import { useState } from "react"


export const ImagesViewer = () => {

    const instructionServiceEndpoint = import.meta.env.VITE_INSTRUCTION_SERVICE_ENDPOINT
    const items = [
        {
            url: `${instructionServiceEndpoint + "/openresources/gofarmstay/menu_for_foreigner_guest.png"}`,
            //url: "https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg",
            note: "The main dishes will be prepared together with rice and vegetables included"
        },
        {
            url: `${instructionServiceEndpoint + "/openresources/gofarmstay/phucsinh_baverage_menu.jpg"}`,
            note: "Please find the drink from the fridge or talk to us directly"
        },
        {
            url: `${instructionServiceEndpoint + "/openresources/gofarmstay/mekong_boat_tour.png"}`,
            note: "We also organize the private boat excursion on the Mekong river. Please let me know so we will organize it for you."
        }
    ]

    const [currentSlideNum, setCurrentSlideNum] = useState(0)

    const onSlideChange = (slideNumber: number) => {
        console.info("Changed to slide number " + slideNumber)
        setCurrentSlideNum(slideNumber)
    }

    return (
        <div className="h-5/6 md:h-10/12 w-1/4 sm:w-10/12 md:w-full">   
            {/* <span>{items[currentSlideNum].note}</span> */}
            <Carousel slide={false} onSlideChange={onSlideChange} className="h-full w-full">
                {items.map((im, i) => {
                    return (<img key={i} src={im.url}></img>)
                })}
            </Carousel>
        </div>
    )
}
