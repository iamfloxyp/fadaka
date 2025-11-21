
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
      image: "../assets/images/iphone15.png",
      monthly: "₦220,000.00/month",
      total: "₦2,640,000.00",
      link: "samsungS23.html",
    },
    {
      name: "Apple iPhone 16 Pro – 8GB 256GB",
      image: "../assets/images/iphone16plus.jpg",
      monthly: "₦196,354.17/month",
      total: "₦2,356,250.00",
      link: "iphone16pro.html",
    },
    
  ];

  function renderPhones() {
    const $grid = $("#phonesListGrid"); 
    $grid.empty();

    phones.forEach(item => {
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

  renderPhones();
