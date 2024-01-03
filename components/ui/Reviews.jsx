"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const reviewsData = [
  {
    avatar: "/assets/reviews/avatar-1.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium earum sed suscipit vero voluptates!",
  },
  {
    avatar: "/assets/reviews/avatar-2.png",
    name: "Evelyn Anderson",
    job: "Interior Designer",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium earum sed suscipit vero voluptates!",
  },
  {
    avatar: "/assets/reviews/avatar-3.png",
    name: "John Doe",
    job: "Game Dev",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium earum sed suscipit vero voluptates!",
  },
  {
    avatar: "/assets/reviews/avatar-4.png",
    name: "Emily Smith",
    job: "Therapist",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium earum sed suscipit vero voluptates!",
  },
  {
    avatar: "/assets/reviews/avatar-5.png",
    name: "Oliver Taylor",
    job: "Engineer",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium earum sed suscipit vero voluptates!",
  },
  {
    avatar: "/assets/reviews/avatar-6.png",
    name: "Mason Wilson",
    job: "Video Editor",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium earum sed suscipit vero voluptates!",
  },
];

function Reviews(props) {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="h2 section-title mb-12 text-center mx-auto">Reviews</h2>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1400: { slidesPerView: 3 },
          }}
          className="bg-pink-100 h-[350px]"
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      <Image
                        src={person.avatar}
                        alt="person"
                        width={70}
                        height={70}
                        priority
                      />
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Reviews;
