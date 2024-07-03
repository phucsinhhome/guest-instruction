import { Carousel } from "flowbite-react"

export const ImagesViewer = () => {

    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slide={false}>
                <img src="https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&cs=tinysrgb&h=350" alt="Image 1" />
                <img src="https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&cs=tinysrgb&h=350" alt="Image 2" />
            </Carousel>
        </div>
    )
}
