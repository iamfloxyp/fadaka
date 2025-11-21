/* ============================================================
   ELECTRONICS PAGE PRODUCT LOADER (jQuery Version)
   Matches exactly the structure used in phones.js
   ============================================================ */

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
    },
    {
      name: "Hisense 55-inch Smart UHD TV",
      image: "./assets/images/Hisense.png",
      monthly: "₦38,083.33/month",
      total: "₦1,177,000.00",
      link: "./product-pages/hisense55.html"
    },
    
    
  ];

  function renderElectronics() {
    const $grid = $("#electronicsListGrid"); 
    $grid.empty();

    electronics.forEach(item => {
      const card = `
       <a href="${item.link}" 
   class="bg-[#F9FAFB] border border-[#EAECF0] rounded-[12px] 
          flex flex-col w-full h-auto hover:shadow-md transition">

    <div class="flex justify-center items-center border-b border-[#EAECF0] py-[10px] bg-[#EAECF0] rounded-t-[12px]">
       <img src="${item.image}" 
            alt="${item.name}" 
            class="w-[80px] h-[80px] object-contain mx-auto">
    </div>

    <div class="flex flex-col justify-between p-[10px] bg-white rounded-b-[12px] text-center">
        <h3 class="text-[13px] font-semibold text-[#101828] leading-[18px]">
            ${item.name}
        </h3>

        <div class="flex flex-col gap-[4px] mt-[8px]">
            <p class="text-[12px] font-medium text-[#004EEB]">
                ${item.monthly}
            </p>
            <p class="text-[12px] font-medium text-[#101828]">
                ${item.total}
            </p>
        </div>
    </div>
 </a>
      `;

      $grid.append(card);
    });
  }

  renderElectronics();
