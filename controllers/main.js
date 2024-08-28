// Tải dữ liệu từ file Data.json
fetch("../data/Data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Gọi hàm để hiển thị các danh mục với nav-pills
    displayNavPills(data.navPills);

    // Gọi hàm để hiển thị chi tiết các mục
    // displayTabPanes(data.tabPanes);
    // console.log("🚀 ~ .then ~ data.tabPanes:", data.tabPanes);
    // displayAoPanes(data.tabPanes);
    // displayQuanPanes(data.tabPanes);
    // displayGiayPanes(data.tabPanes);
    // displayTuiPanes(data.tabPanes);
    // displayDayPanes(data.tabPanes);
    // displayTocPanes(data.tabPanes);
    // displayNenPanes(data.tabPanes);
    displayPanes(data.tabPanes);
  })
  .catch((error) => {
    console.error("Error loading JSON file:", error);
  });
