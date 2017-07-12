
# Empatica <3 MedReminder project
This react native applications reminds you to take your medications on time!

**Thoughts about ReactNative**
I worked some little react native project previously. I think react native has a future but there are still some serious issues they have to fix. for example; When you working in a really big application you often have to have lots of dependency. As a developer when you depend on lots of dependency while develop an application it is not a good thing. Becuase sometimes it is hard to find where and which dependency is broken! In point of view as a native mobile developer, It is also some issues which I didn't like it and they are like push or popuping navigation controller. It is not easy to understand who is not familiar with react native. I stuggled to change built-in components like I wanted to change back button color and hide tabbar while presenting new view controller etc. There is also another feature which I didn't like it is "[conditional rendering](https://facebook.github.io/react/docs/conditional-rendering.html#inline-if-with-logical--operator)" I wanted to change button name according to boolean value "isTaken" and then I had to write really weird condition syntax. I just didn't like it I prefer to use traditional if condition.

I talked about some negative thoughts about react native but it is time to talk about good features!
I think javascript and swift (kotlin in a way) are will be most widely used languages in the future. Because of that I think ReactNative has a brilliant future for mobile development! I really liked some of react native future like  [Hot reloding](https://facebook.github.io/react-native/blog/2016/03/24/introducing-hot-reloading.html), [Chrome developer tools](https://facebook.github.io/react-native/docs/debugging.html#chrome-developer-tools), [Debugging native code](https://facebook.github.io/react-native/docs/debugging.html#chrome-developer-tools) and their comunity of course!

From point of view as a 5 years experienced native mobile developer. I prefer to work with Swift and Java or Kotlin to develop application. These days it is easier to prototype applications using Swift and Java. But I never thightly stick with this idea as a mobile lover, I always try to new technologies and I did better learn and dive deep into react native in this challange. I will keep developing this application for educational purpose. I'm going to keep forward!

# Project structure

> **/assets** You can find necessary iu images on this folder.

> **/common** This folder contains commonly used UI components for entire application.

> **/screens** This folder contains screens of appliation.

> **/screens** This folder contains screens of appliation.

> **/view** This folder contains specific view of corresponded screen.

# How it works?
Assuming that you have [Node](https://www.google.com) installed (if it is not please navigate to url and download installer and install node in your OS), you can use npm to install the create-react-native-app command line utility:

> npm install -g create-react-native-app

after that you need to install some dependencies, I recommend installing Node and Watchman using  [Homebrew](https://brew.sh/). Run the following commands in a Terminal after installing Homebrew:
> brew install node

> brew install watchman

If you have already installed Node on your system, make sure it is version 4 or newer.
Watchman is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.

**The React Native CLI**
Node comes with npm, which lets you install the React Native command line interface.
Run the following command in a Terminal:

> npm install -g react-native-cli


> If you get an error like Cannot find module 'npmlog', try installing npm directly: curl -0 -L https://npmjs.org/install.sh | sudo sh.


I just developed this application on iOS device. So, I kindly recommend you to test this application on iOS simulator.
If React Native already installed you can simply run;

> *npm install*     // this will install all of your dependency


> *react-native start* 

after that;

>*react-native run-ios*

# Troubleshooting
I don't have strong knowladge about react-native but I did everything that I could. I'm just a newbie but if you have encounter any problem please visit react native offical page. 
https://facebook.github.io/react-native/docs/getting-started.html
https://facebook.github.io/react-native/docs/troubleshooting.html#content

