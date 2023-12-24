// const accessKey = "-dd7R8B4DR0qoJNToFYAigi65ud3P3Z1OSimcGbMnlM";
// let myData = [];
// const searchForm = document.getElementById("search-form");
// const searchBox = document.getElementById("search-box");
// const searchResult = document.getElementById("search-result");
// const showMoreBtn = document.getElementById("show-more-btn");
// const container = document.getElementById('grid-container');
// let page = 1; // Track the page number
// let keyword = "";

// function fetchData() {
//     keyword = searchBox.value;
//     fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`)
//         .then((res) => res.json())
//         .then((data) => {
//             if(data){
//             myData = data.results.map((item) => ({
//                 id: item.id,
//                 description: item.alt_description,
//                 imageUrl: item.urls.regular,
//                 user: {
//                     username: item.user.username,
//                     name: item.user.name,
//                     portfolioUrl: item.user.portfolio_url,
//                 },
//             }));
//             updateHTML();
//             }
//             else{
//                 alert("NOT FOUND URL");
//             }
//         })
//         .catch((error) => console.log(error));
// }

// function updateHTML() {
//     myData.forEach((item) => {
//         const gridWrapper = document.createElement('div');
//         gridWrapper.classList.add('grid-wrapper');

//         const html = `<div>
//                         <img src="${item.imageUrl}" alt="${item.description || 'not found'}">
//                     </div>`;

//         gridWrapper.innerHTML = html;
//         container.appendChild(gridWrapper);
//     });
// }

// function loadMore() {
//     page++; // Increment the page number
//     fetchData();
// }

// // Event listener for search form submission
// searchForm.addEventListener('submit', function (e) {
//     e.preventDefault();
//     // Clear existing results
//     container.innerHTML = '';
//     // Reset page number
//     page = 1;
//     fetchData();
// });

// // Event listener for "Load More" button
// showMoreBtn.addEventListener('click', function () {
//     loadMore();
// });

const accessKey = "-dd7R8B4DR0qoJNToFYAigi65ud3P3Z1OSimcGbMnlM";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");
const container = document.getElementById('grid-container');
let page = 1; // Track the page number
let keyword = "";

function fetchData() {
    keyword = searchBox.value;
    fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`)
        .then((res) => res.json())
        .then((data) => {
            if (data) {
                // Process data directly without using myData
                const gridWrappers = data.results.map((item) => {
                    const gridWrapper = document.createElement('div');
                    gridWrapper.classList.add('grid-wrapper');

                    const html = `<div>
                                    <img src="${item.urls.regular}" alt="${item.alt_description || 'not found'}">
                                </div>`;

                    gridWrapper.innerHTML = html;
                    return gridWrapper;
                });

                container.append(...gridWrappers);
            } else {
                alert("NOT FOUND URL");
            }
        })
        .catch((error) => console.log(error));
}

function loadMore() {
    page++; // Increment the page number
    fetchData();
}

// Event listener for search form submission
searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Clear existing results
    container.innerHTML = '';
    // Reset page number
    page = 1;
    fetchData();
});

// Event listener for "Load More" button
showMoreBtn.addEventListener('click', function () {
    loadMore();
});

// Initial load
fetchData();
