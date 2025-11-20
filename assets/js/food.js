

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

  function renderFood() {
    const $grid = $("#foodListGrid"); 
    $grid.empty();

    food.forEach(item => {
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

  renderFood();
