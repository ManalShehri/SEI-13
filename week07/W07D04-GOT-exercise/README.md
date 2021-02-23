# Game of Thrones with React

![](https://www.lstatic.org/UserFiles/images/2017/divert-2019/4-apr/GAME-OF-THRONES.jpg)

---

With React, updating the DOM feels like magic, and we -the developers- are the wizards!

Create a react app that displays the different Game of Thrones Character and Houses characters within them with two different components `<House />` and `<Character />` using 

by fitching data from https://api.got.show/doc/#api-CharacterShow-GetCharactersByNameShow 

how to use the api ! 
### first use api to fetch by Character name : 
 ```https://api.got.show/api/show/characters/:name ```
example 
```js
 let urlOne = axios.get("https://api.got.show/api/show/characters/Petyr Baelish")
```
names : 
// jon snow
// Daenerys Targaryen
// Tyrion Lannister
// Petyr Baelish
 
### second use api to fetch by house name : 
 ```https://api.got.show/api/show/houses/:name ```
example
```js
 let url = axios.get("https://api.got.show/api/show/houses/Red Keep")
```

and fitch the houses by character info  ^ ^ 

>Hint: you can use ```axios.All()``` [learn more](https://www.storyblok.com/tp/how-to-send-multiple-requests-using-axios)
---

### Preview

![](https://git.generalassemb.ly/seir-alahsa/W07D04-GOT-exercise/blob/master/%D9%84%D9%82%D8%B7%D8%A9%20%D8%A7%D9%84%D8%B4%D8%A7%D8%B4%D8%A9%202021-01-13%20040513.png?raw=true)

---

### Styling 

Add this code to your css file, notice that the styling deals with a lot of classes, so consider adding the class names to your elements

>Hint: classes in JSX aren't added the same way we're used to in HTML. Instead of class="name" in your element, you will use className="name"

```css
body {
text-align: center
}

img {
  width: 200px;
  height: 200px;
}

.card {
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
  box-shadow: 1px 1px 1px black;
  width: calc(100%/4);
  float: left;
}

.clear{
  clear: both;
}


@media (max-width:900px){
.card {
  padding: 3px;
}
}

@media (max-width:850px){
  img {
  width: 100px;
  height: 100px;
}
}
```
Created by <b>Yasir Almuhtrish</b>
