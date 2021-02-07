const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');


// event listeners
searchBtn.addEventListener('click', getMealList);

// get meal list that matches letter
function getMealList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                    <div  class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img onclick="recipeCheck('${meal.strMeal}');" src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3 >${meal.strMeal}</h3>
                            <p>Click on Image To get recipe</p>
 
                    </div>
                    </div>
                    
                    
                `;
            });
            mealList.classList.remove('notFound');
            
        } else{
            html = "Sorry, we didn't find any meal!"; // error handle
            mealList.classList.add('notFound');
        }

        mealList.innerHTML = html;
    });
}




//display food name in hide panel box

function recipeCheck (mealName, mealId){
    var recipesDiv = document.getElementById('recipes');
var foodNam= document.getElementById('foodName');
foodNam.innerHTML = mealName;
recipesDiv.style.display ='block';

}

//description panel hide

function myFunction() {
    document.getElementById("recipes").style.display = "none";
  }
