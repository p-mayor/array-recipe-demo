let recipeArray = [
    "Whisk the flour, baking soda, cornstarch, and salt together in a large bowl. Set aside.",
    "In a medium bowl, whisk the melted butter, brown sugar, and granulated sugar together until no brown sugar lumps remain. Whisk in the egg, then the egg yolk. Finally, whisk in the vanilla extract. Pour the wet ingredients into the dry ingredients and mix together with a large spoon or rubber spatula. The dough will be very soft, yet thick. Fold in the chocolate chunks. They may not stick to the dough because of the melted butter, but do your best to combine them. Cover the dough and chill in the refrigerator for 2-3 hours or up to 3-4 days. Chilling is mandatory. I highly recommend chilling the cookie dough overnight for less spreading.",
    "Take the dough out of the refrigerator and allow to slightly soften at room temperature for 10 minutes.",
    "Preheat oven to 325°F (163°C). Line two large baking sheets with parchment paper or silicone baking mats. (Always recommended for cookies.) Set aside.",
    "Roll the dough into balls, about 3 Tablespoons of dough each. The dough will be crumbly, but the warmth of your hands will help the balls stay together. Roll the cookie dough balls to be taller rather than wide, to ensure the cookies will bake up to be thick. See this post for more detail and a photo. Place 8 balls of dough onto each cookie sheet. Press a few more chocolate chips/chunks on top of the dough balls for looks, if desired.",
    "Bake the cookies for 12-13 minutes. The cookies will look very soft and underbaked. They will continue to bake on the cookie sheet. Allow to cool on the cookie sheet for 10 minutes before transferring to a wire rack to cool completely.",
    "Cookies stay fresh covered at room temperature for up to 1 week."
]

let listElement = document.querySelector("#list")

let counter = 0
while (counter < recipeArray.length) {
    let currentRecipeStep = recipeArray[counter]
    if (currentRecipeStep.includes("dough")) {
        listElement.innerHTML += "<li style='background-color:red'>" + currentRecipeStep + "</li>"
    } else {
        listElement.innerHTML += "<li>" + currentRecipeStep + "</li>"
    }
    counter++
}
