/* ============================================================
   ELECTRONICS PAGE PRODUCT LOADER (jQuery Version)
   Matches exactly the structure used in phones.js
   ============================================================ */

$(document).ready(function () {

  // 1️⃣ ELECTRONICS PRODUCT LIST
  const electronics = [
    {
      name: "KENSTAR 50 Inches VIDAA 4K UHD",
      image: "./assets/images/kenstar.png",
      monthly: "₦38,291.67/month",
      total: "₦459,500.00",
      link: "./product-pages/kenstar50.html"
    },
    {
      name: "MAXI Stand FAN 16-inch White",
      image: "./assets/images/fan.jpg",
      monthly: "₦2,875.00/month",
      total: "₦34,500.00",
      link: "./product-pages/maxifan.html"
    },
    {
      name: "Mora 43-inch LED Smart HD TV",
      image: "./assets/images/smarttv.jpg",
      monthly: "₦26,791.67/month",
      total: "₦321,500.00",
      link: "./product-pages/mora43.html"
    },
    {
      name: "Hisense 55-inch Smart UHD TV",
      image: "./assets/images/Hisense.png",
      monthly: "₦38,083.33/month",
      total: "₦1,177,000.00",
      link: "./product-pages/hisense55.html"
    },
    {
      name: "BRUHM Single Door Refrigerator",
      image: "./assets/images/refrigerator.png",
      monthly: "₦33,000.00/month",
      total: "₦396,000.00",
      link: "./product-pages/bruhm-fridge.html"
    }
  ];

  // 2️⃣ RENDER FUNCTION (same style as phones.js)
  function renderElectronics() {
    const container = $("#electronicsGrid");

    if (container.length === 0) return; // security check

    container.html(""); // clear before inserting

    electronics.forEach(item => {
      container.append(`
        <a href="${item.link}"
           class="block bg-white rounded-[12px] p-[12px] shadow-sm hover:shadow-lg transition-all duration-200">

          <img src="${item.image}"
               alt="${item.name}"
               class="w-full h-[150px] object-cover rounded-[8px] mb-[10px]" />

          <h3 class="text-[14px] font-[500] text-[#101828] leading-[20px] min-h-[40px]">
            ${item.name}
          </h3>

          <p class="text-[12px] text-[#475467] mt-[6px]">From ${item.monthly}</p>

          <p class="text-[14px] font-[600] text-[#004EEB] mt-[2px]">
            ${item.total}
          </p>
        </a>
      `);
    });
  }

  // 3️⃣ Call Renderer
  renderElectronics();
});