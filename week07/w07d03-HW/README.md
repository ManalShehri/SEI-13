
## React State Practice

![](https://66.media.tumblr.com/70cd59c666abdc6ae0e12a5fcbbfbe96/tumblr_nti3ongAp31uev087o2_400.gif)

#### Create a react app that displays all the student names, where the following happens:

#### Step 1: Create a react app using the command `npm create-react-app react-state-hw`

#### Step 2: Start implementing the following functionalities: 

## Functionalities  

*for your intial state use the following image :
(https://cdn0.iconfinder.com/data/icons/characters-2-2-outlined/227/hulk-superhero-marvel-character-avatar-smileface-profile-512.png)*

### 1.

   #### If you click on a name:
   - it turns **red**.
   - The following image is displayed (https://i.pinimg.com/736x/7c/ac/cb/7caccbf5c21d6a9735491c3f7d26837b.jpg)
   - The message `I am the mighty _student_name, How dare you touch me!!?` is displayed under it. 
   - `Hint: use onClick event ` 
   
___
### 2.

   #### If you right click on a name:
   - it turns **blue**. 
   - The following image is displayed (https://d6ce0no7ktiq.cloudfront.net/images/stickers/485t.png)
   - The message `Stop. Poking. Around!!` is displayed under it. 
   - `Hint: use onContextMenu event ` 
___

### 3.

  #### If you double click on a name:
  - it turns **green**.
  - The following image is displayed (https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoo5citERSP4DKv8Euz1BDWffU9Bi_HFqyYg&usqp=CAU)
  - The message `STOP IT!!!`  is displayed under it.
  - `Hint: use onDoubleClick event ` 
   
____


### 4.

   - the message `STOP IT!!!` disappears *after a second* and the name goes back to black.

____




***note*** The css file and the student names have been created for you ! 
in your newly created component , wrap the element with the following div tags 

```
  <>
    <div className="container">
      <div className="card">
      {allStudents}
      </div>
    </div>
    </>
```
