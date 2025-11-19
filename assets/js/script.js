$(document).ready(function () {

    // dropdon menu category
    
  $("#categorySection").on("click", function (e) {
    e.stopPropagation();

    $("#categoryDropdown").toggle();

    // Responsive position
    let topValue = window.innerWidth < 640 ? 50 : 60;     // small screens vs large
    let leftValue = window.innerWidth < 640 ? 0 : 300;    // mobile vs desktop

    $("#categoryDropdown").css({
      position: "absolute",
      top: topValue + "px",
      left: leftValue + "px"
    });
  });

  // Close when clicking outside
  $(document).on("click", function (e) {
    if (!$(e.target).closest("#categoryWrapper").length) {
      $("#categoryDropdown").hide();
    }
  });
  
// Cart dropdown
  // OPEN / CLOSE CART DROPDOWN
$("#cartContainer").on("click", function (e) {
  e.stopPropagation();
  $("#cartDropdown").toggle();
});

// CLOSE WHEN CLICKING OUTSIDE
$(document).on("click", function (e) {
  if (!$(e.target).closest("#cartContainer, #cartDropdown").length) {
    $("#cartDropdown").hide();
  }
});

  const $slides = $("#heroSlides .slide");
  const $dots = $("#carouselControls div");
  const totalSlides = $slides.length;
  let currentSlide = 0;
  const slideDuration = 5000;
  let autoSlide;

  //  Clear all previously running timers if any
  for (let i = 1; i < 99999; i++) clearInterval(i);
  for (let i = 1; i < 99999; i++) clearTimeout(i);

  //  Function to show a specific slide
  function showSlide(index) {
    $slides.removeClass("opacity-100").addClass("opacity-0");
    $slides.eq(index).removeClass("opacity-0").addClass("opacity-100");

    $dots
      .removeClass("bg-[#155EEF] w-[24px] h-[8px] rounded-[7px]")
      .addClass("bg-[#EAECF0] w-[8px] h-[8px] rounded-full");

    $dots
      .eq(index)
      .removeClass("bg-[#EAECF0] w-[8px] h-[8px] rounded-full")
      .addClass("bg-[#155EEF] w-[24px] h-[8px] rounded-[7px]");
  }

  //  Always initialize the first slide
  showSlide(currentSlide);

  // 🔹 If there’s only one slide
  if (totalSlides === 1) {
    // Keep it permanently active (safety enforcement)
    function keepActive() {
      $slides.eq(0).removeClass("opacity-0").addClass("opacity-100");
      $dots.eq(0)
        .removeClass("bg-[#EAECF0] w-[8px] h-[8px] rounded-full")
        .addClass("bg-[#155EEF] w-[24px] h-[8px] rounded-[7px]");
    }

    keepActive(); // run immediately
    setInterval(keepActive, 3000); // re-apply every 3s just in case

    // stop any auto sliding
    clearInterval(autoSlide);
    autoSlide = null;
  } else {
    // 🔹 Multiple slides → normal rotation
    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
    }

    autoSlide = setInterval(nextSlide, slideDuration);

    // Buttons
    $("#nextButton").click(function () {
      nextSlide();
      clearInterval(autoSlide);
      autoSlide = setInterval(nextSlide, slideDuration);
    });

    $("#prevButton").click(function () {
      prevSlide();
      clearInterval(autoSlide);
      autoSlide = setInterval(nextSlide, slideDuration);
    });

    // Dots
    $dots.click(function () {
      currentSlide = $(this).index();
      showSlide(currentSlide);
      clearInterval(autoSlide);
      autoSlide = setInterval(nextSlide, slideDuration);
    });
  }

    // ---------- MOBILE MENU TOGGLE ----------

    $("#hamburgerBtn").click(function () {
      $(this).toggleClass("open");
      $("#mobileMenu").slideToggle(300);

      const spans = $(this).find("span");
      if ($(this).hasClass("open")) {
        spans.eq(0).css({ transform: "rotate(45deg) translateY(6px)" });
        spans.eq(1).css({ opacity: 0 });
        spans.eq(2).css({ transform: "rotate(-45deg) translateY(-6px)" });
      } else {
        spans.eq(0).css({ transform: "rotate(0)" });
        spans.eq(1).css({ opacity: 1 });
        spans.eq(2).css({ transform: "rotate(0)" });
      }
    });
let currentX = 0;
const itemWidth = 196; // 180px + margin
const visibleItems = 6;
const totalItems = $("#categoryTrack .catItem").length;
const maxX = -(itemWidth * (totalItems - visibleItems));

$("#catNext").click(function () {
    if (currentX > maxX) {
        currentX -= itemWidth;
        $("#categoryTrack").css("transform", `translateX(${currentX}px)`);
    }
});

$("#catPrev").click(function () {
    if (currentX < 0) {
        currentX += itemWidth;
        $("#categoryTrack").css("transform", `translateX(${currentX}px)`);
    }
});

  // ---------- REUSABLE CATEGORY FUNCTION ----------
  function renderCategory(gridSelector, buttonSelector, itemsArray) {
    const $grid = $(gridSelector);
    const $button = $(buttonSelector);
    let showingAll = false;

    // Function to render items
    function renderItems(limit = 4) {
      $grid.empty();
      const visibleItems = itemsArray.slice(0, limit);

      $.each(visibleItems, function (_, item) {
        const card = `
          <a href="${item.link}" class="bg-[#F9FAFB] border border-[#EAECF0] rounded-[16px] flex flex-col w-[90%] sm:w-[289px] h-[306px] hover:shadow-lg transition-shadow duration-300">
            <div class="flex justify-center items-center border-b border-[#EAECF0] py-[16px] bg-[#EAECF0] rounded-t-[16px]">
              <img src="${item.image}" alt="${item.name}" class="w-[130px] sm:w-[148px] h-[130px] sm:h-[148px] object-contain">
            </div>
            <div class="flex flex-col justify-between p-[16px] h-[126px] bg-white rounded-b-[16px] text-center sm:text-left">
              <h3 class="text-[15px] sm:text-[16px] font-semibold text-[#101828] leading-[22px] -tracking-[0.03em]">
                ${item.name}
              </h3>
              <div class="flex flex-col gap-[4px] mt-[10px]">
                <p class="text-[13px] sm:text-[14px] font-medium leading-[22px] text-[#004EEB] -tracking-[0.03em]">
                  ${item.monthly}
                </p>
                <p class="text-[13px] sm:text-[14px] font-medium leading-[22px] text-[#101828] -tracking-[0.03em]">
                  ${item.total}
                </p>
              </div>
            </div>
          </a>
        `;
        $grid.append(card);
      });
    }

    // Initial render (only first 4)
    renderItems(4);

    
  }

  // ---------- PHONES & TABLETS ----------
  const phones = [
    {
      name: "Apple iPhone 15 Plus 6.7",
      image: "./assets/images/iphone15plus.png",
      monthly: "₦116,666.67/month",
      total: "₦1,400,000.00",
      link: "./product-pages/iphone15plus.html",
    },
    {
      name: "Apple iPhone 15 – 128GB Facetime",
      image: "./assets/images/iphone15.png",
      monthly: "₦110,416.67/month",
      total: "₦1,325,000.00",
      link: "./product-pages/iphone15.html",
    },
    {
      name: "Apple iPhone 16 – 8GB 256GB",
      image: "./assets/images/iphone16.jpg",
      monthly: "₦140,625.00/month",
      total: "₦1,687,500.00",
      link: "./product-pages/iphone16.html",
    },
    {
      name: "Apple iPhone 16 Pro – 8GB 256GB",
      image: "./assets/images/iphone16plus.jpg",
      monthly: "₦196,354.17/month",
      total: "₦2,356,250.00",
      link: "./product-pages/iphone16pro.html",
    },
    {
      name: "Samsung Galaxy S23 Ultra – 12GB 256GB",
      image: "./assets/images/samsungS23.png",
      monthly: "₦220,000.00/month",
      total: "₦2,640,000.00",
      link: "./product-pages/samsungS23.html",
    },
  ];

  renderCategory("#phonesGrid", "#viewAllPhones", phones);

  // ---------- HOME ELECTRONICS ----------
  const electronics = [
    {
      name: "KENSTAR 50 Inches VIDAA 4K UHD",
      image: "./assets/images/kenstar.png",
      monthly: "₦38,291.67/month",
      total: "₦459,500.00",
      link: "./product-pages/kenstar50.html",
    },
    {
      name: "MAXI Stand FAN 16-inch White",
      image: "./assets/images/fan.jpg",
      monthly: "₦2,875.00/month",
      total: "₦34,500.00",
      link: "./product-pages/maxifan.html",
    },
    {
      name: "Mora 43-inch LED Smart HD TV",
      image: "./assets/images/smarttv.jpg",
      monthly: "₦26,791.67/month",
      total: "₦321,500.00",
      link: "./product-pages/mora43.html",
    },
    {
      name: "Hisense 55-inch Smart UHD TV",
      image: "./assets/images/Hisense.png",
      monthly: "₦38,083.33/month",
      total: "₦1,177,000.00",
      link: "./product-pages/hisense55.html",
    },
    {
      name: "BRUHM Single Door Refrigerator",
      image: "./assets/images/refrigerator.png",
      monthly: "₦33,000.00/month",
      total: "₦396,000.00",
      link: "./product-pages/bruhm-fridge.html",
    },
  ];

  renderCategory("#electronicsGrid", "#viewAllElectronics", electronics);

  // ---------- ACs, Refrigerators & Coolers ----------
const cooling = [
  {
    name: "HT Freezer Chest LRG HTF-519IS",
    image: "./assets/images/chestfreezer.jpg",
    monthly: "₦38,291.67/month",
    total: "₦459,500.00",
    link: "./product-pages/ht-freezer.html",
  },
  {
    name: "Kenstar Double Door Fridge, 350L",
    image: "./assets/images/kenstar fridge.png",
    monthly: "₦14,708.33/month",
    total: "₦176,500.00",
    link: "./product-pages/kenstar-fridge.html",
  },
  {
    name: "Kenstar Freezer 142L Adjustable",
    image: "./assets/images/kenstar freezer.jpg",
    monthly: "₦2,875.00/month",
    total: "₦34,500.00",
    link: "./product-pages/kenstar-freezer.html",
  },
  {
    name: "BRUHM 205L, 2 Glass Shelve",
    image: "./assets/images/bruhum.jpg",
    monthly: "₦26,791.67/month",
    total: "₦321,500.00",
    link: "./product-pages/bruhm-freezer.html",
  },
];

renderCategory("#coolingGrid", "#viewAllCooling", cooling);

// ---------- Power Solutions & Inverters ----------
  const power = [
    {
      name: "Itel Energy 500W Inverter Power",
      image: "./assets/images/itelenergy.jpg",
      monthly: "₦38,291.67/month",
      total: "₦459,500.00",
      link: "./product-pages/itel-inverter.html",
    },
    {
      name: "15KVA Servo Voltage Stabilizer",
      image: "./assets/images/voltagestabilizer.png",
      monthly: "₦14,708.33/month",
      total: "₦176,500.00",
      link: "./product-pages/servo-stabilizer.html",
    },
    {
      name: "Solar Panel ZN SHINE 605W",
      image: "./assets/images/shinesolar.png",
      monthly: "₦2,875.00/month",
      total: "₦34,500.00",
      link: "./product-pages/shine-solar.html",
    },
    {
      name: "Growatt 10KW Inverter Hybrid",
      image: "./assets/images/growatt.jpg",
      monthly: "₦38,083.33/month",
      total: "₦1,177,000.00",
      link: "./product-pages/growatt-inverter.html",
    },
  ];

  // Initialize category
  renderCategory("#powerGrid", "#viewAllPower", power);

  // ---------- Food & Consumables ----------
  const food = [
    {
      name: "50kg Aga Premium Quality Rice",
      image: "./assets/images/agarice.png",
      monthly: "₦38,291.67/month",
      total: "₦459,500.00",
      link: "./product-pages/aga-rice.html",
    },
    {
      name: "10kg Mama’s Pride Parboiled Rice",
      image: "./assets/images/10kgmama.jpg",
      monthly: "₦14,708.33/month",
      total: "₦176,500.00",
      link: "./product-pages/mama-pride.html",
    },
    {
      name: "25kg MAMA GOLD Rice",
      image: "./assets/images/mamagold.jpg",
      monthly: "₦2,875.00/month",
      total: "₦34,500.00",
      link: "./product-pages/mama-gold.html",
    },
    {
      name: "25kg Mama’s Pride Parboiled Rice",
      image: "./assets/images/25kgmama.png",
      monthly: "₦38,083.33/month",
      total: "₦1,177,000.00",
      link: "./product-pages/mama-pride-25kg.html",
    },
  ];

  // Initialize category
   renderCategory("#foodGrid", "#viewAllFood", food);


  // 1. Categories + keywords
const categories = [
  {
    name: "Phones & Tablets",
    keyword: [
      "phone", "phones", "tablet", "tablets", "iphone", "android", "smartphone",
      "itel", "samsung", "tecno", "infinix", "ipad"
    ],
    page: "phones.html"
  },

  {
    name: "Home Electronics",
    keyword: [
      "electronics", "tv", "television", "smart tv", "led tv", "uhd", "4k",
      "speaker", "fan", "sound", "mora", "hisense", "bruhm"
    ],
    page: "electronics.html"
  },

  {
    name: "Home, Kitchen & Laundry",
    keyword: [
      "kitchen", "laundry", "home", "cooker", "gas", "microwave",
      "washing", "blender", "toaster", "oven"
    ],
    page: "kitchen.html"
  },

  {
    name: "ACs, Refrigerators & Coolers",
    keyword: [
      "ac", "air conditioner", "refrigerator", "fridge", "freezer",
      "cooler", "kenstar", "bruhm", "ht", "deep freezer"
    ],
    page: "acs.html"
  },

  {
    name: "Power Solutions & Inverters",
    keyword: [
      "inverter", "solar", "battery", "generator", "power", "stabilizer",
      "growatt", "itel energy", "solar panel"
    ],
    page: "power.html"
  },

  {
    name: "Food & Consumables",
    keyword: [
      "food", "rice", "bag rice", "mama's pride", "mama gold",
      "aga rice", "parboiled", "grain"
    ],
    page: "food.html"
  },

  {
    name: "Office & Stationery",
    keyword: [
      "stationery", "office", "pen", "book", "notebook", "paper", "printer"
    ],
    page: "stationery.html"
  }
];

// ---------- GLOBAL SEARCH FUNCTION ----------
$("#searchInput").on("keyup", function () {
    let query = $(this).val().toLowerCase().trim();

    if (query === "") return; // empty → do nothing

    // Check each category list
    for (let cat of categories) {
        // If any keyword contains the query → redirect
        if (cat.keyword.some(k => k.toLowerCase().includes(query))) {
            window.location.href = cat.page;
            return;
        }
    }
});

});



