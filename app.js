fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then(data => displayCategories(data.categories));
// console.log(data.categories) )

const displayCategories = categories => {
    //  console.log(categories);
    const categoriesDiv = document.getElementById('categories');
    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        const categoryInfo = `
         <img id='showImage' src ="${category.strCategoryThumb}"</p>
         <h3 id='showCategory'>${category.strCategory}</h3>
         <button onclick="displayCategoryDetail('category.idCategory')">Details</button>
         `
        categoryDiv.innerHTML = categoryInfo;
        categoriesDiv.appendChild(categoryDiv);
    });
}

const displayCategoryDetail = random => {
    const url = (`https://www.themealdb.com/api/json/v1/1/random.php`)
    //    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => renderRecipeInfo(data.meals));
    // console.log(data.meals));
}
const renderRecipeInfo = meals => {
    console.log(meals);
    const recipeDiv = document.getElementById('recipeDetail');
    recipeDiv.innerHTML = `
    <h3>Area:${meals[0].strArea}</h3>
    <h3>Meal Category:${meals[0].strCategory}</h3>
    <h3>Ingredients:</h3>
    <p>${meals[0].strIngredient1}</p>
    <p>${meals[0].strIngredient2}</p>
    <p>${meals[0].strIngredient3}</p>
    <p>${meals[0].strIngredient4}</p>
    <p>${meals[0].strIngredient5}</p>
    <p>${meals[0].strIngredient6}</p>
    <p>${meals[0].strIngredient7}</p>
    <p>${meals[0].strIngredient8}</p>
    <p>${meals[0].strIngredient9}</p>
    <p>${meals[0].strIngredient10}</p>
  
    <img src ="${meals[0].strMealThumb}">
    
    `
}

// const searchBtn = document.getElementById('searchButton');
// searchBtn.addEventListener('click',  () => {
//     const inputCategoryName = document.getElementById('recipeName').value;
//     getUpdatedInfo(inputCategoryName)
//     //  console.log('search clicked');

// })
// const updatedInfo = meals => {
//     document.getElementById('showCategory').innerText = meals[0].strCategory || "Unknown Location!";
//     document.getElementById('recipeName').value = "";

// }


    // const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=a`
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => data.meals);


document.getElementById('searchButton').addEventListener('click',function(){
    // console.log('search clicked');
    const inputCategoryName = document.getElementById('categoryName').value;
    // console.log(inputCategoryName);
    // getMealName(inputCategoryName)
 })

// const getMealName = meals =>{
//     const url = `'https://www.themealdb.com/api/json/v1/1/categories.php'`
//     fetch(url)
//     .then(res => res.json())
//     .then(data =>updatedInfo(data.categories));
// }

// const updatedInfo = category =>{
//     document.getElementById('showCategory').innerText = category.strCategory;
// }