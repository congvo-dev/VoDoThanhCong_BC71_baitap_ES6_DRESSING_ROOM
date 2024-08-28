// Hàm hiển thị danh mục chính
function displayNavPills(navPills) {
  const navPillsContainer = document.getElementById("navPills");
  let contentHTML = "";

  navPills.forEach((pill, index) => {
    let liTag = `<li class="nav-item ">
      <a class="nav-link ${
        index === 0 ? "active" : ""
      }" data-bs-toggle="pill" href="#${pill.type}"
        >${pill.showName}</a
      >
    </li>`;
    contentHTML = contentHTML + liTag;
  });
  document.getElementById("navPills").innerHTML = contentHTML;
}

// Hàm hiển thị chi tiết các mục

function displayPanes(tabPanes) {
  let contentHTML = "";
  let contentAo = "";
  let contentQuan = "";
  let contentGiay = "";
  let contentTui = "";
  let contentDay = "";
  let contentToc = "";
  let contentNen = "";

  tabPanes.forEach((pane, index) => {
    if (pane.type === "topclothes") {
      let divTag = `<div class="col-md-3">
              <div class="card">
                  <img src="${pane.imgSrc_jpg}" alt="${pane.name}" class="img-fluid">
                  <div class="card-body text-center">
                        <h4>${pane.name}</h4>
                        <button onclick="thuAo('${pane.imgSrc_png}')">Thử đồ</button>
                  </div>
              </div>      
          </div>`;
      contentAo = contentAo + divTag;
      document.getElementById("topclothesContainer").innerHTML = contentAo;
    } else if (pane.type === "botclothes") {
      let divTag = `<div class="col-md-3">
              <div class="card">
                  <img src="${pane.imgSrc_jpg}" alt="${pane.name}" class="img-fluid">
                  <div class="card-body text-center">
                        <h4>${pane.name}</h4>
                        <button onclick="thuQuan('${pane.imgSrc_png}')">Thử đồ</button>
                  </div>
              </div>      
          </div>`;
      contentQuan = contentQuan + divTag;
      document.getElementById("botclothesContainer").innerHTML = contentQuan;
    } else if (pane.type === "shoes") {
      let divTag = `<div class="col-md-3">
              <div class="card">
                  <img src="${pane.imgSrc_jpg}" alt="${pane.name}" class="img-fluid">
                  <div class="card-body text-center">
                        <h4>${pane.name}</h4>
                        <button onclick="thuGiay('${pane.imgSrc_png}')">Thử đồ</button>
                  </div>
              </div>      
          </div>`;
      contentGiay = contentGiay + divTag;
      document.getElementById("shoesContainer").innerHTML = contentGiay;
    } else if (pane.type === "handbags") {
      let divTag = `<div class="col-md-3">
              <div class="card">
                  <img src="${pane.imgSrc_jpg}" alt="${pane.name}" class="img-fluid">
                  <div class="card-body text-center">
                        <h4>${pane.name}</h4>
                        <button onclick="thuTui('${pane.imgSrc_png}')">Thử đồ</button>
                  </div>
              </div>      
          </div>`;
      contentTui = contentTui + divTag;
      document.getElementById("handbagsContainer").innerHTML = contentTui;
    } else if (pane.type === "necklaces") {
      let divTag = `<div class="col-md-3">
              <div class="card">
                  <img src="${pane.imgSrc_jpg}" alt="${pane.name}" class="img-fluid">
                  <div class="card-body text-center">
                        <h4>${pane.name}</h4>
                        <button onclick="thuDay('${pane.imgSrc_png}')">Thử đồ</button>
                  </div>
              </div>      
          </div>`;
      contentDay = contentDay + divTag;
      document.getElementById("necklacesContainer").innerHTML = contentDay;
    } else if (pane.type === "hairstyle") {
      let divTag = `<div class="col-md-3">
              <div class="card">
                  <img src="${pane.imgSrc_jpg}" alt="${pane.name}" class="img-fluid">
                  <div class="card-body text-center">
                        <h4>${pane.name}</h4>
                        <button onclick="thuToc('${pane.imgSrc_png}')">Thử đồ</button>
                  </div>
              </div>      
          </div>`;
      contentToc = contentToc + divTag;
      document.getElementById("hairstyleContainer").innerHTML = contentToc;
    } else if (pane.type === "background") {
      let divTag = `<div class="col-md-3">
              <div class="card">
                  <img src="${pane.imgSrc_jpg}" alt="${pane.name}" class="img-fluid">
                  <div class="card-body text-center">
                        <h4>${pane.name}</h4>
                        <button onclick="thuNen('${pane.imgSrc_png}')">Thử đồ</button>
                  </div>
              </div>      
          </div>`;
      contentNen = contentNen + divTag;
      document.getElementById("backgroundContainer").innerHTML = contentNen;
    }
  });
}

// Hàm thử đồ
function thuAo(paneUrl) {
  document.querySelector(".bikinitop").style.background = `url(${paneUrl})`;
}
function thuQuan(paneUrl) {
  document.querySelector(".bikinibottom").style.background = `url(${paneUrl})`;
}
function thuGiay(paneUrl) {
  document.querySelector(".feet").style.background = `url(${paneUrl})`;
}
function thuTui(paneUrl) {
  document.querySelector(".handbag").style.background = `url(${paneUrl})`;
}
function thuDay(paneUrl) {
  document.querySelector(".necklace").style.background = `url(${paneUrl})`;
}
function thuToc(paneUrl) {
  document.querySelector(".hairstyle").style.background = `url(${paneUrl})`;
}
function thuNen(paneUrl) {
  document.querySelector(
    ".background"
  ).style.backgroundImage = `url(${paneUrl})`;
}

