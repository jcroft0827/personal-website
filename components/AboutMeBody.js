import AboutMeBox from "./AboutMeBox";

export default function AboutMeBody() {
  return (
    <div
      id="about-me-body-section"
      className="w-full"
    >
      <div
        id="about-me-body-container"
        className="max-w-[64rem] mx-auto p-5 flex flex-col gap-10"
      >

        <div id="about-me-body-header-container">
          <h2>
            Why choose me?
          </h2>
        </div>

        <div
          className="grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          <AboutMeBox>
            <h3 className="text-primaryColor mb-2 md:mb-5">
              Creativity
            </h3>
            <p className="font-semibold">
              I'm not just a techie; I'm a creative thinker. I believe that design should be both aesthetically pleasing and highly functional. My designs strike the perfect balance between form and function, ensuring that your website not only looks amazing but also delivers a seamless user experience
            </p>
          </AboutMeBox>

          <AboutMeBox>
            <h3 className="text-primaryColor mb-2 md:mb-5">
              Cutting-Edge Technology
            </h3>
            <p className="font-semibold">
              The digital world is constantly evolving, and so am I. I stay up-to-date with the latest web technologies and design trends to ensure your website is built using the most advanced tools and techniques available.
            </p>
          </AboutMeBox>

          <AboutMeBox>
            <h3 className="text-primaryColor mb-2 md:mb-5">
              Client-Centric Approach
            </h3>
            <p className="font-semibold">
              Your satisfaction is my top priority. I take the time to listen to your needs, goals, and ideas, and then work closely with you throughout the entire project to ensure that the final product exceeds your expectations.
            </p>
          </AboutMeBox>

          <AboutMeBox>
            <h3 className="text-primaryColor mb-2 md:mb-5">
              Responsive Design
            </h3>
            <p className="font-semibold">
              In a mobile-first world, your website will be fully responsive, ensuring a seamless experience for users on all devices.
            </p>
          </AboutMeBox>

          <AboutMeBox>
            <h3 className="text-primaryColor mb-2 md:mb-5">
              Custom Solutions
            </h3>
            <p className="font-semibold">
              I understand that every project is unique. I don't believe in one-size-fits-all solutions. Your website will be tailored to your specific needs and objectives.
            </p>
          </AboutMeBox>

          <AboutMeBox>
            <h3 className="text-primaryColor mb-2 md:mb-5">
              Timely Delivery
            </h3>
            <p className="font-semibold">
              I value your time and always strive to delivery projects on time and within budget.
            </p>
          </AboutMeBox>
        </div>
      </div>
    </div>
  )
}
