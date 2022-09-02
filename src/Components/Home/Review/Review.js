import './Review.css'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import testimonial from '../../../images/testimonial/index.jpeg';
import testimonial1 from '../../../images/testimonial/index-1.jpeg';
import testimonial2 from '../../../images/testimonial/index-3.jpeg';
import testimonial3 from '../../../images/testimonial/index-2.jpeg';


const data = [
	{
	  avatar: testimonial,
	  name: "Tina Snow",
	  review:
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quidem nobis omnis beatae incidunt  accusamus quasi, aut reiciendis eum dolore eaque optio nemo. Modi porro facere atque non.",
	},
	{
	  avatar: testimonial2,
	  name: "Shata Wale",
	  review:
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quidem nobis omnis beatae incidunt quibusdam laudantium accusamus quasi, aut reiciendis eum dolore eaque optio nemo.  non.",
	},
	{
	  avatar: testimonial1,
	  name: "Kwame Despite",
	  review:
		"Lorem ipsum, consectetur adipisicing elit. Modi quidem nobis omnis beatae incidunt quibusdam laudantium accusamus quasi, aut reiciendis eum dolore eaque optio nemo. Modi porro facere atque non.",
	},
	{
	  avatar: testimonial3,
	  name: "Nana Ama McBrown",
	  review:
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quidem nobis omnis beatae incidunt quibusdam laudantium accusamus quasi, aut reiciendis eum dolore eaque optio nemo.",
	},
  ];

const Review = () => {
  return (
    <section id="testimonials">
      <h6 className='text-muted mb-0 text-center'>Review From Clients</h6>
      <h2 className="ft-bold text-center"><span className="span-text">Testimonials</span></h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img className='img-fluid' src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  )
}

export default Review