// function displayAoPanes(tabPanes) {
//   let contentHTML = "";
//   tabPanes.forEach((pane, index) => {
//     if (pane.type === "topclothes") {
//       let divTag = `<div class="col-md-3">
//               <div class="card">
//                   <img src="${pane.imgSrc_jpg}" alt="${pane.name}" class="img-fluid">
//                   <div class="card-body text-center">
//                         <h4>${pane.name}</h4>
//                         <button onclick="thuAo('${pane.imgSrc_png}')">Thử đồ</button>
//                   </div>
//               </div>
//           </div>`;
//       contentHTML = contentHTML + divTag;
//     }
//   });
//   document.getElementById("topclothesContainer").innerHTML = contentHTML;
// }
// function displayQuanPanes(tabPanes) {
//   let contentHTML = "";
//   tabPanes.forEach((pane, index) => {
//     if (pane.type === "botclothes") {
//       let divTag = `<div class="col-md-3">
//               <div class="card">
//                   <img src="${pane.imgSrc_jpg}" alt="${pane.name}" class="img-fluid">
//                   <div class="card-body text-center">
//                         <h4>${pane.name}</h4>
//                         <button onclick="thuQuan('${pane.imgSrc_png}')">Thử đồ</button>
//                   </div>
//               </div>
//           </div>`;
//       contentHTML = contentHTML + divTag;
//     }
//   });
//   document.getElementById("botclothesContainer").innerHTML = contentHTML;
// }
// function displayGiayPanes(tabPanes) {
//   let contentHTML = "";
//   tabPanes.forEach((pane, index) => {
//     if (pane.type === "shoes") {
//       let divTag = `<div class="col-md-3">
//               <div class="card">
//                   <img src="${pane.imgSrc_jpg}" alt="${pane.name}" class="img-fluid">
//                   <div class="card-body text-center">
//                         <h4>${pane.name}</h4>
//                         <button onclick="thuGiay('${pane.imgSrc_png}')">Thử đồ</button>
//                   </div>
//               </div>
//           </div>`;
//       contentHTML = contentHTML + divTag;
//     }
//   });
//   document.getElementById("shoesContainer").innerHTML = contentHTML;
// }
// function displayTuiPanes(tabPanes) {
//   let contentHTML = "";
//   tabPanes.forEach((pane, index) => {
//     if (pane.type === "handbags") {
//       let divTag = `<div class="col-md-3">
//               <div class="card">
//                   <img src="${pane.imgSrc_jpg}" alt="${pane.name}" class="img-fluid">
//                   <div class="card-body text-center">
//                         <h4>${pane.name}</h4>
//                         <button onclick="thuTui('${pane.imgSrc_png}')">Thử đồ</button>
//                   </div>
//               </div>
//           </div>`;
//       contentHTML = contentHTML + divTag;
//     }
//   });
//   document.getElementById("handbagsContainer").innerHTML = contentHTML;
// }
// function displayDayPanes(tabPanes) {
//   let contentHTML = "";
//   tabPanes.forEach((pane, index) => {
//     if (pane.type === "necklaces") {
//       let divTag = `<div class="col-md-3">
//               <div class="card">
//                   <img src="${pane.imgSrc_jpg}" alt="${pane.name}" class="img-fluid">
//                   <div class="card-body text-center">
//                         <h4>${pane.name}</h4>
//                         <button onclick="thuDay('${pane.imgSrc_png}')">Thử đồ</button>
//                   </div>
//               </div>
//           </div>`;
//       contentHTML = contentHTML + divTag;
//     }
//   });
//   document.getElementById("necklacesContainer").innerHTML = contentHTML;
// }
// function displayTocPanes(tabPanes) {
//   let contentHTML = "";
//   tabPanes.forEach((pane, index) => {
//     if (pane.type === "hairstyle") {
//       let divTag = `<div class="col-md-3">
//               <div class="card">
//                   <img src="${pane.imgSrc_jpg}" alt="${pane.name}" class="img-fluid">
//                   <div class="card-body text-center">
//                         <h4>${pane.name}</h4>
//                         <button onclick="thuToc('${pane.imgSrc_png}')">Thử đồ</button>
//                   </div>
//               </div>
//           </div>`;
//       contentHTML = contentHTML + divTag;
//     }
//   });
//   document.getElementById("hairstyleContainer").innerHTML = contentHTML;
// }
// function displayNenPanes(tabPanes) {
//   let contentHTML = "";
//   tabPanes.forEach((pane, index) => {
//     if (pane.type === "background") {
//       let divTag = `<div class="col-md-3">
//               <div class="card">
//                   <img src="${pane.imgSrc_jpg}" alt="${pane.name}" class="img-fluid">
//                   <div class="card-body text-center">
//                         <h4>${pane.name}</h4>
//                         <button onclick="thuNen('${pane.imgSrc_png}')">Thử đồ</button>
//                   </div>
//               </div>
//           </div>`;
//       contentHTML = contentHTML + divTag;
//     }
//   });
//   document.getElementById("backgroundContainer").innerHTML = contentHTML;
// }
