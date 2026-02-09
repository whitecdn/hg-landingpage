"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TestimonialsCarouselProps {
    className?: string;
}

const testimonials = [
    {
        id: 1,
        company: "Allura Homes",
        name: "Mike Corrales",
        videoSrc: "/videos/success-stories/mike-corrales.mp4",
    },
    {
        id: 2,
        company: "Elevate Vacation Rentals",
        name: "Shannon St.Val",
        videoSrc: "/videos/success-stories/shannon-st-val.mp4",
    },
    {
        id: 3,
        company: "MI Vacation Rentals",
        name: "Todd Haulenbeek",
        videoSrc: "/videos/success-stories/todd-haulenbeek.mp4",
    },
];

function TestimonialCard({
    data,
    className,
}: {
    data: (typeof testimonials)[0];
    className?: string;
}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        if (videoRef.current) {
            setIsPlaying(true);
            videoRef.current.play();
        }
    };

    return (
        <div className={className}>
            <div className="absolute inset-0 bg-black">
                <video
                    ref={videoRef}
                    src={data.videoSrc}
                    className="w-full h-full object-cover"
                    playsInline
                    controls={isPlaying}
                    onPause={() => setIsPlaying(false)}
                    onPlay={() => setIsPlaying(true)}
                />
                {/* Gradient overlay - only show when not playing */}
                {!isPlaying && (
                    <>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button
                                onClick={handlePlay}
                                className="size-14 md:size-16 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center hover:bg-white/30 transition-colors z-20"
                            >
                                <Play className="size-6 md:size-8 text-white fill-white ml-1" />
                            </button>
                        </div>
                        <div className="absolute z-10 bottom-0 left-0 w-full p-4 md:p-6 pointer-events-none">
                            <p className="text-base md:text-lg font-semibold text-white">
                                {data.company}
                            </p>
                            <p className="text-sm md:text-base text-white/80">
                                {data.name}
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export function TestimonialsCarousel({ className }: TestimonialsCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(1);

    /* 
      Determines the visual position of the card based on the active index.
      Since we have exactly 3 items, the logic is simplified:
      - Active = Center
      - Active + 1 (or 0 if at end) = Right
      - Active - 1 (or end if at 0) = Left
    */
    const getCardPosition = (index: number, activeIndex: number) => {
        if (index === activeIndex) return "center";
        if (index === (activeIndex + 1) % testimonials.length) return "right";
        return "left";
    };

    const variants = {
        center: {
            x: "0%",
            scale: 1,
            opacity: 1,
            zIndex: 10,
            rotateY: 0,
            transition: { type: "spring", stiffness: 300, damping: 30 },
        },
        left: {
            x: "-60%",
            scale: 0.8,
            opacity: 0.4,
            zIndex: 5,
            rotateY: 15,
            transition: { type: "spring", stiffness: 300, damping: 30 },
        },
        right: {
            x: "60%",
            scale: 0.8,
            opacity: 0.4,
            zIndex: 5,
            rotateY: -15,
            transition: { type: "spring", stiffness: 300, damping: 30 },
        },
    };

    const paginate = (newDirection: number) => {
        setActiveIndex((prev) => {
            let nextIndex = prev + newDirection;
            if (nextIndex < 0) nextIndex = testimonials.length - 1;
            if (nextIndex >= testimonials.length) nextIndex = 0;
            return nextIndex;
        });
    };

    return (
        <div className={cn("py-12 md:py-16", className)}>
            <div className="flex flex-col gap-8 md:gap-12">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
                        <span className="font-normal text-white">Hear directly</span>{" "}
                        <span className="font-bold italic text-accent">from the network</span>
                    </h2>
                </div>

                {/* Testimonials Carousel */}
                <div className="relative">
                    {/* Carousel Container - Simple flex with absolute positioning */}
                    <div className="relative w-full max-w-5xl mx-auto aspect-video flex items-center justify-center perspective-[1000px]">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={false}
                                animate={getCardPosition(index, activeIndex)}
                                variants={variants as any}
                                className="absolute w-[95%] md:w-[85%] h-full shadow-2xl rounded-xl overflow-hidden cursor-pointer"
                                onClick={() => {
                                    const pos = getCardPosition(index, activeIndex);
                                    if (pos === "left") paginate(-1);
                                    if (pos === "right") paginate(1);
                                }}
                            >
                                <TestimonialCard
                                    data={testimonial}
                                    className={cn(
                                        "w-full h-full",
                                        getCardPosition(index, activeIndex) !== "center" && "pointer-events-none"
                                    )}
                                />
                                {/* Overlay for non-active cards to indicate interactivity */}
                                {getCardPosition(index, activeIndex) !== "center" && (
                                    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors z-20" />
                                )}
                            </motion.div>
                        ))}

                        {/* Navigation Arrows - Absolute Positioned on Sides */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                paginate(-1);
                            }}
                            className="absolute left-0 md:-left-12 z-20 size-10 md:size-14 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-colors shadow-lg"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="size-6 md:size-8 text-foreground" />
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                paginate(1);
                            }}
                            className="absolute right-0 md:-right-12 z-20 size-10 md:size-14 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-colors shadow-lg"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="size-6 md:size-8 text-foreground" />
                        </button>
                    </div>

                    {/* Mobile Dots */}
                    <div className="flex sm:hidden items-center justify-center gap-2 mt-20">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={cn(
                                    "size-2 rounded-full transition-colors",
                                    index === activeIndex ? "bg-accent" : "bg-border"
                                )}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
