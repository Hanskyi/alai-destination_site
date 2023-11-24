import React from 'react';
import style from './Blog.module.scss';
import Image from 'next/image';
import GoodTripsCard from '@/features/Home/TravelSliderBlog/Components/GoodTripsCard';
import SwiperComponent from '@/components/SwiperComponent/SwiperComponent';

const Blog = () => {
  const content = ['qwd', 'dwq', 'qwd', 'dwq', 'qwd', 'dwq', 'qwd', 'dwq', 'qwd', 'dwq'];

  return (
    <div className={`${style.blog} container`}>
      <div className={style.blog_header}>
        <a className={style.blog_header_link} href="#">
          The good stories
        </a>
        <h1 className={style.blog_header_title}>
          Over 20 years of the Intrepid Foundation: A community of travellers creating positive
          change
        </h1>
      </div>
      <div className={style.blog_publish}>
        <span className={style.blog_publish_author}>
          written by <b>John Doe</b>
        </span>
        <span className={style.blog_publish_date}>March 21, 2023</span>
      </div>
      <div className={style.blog_imageWrap}>
        <Image
          className={style.blog_imageWrap_image}
          width={800}
          height={450}
          priority
          unoptimized
          src="https://i.pinimg.com/originals/0c/5a/14/0c5a140e7ff19f285439e3b3dd439a15.jpg"
          alt="Blog image"
        />
      </div>
      <div className={style.blog_text_block}>
        <p className={style.blog_text_block_inner_text}>
          <strong>
            When the
            <a className={style.blog_text_block_inner_link} href="#" target="_blank">
              Intrepid Foundation
            </a>
            was established more than 20 years ago, there were very few travel companies giving back
            to local communities. Since then, the Foundation has worked with over 62,000 individual
            donors to raise more than AUD $13 million for over 130 community partners around the
            world. And as far Intrepid co-founder, Geoff Manchester, is concerned, they’re just
            getting started.
          </strong>
        </p>
        <p className={style.blog_text_block_inner_text}>
          It all began on a road trip through Africa in 1988.
        </p>
        <p className={style.blog_text_block_inner_text}>
          We’d modified an ex-council truck, and the plan was to drive it across the continent with
          some friends. Darrell [that’s Darrell Wade, Intrepid’s co-founder], his wife Anna and I
          started talking about the concept of Intrepid, what it might become, and we thought: if
          we’re going to make a living out of taking people to developing countries, we should be
          giving back to those countries.
        </p>
        <figure className={style.blog_text_block_inner_imageWrap}>
          <Image
            width={800}
            height={450}
            priority
            unoptimized
            className={style.blog_text_block_inner_imageWrap_image}
            src="https://i.pinimg.com/originals/0c/5a/14/0c5a140e7ff19f285439e3b3dd439a15.jpg"
            alt="Blog image"
          />
          <figcaption className={style.blog_text_block_inner_imageWrap_caption}>
            Intrepid co-founders Geoff Manchester and Darrell Wade.
          </figcaption>
        </figure>
        <p className={style.blog_text_block_inner_text}>
          Pretty soon, Intrepid Travel was born. In those first three years, we started financially
          supporting some small projects in South East Asia. This was before the company was making
          a profit. Darrell and I weren’t even getting paid yet!
        </p>
        <p className={style.blog_text_block_inner_text}>
          In 2002 we created a separate not-for-profit, the Intrepid Foundation, partly to help our
          travellers donate, but also so that Intrepid could start supporting these projects in a
          much bigger way.
        </p>
        <p className={style.blog_text_block_inner_text}>
          It might not sound too revolutionary now, but I’m 99 per cent sure there wasn’t any other
          travel company doing anything like this more than 20 years ago. It was a totally different
          model of philanthropy. The Intrepid approach was based on travellers, not wealthy
          benefactors. The income was coming from ordinary people. It was constant and, in theory,
          perpetual. A brand new way of giving back.
        </p>
        <h2 className={style.blog_text_block_inner_title}>Measuring our impact</h2>
        <p className={style.blog_text_block_inner_text}>
          For a long time, we measured success purely in dollars and the number of organisations we
          could support. That’s still a good way to look at things, but over the years we’ve refined
          our process.
        </p>
        <p className={style.blog_text_block_inner_text}>
          We want to make sure the organisations we’re supporting are making a real difference on
          the ground. Partly this comes down to finding worthy partners – every organisation is
          chosen and carefully vetted by our local destination teams – but we’ve also become more
          rigorous on reporting. Every one of our partners delivers annual statements, so we can
          measure not just the Foundation’s outcomes, but also its impact.
        </p>
        <p className={style.blog_text_block_inner_text}>
          There’s an important difference there, between outcomes and impact. It’s not just what
          your donations do, it’s what they represent. A good outcome might be training 100
          disadvantaged women in a new skill, but the impact could be much greater: better job
          security, a more prosperous community, a living wage, healthier children, more equal
          gender equality, higher living standards, and so on.
        </p>
        <h2 className={style.blog_text_block_inner_title}>Measuring our impact</h2>
        <p className={style.blog_text_block_inner_text}>
          For a long time, we measured success purely in dollars and the number of organisations we
          could support. That’s still a good way to look at things, but over the years we’ve refined
          our process.
        </p>
        <figure className={style.blog_text_block_inner_imageWrap}>
          <Image
            width={800}
            height={450}
            priority
            unoptimized
            className={style.blog_text_block_inner_imageWrap_image}
            src="https://i.pinimg.com/originals/0c/5a/14/0c5a140e7ff19f285439e3b3dd439a15.jpg"
            alt="Blog image"
          />
          <figcaption className={style.blog_text_block_inner_imageWrap_caption}>
            The Intrepid Foundation working with porters on the Inca Trail.
          </figcaption>
        </figure>
        <p className={style.blog_text_block_inner_text}>
          For that reason, we have a partner linked to every multi-day Intrepid trip. That means
          that every time somone travels with us on one of these trips, they can be assured their
          travels are supporting an Intrepid Foundation partner. Intrepid even make a donation to
          the relevant Intrepid Foundation partner on behalf of every traveller on multi-day
          Intrepid trips. To put that into some perspective, Intrepid runs over 1000 different
          trips!
        </p>
        <p className={style.blog_text_block_inner_text}>
          We also want to step up the Foundation’s disaster response work. This is something we’ve
          been doing since the Boxing Day tsunami in 2004, but we’d love to do even more. Over the
          years our travellers have raised money for the Nepal earthquake, the Australian bushfires,
          vaccine equity, the Red Cross in Ukraine, Morocco Earthquake and more.
        </p>
        <p className={style.blog_text_block_inner_text}>
          This is one of the real powers of travel: connecting us to people and communities around
          the world, and empowering us to support those communities. Our internal research shows
          that travellers really value this. They want to make a contribution and feel more
          connected to the places they visit. They want their adventures to mean something.
        </p>
        <figure className={style.blog_text_block_inner_imageWrap}>
          <Image
            width={800}
            height={450}
            priority
            unoptimized
            className={style.blog_text_block_inner_imageWrap_image}
            src="https://i.pinimg.com/originals/0c/5a/14/0c5a140e7ff19f285439e3b3dd439a15.jpg"
            alt="Blog image"
          />
          <figcaption className={style.blog_text_block_inner_imageWrap_caption}>
            A community-based tourism project in Myanmar.
          </figcaption>
        </figure>
        <p className={style.blog_text_block_inner_text}>
          We see Intrepid and The Intrepid Foundation as being intertwined. They’re separate
          organisations, but working towards the same mission. When you book an Intrepid trip, you
          should be able to see, feel and read about its direct impact. You become part of a
          community of conscious travellers, ready to create change. You meet people and learn about
          local issues, and part of you stays connected to those destinations, long after you’ve
          arrived back home.
        </p>
        <p className={style.blog_text_block_inner_text}>
          I’m proud that the Intrepid Foundation has been able to support so many meaningful
          partners over the last 20+ years. But mostly, I’m looking ahead for ways we can increase
          that impact in years to come. And as travellers continue to push for travel experiences
          that matter, I know the future of travel is in good hands.
        </p>
      </div>
      <h3 className={style.blog_title}>Feeling inspired?</h3>
      <div className={style.blog_tour_cards}>
        <SwiperComponent content={content}>
          <GoodTripsCard />
        </SwiperComponent>
      </div>
    </div>
  );
};

export default Blog;
