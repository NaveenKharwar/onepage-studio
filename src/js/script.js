import { CountUp } from "countup.js";

// Slick Slider Init
$(".project-slider").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".team-slider").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".testimonial-slider").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});

// CountUp Options
const options = {
  duration: 15,
};

// For awwards winning
let satisfiedCustomers = new CountUp("satisfied-customers", 100, options);
if (!satisfiedCustomers.error) {
  satisfiedCustomers.start();
} else {
  console.error(satisfiedCustomers.error);
}

// For Projects Completed 
let projectsCompleted = new CountUp("projects-completed", 1900, options);
if (!projectsCompleted.error) {
  projectsCompleted.start();
} else {
  console.error(projectsCompleted.error);
}

// For Hours Worked
let hoursWorked = new CountUp("hours-worked", 509100, options);
if (!hoursWorked.error) {
  hoursWorked.start();
} else {
  console.error(hoursWorked.error);
}

// For Awwrds Winning
let awwardsWinning = new CountUp("awwards-winning", 100, options);
if (!awwardsWinning.error) {
  awwardsWinning.start();
} else {
  console.error(awwardsWinning.error);
}
