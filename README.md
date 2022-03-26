# note app
---
### Hello everyone who came here. The repository contains:
- Simple application for notes and comments on its development
- Usage: nativeBase, react, react-native, react-navigation and react-redux
- A small article on my acquaintance with the beautiful
- Good mood

I will try to describe my acquaintance with navigation and redux in as much detail as possible. The repository will be useful for beginners, because I will point out useful links to articles and share my personal experience.



<div id="header" align="center">
  <img src="https://media0.giphy.com/media/1GEATImIxEXVR79Dhk/giphy.gif?cid=ecf05e47psoox3ksiv3fl9ulllctl5y0xmrt1h10y6b106hb&rid=giphy.gif&ct=g" width="480" />

</div>

---
### Introduction and start.
I needed to explore the possibility of processing data on multiple screens, set up transitions between screens and save data after closing the application.
I broke the problem into components and started solving them.
The first thing I encountered was navigation. The problem between switching screens was solved with react navigation.

[React Navigation](https://reactnavigation.org/) - official site where you can find documentation and many examples of use.

[How to properly navigate with React Navigation](https://medium.com/alienbrains/how-to-properly-navigate-with-react-navigation-e38fe3bf7381) - useful to understand, but outdated. If you read it and then go to the documentation, it will be much easier.

After that, I began to solve the problem of storing data and changing this data on all screens at once. Redux helped me with this. Redux helps to create a state that all screens can access, get information from it and change. To save information after phone close I used redux-persist. It helps to store data in unencrypted form.

[React Redux](https://react-redux.js.org/) - react-redux official website. There you can find documentation and examples of use.

[How To Use Redux Persist in React Native with Asyncstorage](https://blog.jscrambler.com/how-to-use-redux-persist-in-react-native-with-asyncstorage) - great article that clearly shows how to use redux.

After familiarization, you can immediately go and write your application. Good luck.
And I will continue to talk about my attempt to get to know this.


---
### Installing everything you need.
At the initial stage, I will give all the installation commands that I myself used in my application.

#### redux / react-redux / redux-persist / redux-thunk

We need this to set up the state and save data in our application.

<p><code>npm install redux react-redux redux-thunk redux-persist</code><p>

  
#### react-navigation / react-navigation-stack
This will give us the ability to switch between screens in the application.
  
<p><code>npm install react-navigation react-navigation-stack</code><p>
  
#### Other
  
In addition to all of the above, I also used some libraries. They are not mandatory, they just added functionality and ready-made components to the application.
  
<p><code>expo init my-app --template @native-base/expo-template</code><p>
<p><code>npm i @expo/vector-icons</code><p>


  
---
### We write code.
At this point, you should read the articles and leaf through the documentation if you haven't already. 
  
I started development by creating redux and configuring it. My main goal for this project was to master the redux, everything else faded into the background.
To configure redux, I created a separate folder. The entire structure can be viewed in the repository.
The hardest part for me was working with the reducer. Everything else I took from the article.
In the reducer, I have several examples of its use, but to learn more about it, you should go to the documentation now.

  
#### All code is changed and updated. In order not to winterize this file, I'll just tell you which files to look at.
  
- store -> /src/store/inex.js
- reducers -> /src/store/redusers/noteReduer.js
- actions -> /src/store/noteActions.js
- types -> src/store/type.js
  
  
---
### And some more code
  Now navigation. For the application, I needed to make basic navigation on three screens. I built all navigation according to the documentation. The difficult moment for me was the transfer of data from screen to screen.
  But this problem has been solved, so there is a data transfer solution in the code.
  
  
  
#The repository is constantly updated.
  
 
