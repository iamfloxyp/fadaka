$(document).ready(function () {

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
      window.location.href = "./power.html";
    });
  }

  // Initialize
  renderCategory("#powerGrid", "#viewAllPower", power);

});