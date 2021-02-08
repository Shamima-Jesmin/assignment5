const searchMeals = () => {
    const searchText = document.getElementById('searchField').value;
    // console.log(searchText);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
        // console.log(data));
        .catch(error => displayError('Something Went Wrong!!! Please Try Again Later!'));
    // console.log (error));    
}

// const searchMeals = async () => {
//          const searchText = document.getElementById('searchField').value;
//         const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
//          // load data
//          const res = await fetch(url);
//         const data = await res.json();
//         displayMeals(data.meals);
//      }

const displayMeals = meals => {
    const mealContainer = document.getElementById('mealContainer');
    mealContainer.innerHTML = '';
    // console.log(meals);
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'single-result row align-items-center my-3 p-3';
        mealDiv.innerHTML = `
        <div class="col-md-9">
        <img src ="${meal.strMealThumb}">
            <h3 class="mealName">${meal.strMeal}</h3>
            <p>${meal.strArea}</p>
            
           <button onclick="displayMealDetail ('${meal.strMeal}')">Details</button>
           
        `;

        mealContainer.appendChild(mealDiv);
        // console.log(meal.strArea)
    });
}

const displayError = error => {
    const errorTag = document.getElementById('errorMessage');
    errorTag.innerText = error;
}

const displayMealDetail = meal => {
    console.log(meal);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => renderMealInfo(data.meals[0]));
    //  console.log(data.meals[0]));
}
const renderMealInfo = meals => {
    console.log(meals.strCategory);
    const mealDiv = document.getElementById('mealDetails');
    mealDiv.innerHTML = `
       <img src ="${meals.strMealThumb}">
       <h3>${meals.strMeal}</h3>
       <h4>Ingredients:</h4>
       <p>${meals.strIngredient1}</p>
       <p>${meals.strIngredient2}</p>
       <p>${meals.strIngredient3}</p>
       <p>${meals.strIngredient4}</p>
       <p>${meals.strIngredient5}</p>
       <p>${meals.strIngredient6}</p>
       <p>${meals.strIngredient7}</p>
       <p>${meals.strIngredient8}</p>
       <p>${meals.strIngredient9}</p>
       <p>${meals.strIngredient10}</p>
       <video width="320" height="240" controls>
            <source src="${meals.strYoutube}" type="video/mp4">
            
            </video>
     `
}
