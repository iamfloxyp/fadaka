

    // open file picker when clicking camera icon
    $("#avatarUploadBtn").on("click", function () {
        $("#avatarInput").click();
    });

    // preview uploaded image
    $("#avatarInput").on("change", function (e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (event) {
            $("#avatarInner").css({
                "background-image": `url(${event.target.result})`,
                "background-size": "cover",
                "background-position": "center"
            });

            $("#avatarText").hide(); // hide initials
        };

        reader.readAsDataURL(file);
    });

     // OPEN/CLOSE DROPDOWN
    $("#countryArrow, #countrySelect").on("click", function (e) {
        e.stopPropagation();
        $("#countryDropdown").toggleClass("hidden");
    });

    // SELECT COUNTRY
    $(".country-option").on("click", function () {
        const country = $(this).data("country");
        const code = $(this).data("code");

        $("#selectedCountryText").text(country);
        $("#selectedCountryCode").val(code);

        $("#countryDropdown").addClass("hidden");
    });

    // CLICK OUTSIDE TO CLOSE
    $(document).on("click", function () {
        $("#countryDropdown").addClass("hidden");
    });
