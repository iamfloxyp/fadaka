

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

 function renderacs() {
    const $grid = $("#coolingListGrid"); 
    $grid.empty();

    cooling.forEach(item => {
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

  renderacs();
