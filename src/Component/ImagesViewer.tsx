import { useState } from 'react'
import reactLogo from '../assets/react.svg'

import { Carousel } from 'flowbite';
import type {
    CarouselItem,
    CarouselOptions,
    CarouselInterface,
} from 'flowbite';
import type { InstanceOptions } from 'flowbite';

export const ImagesViewer = () => {
    // const [count, setCount] = useState(0)

    // const images = [{
    //     id: 1,
    //     url: { reactLogo }
    // }]


    const carouselElement: HTMLElement = document.getElementById('indicators-carousel');

    const items: CarouselItem[] = [
        {
            position: 0,
            el: document.getElementById('carousel-item-1'),
        },
        {
            position: 1,
            el: document.getElementById('carousel-item-2'),
        },
        {
            position: 2,
            el: document.getElementById('carousel-item-3'),
        },
        {
            position: 3,
            el: document.getElementById('carousel-item-4'),
        },
    ];

    // object options with default values
    const options: CarouselOptions = {
        defaultPosition: 1,
        interval: 3000,

        indicators: {
            activeClasses: 'bg-white dark:bg-gray-800',
            inactiveClasses:
                'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
            items: [
                {
                    position: 0,
                    el: document.getElementById('carousel-indicator-1'),
                },
                {
                    position: 1,
                    el: document.getElementById('carousel-indicator-2'),
                },
                {
                    position: 2,
                    el: document.getElementById('carousel-indicator-3'),
                },
                {
                    position: 3,
                    el: document.getElementById('carousel-indicator-4'),
                },
            ],
        },

        // callback functions
        onNext: () => {
            console.log('next slider item is shown');
        },
        onPrev: () => {
            console.log('previous slider item is shown');
        },
        onChange: () => {
            console.log('new slider item has been shown');
        },
    };

    // instance options object
    const instanceOptions: InstanceOptions = {
        id: 'indicators-carousel',
        override: true
    };

    const carousel: CarouselInterface = new Carousel(carouselElement, items, options, instanceOptions);

    carousel.cycle();

    // set event listeners for prev and next buttons
    const $prevButton = document.getElementById('data-carousel-prev');
    const $nextButton = document.getElementById('data-carousel-next');

    $prevButton.addEventListener('click', () => {
        carousel.prev();
    });

    $nextButton.addEventListener('click', () => {
        carousel.next();
    });

    return (
        <>


            <div id="indicators-carousel" className="relative w-full" data-carousel="static">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                        <img src="/src/assets/image.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="/src/assets/react.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="/src/assets/react.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="/src/assets/react.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="/src/assets/react.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>
                </div>
                <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

        </>
    )
}
