[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# React Router - Homework

### You have a React App ready, all you need to do is install the required libraries:
`npm install react-router-dom`

<br/>

## Game of Thrones views
---

Let's get some more practice with routing in React. There is a large javascript
array for which you to work with located in [gameOfThrones.js](./src/gameOfThrones.js).

Don't forget to import `gameOfThrones.js` & the elements you need from  `react-router-dom`. 

The goal of the homework is to display this data with the following routes:

- `/families` -  show all family names as links to view that family.
- `/families/:id` - show a single family's data with links to view individual
  members of that family.
- `/families/:family_id/members/:id` -  show a single family member's data.

While navigating between pages make sure you don't reload the page.
<br/> 
Show the message "I appear on all pages" on top of every page. 
<br/>
Show an error page when a user enters a page that doesn't exist.
<br/>

<details>
  <summary>Hint</summary>
  Link to member page would look like this: 
  <code>
  
        import { useParams, Link } from 'react-router-dom' 

        // Before component return 
        const { family_id } = useParams()

        <Link to={`/families/${family_id}/members/${member.wikiSuffix}`}>
                    {member.name}
        </Link>
  </code> 
</details>

## Need more of a challenge? 
Create these two routes to handle the following:

- `/families/new` - create a new family.
- `/families/:family_id/members/new` - create a new member for a family.

Replace the message "I appear on all pages" and Create a Top Navigation component  that can easily navigate between pages without reload.

### hints:
- You can save the gameOfThrones array into a state and make changes to it.
- Remember you can send functions(including setState) as props to other components.

<br/>

---

<br/>

## Additional Resources

- [React Router Training](https://reacttraining.com)
- [React Router v5: The Complete Guide](https://www.sitepoint.com/react-router-complete-guide/)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