// ---------- PAYMENT DROPDOWN FOR PRODUCT PAGE----------
const $clickArea = $("#paymentClickArea");
const $dropdown  = $("#paymentDropdown");
const $input     = $("#paymentInput");

// Open dropdown and position correctly
$clickArea.on("click", function (e) {
  e.stopPropagation();

  const isMobile = window.innerWidth < 1024; // below lg

  if (!isMobile) {
    // DESKTOP / LARGE SCREENS → position with JS
    const rect = this.getBoundingClientRect();

    $dropdown.css({
      position: "absolute",
      top: rect.bottom + window.scrollY + "px",
      left: rect.left + 20 + "px"                    
    });
  } else {
    // MOBILE → let your Tailwind/HTML control the position
    $dropdown.css({
      position: "",   
      top: "320px",
      left: "50px",
      width: ""       
    });
  }

  $dropdown.toggleClass("hidden");
});

// CLICK ITEM → PUT INTO INPUT
$(".dropdown-item").on("click", function () {
  $input.val($(this).text());
  $dropdown.addClass("hidden");
});

// CLICK OUTSIDE → CLOSE
$(document).on("click", function (event) {
  if (
    !$dropdown.is(event.target) &&
    $dropdown.has(event.target).length === 0 &&
    !$clickArea.is(event.target) &&
    $clickArea.has(event.target).length === 0
  ) {
    $dropdown.addClass("hidden");
  }
});