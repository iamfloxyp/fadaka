$(document).ready(function () {

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

  function renderCategory(gridSelector, viewAllBtn, items) {
    const container = $(gridSelector);
    container.empty();

    items.forEach((item) => {
      const card = `
        <a href="${item.link}" class="block">
          <div class="bg-white rounded-lg shadow p-4">
            <img src="${item.image}" class="w-full h-[180px] object-cover rounded"/>
            <h3 class="text-[14px] mt-3 font-[500] text-[#101828]">${item.name}</h3>
            <p class="text-[#475467] text-[13px]">${item.monthly}</p>
            <p class="text-[#004EEB] text-[14px] font-[600]">${item.total}</p>
          </div>
        </a>
      `;
      container.append(card);
    });

    $(viewAllBtn).on("click", function () {
      window.location.href = "./acs.html";
    });
  }

  renderCategory("#coolingGrid", "#viewAllCooling", cooling);

});