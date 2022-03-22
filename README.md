# bookmark app
---
### Hello young developers. This repository contains:
- react native
- native base
- redux
- react navigation

I will try to describe each one in more detail. In general, the repository shows the possibility of local storage of data, work with them and a little navigation. For all claims and questions about the code, you are welcome. Thank you for your attention, information about the development of the project will follow.

<div id="header" align="center">
  <img src="https://media0.giphy.com/media/1GEATImIxEXVR79Dhk/giphy.gif?cid=ecf05e47psoox3ksiv3fl9ulllctl5y0xmrt1h10y6b106hb&rid=giphy.gif&ct=g" width="480" />

</div>

---
### Starting and creating an application
The initial stage of any development. Here I will not touch on setting the expo or anything like that. Everything I write below assumes that you have little knowledge of working with react native( next rn ).
We start with the installation. Our main platform will be NativeBase. It adds ready-made native components to rn.
<div>
<p><code>expo init my-app --template @native-base/expo-template</code><p></div>
Perhaps. This concludes our first step. It was easy. But for a clear sequence of actions, it is necessary to separate it with another step.

---
### Installing the necessary libraries and extensions.
Since we have thought through the system of our application in advance, we can install all the necessary libraries in advance. Of course, we can do it gradually, but...
#### redux / react-redux / redux-persist / redux-thunk
<p><code>npm install redux react-redux redux-thunk redux-persist</code><p>
  
This is all that will allow us to build a good state of our application, which will be saved on the device. More details will come later.
  
  <p>
  
#### react-navigation / react-navigation-stack
  
<p><code>npm install react-navigation react-navigation-stack</code><p>
  
  

This will allow us to build the basic navigation in the application.
  
  
---
### Stage 3. Let the difficulties begin...
This stage symbolizes the beginning of difficulties. I will not describe in detail each action. But to be brief and to the point, now we are creating several mock-up screens of the application.
  
The layouts will now look basic and the code I am attaching here may differ from the code in the repository. You may ask me: "Why can the code be different?". And I will immediately answer your question. The code may vary because the final step in this project is to improve the application. I apologize in advance, but if you follow strictly according to this instruction, then everything will work for you.

- Create folder - scr
We will store all components and scripts in this folder. This is the base.
  
Next, in the scr folder, create the following folders:

  - screens / the folder will contain the screens and functions needed for the screens to work
  - store / the folder will contain our redux and its components
  - navigation / the folder will contain the navigation screens. In general, it was possible not to create a separate folder for our project, but...
  
  After creating the folders, I decided to immediately create page elements, but then I realized that this would lead to future refactoring and changed my mind and moved on to creating my application store.
 
