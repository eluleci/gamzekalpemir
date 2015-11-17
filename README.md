# Gamzekalpemir

This project contains a web site built with ReactJS and a PHP server to fetch and combine posts from Twitter and Instagram.
The app would be more parametrised but I didn't want to optimise and make it more functional. It works fine after few changes.

## How to configure

* There are .php files inside **/server** folder. Put them in your server and change the **$DOMAIN** variable to match your server's address.

* Open **src/MainController.js** and change the **hashTag** and **url** variables to match your servers address.

* There are token and key information in **twitterSearch.php** and **instagramSearch.php**. They're currently working fine. But if they're not working anymore, create your own applications in Twitter and Instagram and replace the tokens and keys with your app's info.

## How to build

Web application can be built and run by following [ReactJS's guide](https://facebook.github.io/react/docs/getting-started.html).

* Once you have **npm** and **babel** installed you can run this command at the root of the project.

 `babel --presets react src --watch --out-dir build`
 
* Then open the **index.html** and it should work. If you want to have white background then you can open **index-light.html**.