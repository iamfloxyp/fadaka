/* =====================================================
   PHONES & TABLETS – FULL PRODUCT LIST PAGE
   Renders all items dynamically
===================================================== */

$(document).ready(function () {
  const phones = [
    {
      name: "Apple iPhone 15 Plus 6.7",
      image: "../assets/images/iphone15plus.png",
      monthly: "₦116,666.67/month",
      total: "₦1,400,000.00",
      link: "iphone15plus.html",
    },
    {
      name: "Apple iPhone 15 – 128GB Facetime",
      image: "../assets/images/iphone15.png",
      monthly: "₦110,416.67/month",
      total: "₦1,325,000.00",
      link: "iphone15.html",
    },
    {
      name: "Apple iPhone 16 – 8GB 256GB",
      image: "../assets/images/iphone16.jpg",
      monthly: "₦140,625.00/month",
      total: "₦1,687,500.00",
      link: "iphone16.html",
    },
    {
      name: "Apple iPhone 16 Pro – 8GB 256GB",
      image: "../assets/images/iphone16plus.jpg",
      monthly: "₦196,354.17/month",
      total: "₦2,356,250.00",
      link: "iphone16pro.html",
    },
    {
      name: "Samsung Galaxy S23 Ultra – 12GB 256GB",
      image: "../assets/images/samsungS23.png",
      monthly: "₦220,000.00/month",
      total: "₦2,640,000.00",
      link: "samsungS23.html",
    },
  ];

  function renderPhones() {
    const $grid = $("#phonesListGrid");
    $grid.empty();

    phones.forEach(item => {
      const card = `
        <a href="${item.link}" 
           class="bg-[#F9FAFB] border border-[#EAECF0] rounded-[16px] flex flex-col w-[100%] sm:w-[289px] h-[306px] hover:shadow-lg transition-shadow duration-300">

          <div class="flex justify-center items-center border-b border-[#EAECF0] py-[16px] bg-[#EAECF0] rounded-t-[16px]">
            <img src="${item.image}" alt="${item.name}" class="w-[130px] sm:w-[148px] h-[130px] sm:h-[148px] object-contain">
          </div>

          <div class="flex flex-col justify-between p-[16px] h-[126px] bg-white rounded-b-[16px] text-center sm:text-left">
            <h3 class="text-[15px] sm:text-[16px] font-semibold text-[#101828] leading-[22px] -tracking-[0.03em]">
              ${item.name}
            </h3>

            <div class="flex flex-col gap-[4px] mt-[10px]">
              <p class="text-[13px] sm:text-[14px] font-medium leading-[22px] text-[#004EEB]">
                ${item.monthly}
              </p>
              <p class="text-[13px] sm:text-[14px] font-medium leading-[22px] text-[#101828]">
                ${item.total}
              </p>
            </div>
          </div>
        </a>
      `;

      $grid.append(card);
    });
  }

  renderPhones();
});