$(document).ready(function () {

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
      window.location.href = "./food.html";
    });
  }

  renderCategory("#foodGrid", "#viewAllFood", food);

});