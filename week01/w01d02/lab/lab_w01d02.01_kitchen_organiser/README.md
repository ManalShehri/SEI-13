[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Kitchen Organizer

Download the lesson repository by running the command:

```
$ git clone https://git.generalassemb.ly/seir-alahsa/w01d02.git
```
Go inside the lab folder using
```cd w01d02 & cd lab & lab_w01d02.01_kitchen_organiser```


Using `mv`, `cp`, `rm`, `touch` and `mkdir`, reorganize the kitchen!

Copy the text in your terminal prompt, and save it to a text file.


## Start Here

Your working directory will look like this in the beginning...

    kitchen/
    ├── cans.txt
    ├── fridge
    │   ├── diapers.txt
    │   ├── freezer
    │   │   ├── couch.txt
    │   │   ├── frozenpeas.txt
    │   │   └── icecream.txt
    │   ├── milk.txt
    │   └── trashcan
    │       ├── banana-peels.txt
    │       ├── chicken-bones.txt
    │       ├── egg-shells.txt
    │       └── sink
    │           ├── clean-dishes.txt
    │           ├── delete-me.txt
    │           └── dirty-dishes.txt
    └── pantry
        ├── cans.txt
        ├── cereal.txt
        └── crisper-drawer
            └── lettuce.txt

## End Here

When you're done running your terminal commands, it should look like this...

    kitchen/
    ├── fridge/
    │   ├── crisper-drawer/
    │   │   ├── apples.txt
    │   │   └── lettuce.txt
    │   ├── freezer/
    │   │   ├── frozenpeas.txt
    │   │   └── icecream.txt
    │   └── milk.txt
    ├── pantry/
    │   ├── cans.txt
    │   └── cereal.txt
    ├── sink/
    │   ├── dirty-dishes.txt
    │   └── drying-rack/
    │       └── clean-dishes.txt
    └── trashcan/
        ├── banana-peels.txt
	    ├── chicken-bones.txt
	    └── egg-shells.txt

## `brew install tree`

Use tree to check what your current folder structure looks like. You can install it from the command line by running...

```bash
$ brew install tree
```

You can then run it be entering `tree` from the command line.
