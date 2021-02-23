   
   # Group Lab: Merge Conflicts With Your Friends
  
1. Check out your development branch (`git checkout dev`) 
2. Normally, you first ensure that development is up to date with the development branch on GitHub by running `git pull origin dev`. 
3. Now, simulate some work on development:
    - `git commit`
   
4. All the team memebrs should clone then create and check out a new branch using `git checkout -b <Branch Name>` 

5. Now, everyone simulate work on your own branch and start pushing it:
    - `git commit`
    - `git push`
    
6. Next, **ONLY** Persone1 will checkout back to development branch(`dev`) and `git merge person1` so that will send your code to the `dev` branch :
    - `git checkout dev`
    - `git merge`
    - `git commit`
    - `git push`
    
7. Now, everyone should checkout back to development branch(`dev`) and `git pull origin dev` now you will get all the updated code from the repo, then run `git merge <Your Own Branch Name>` and now you will face some cool merge conflict! so now its time for you and your friends to discuss about which code you want in your `dev` branch.

   
