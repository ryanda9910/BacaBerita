# Baca Berita Mobile Apps 
 Baca Berita is Mobile Apps for viewing News on your mobile device.

## Description
This Apps Build based on  React-Native Framework , The Libaries what I use is [Native base](https://nativebase.io/) for styling and make components , for API data I'm using [Open API News](https://newsapi.org/s/indonesia-news-api) for the  **sub-categories** of the data i choose  **Technology and Bussiness** ,I also choose **General** categories for popular news item, for the wrapper to speed up this project I using [Expo](https://docs.expo.io/)  because it's more easier to do installation dependencies, and for the testing Apps I choose [Jest](https://jestjs.io/) to see what positive cases and negative that i created


## Installation
For the Installation , if you want to do PR (pull request) you can setup your environment first that you can see on [React Native Docs](https://reactnative.dev/docs/environment-setup).I recomended you to choose **Expo CLI QUICKSTART** because this project is very compatible with that environmet and setup

## Usage
**How to use this App Project ?**
1.  First you must clone this repository ```git clone https://github.com/ryanda9910/BacaBerita.git ```

2.  After clone the repository  use ```cd newsApp``` to change directory projects

3.  Use ```yarn install``` or ```npm install``` for installing all dependencies on this project

4.  After that , you also need ```yarn start``` if you using yarn or if you using npm you can use ```npm start``` or ```expo start```  for running the project 

5.  Choose Emulator that you want to running on this project, if you on MacOS you can choose **IOS simulator** or if you on Windows or Linux , you can use **Android Emulator**  **Nb: for Android Emulator i recomended you to choose Android System ≤ 6.0 or higher** 

6.  And if you want to run the test just use ```yarn test``` and it will be run the test that i created before

7.  Happy to run this project into your machine 😃 😃 😃 😃.........



## Cases
| Positive Test | Negative Test |
| ------------- | ------------- |
| User can use search bar on the apps same for search the title articles and the source of the media that created on the apps | User can't use the search bar on apps for search time uploaded the news |
| User can see more or detail of the news by press the link that accessible | User can't see more or detail of the news by press the link that accessible |
| User can scroll and choose that categories of the news or articles that have been available | User can't scroll and choose that categories of the news or articles that have been available|
| User can't see warning  on the apps when get data from API for news or article that they see because it has been handle by libraries and function that i created | User can see warning on the apps when get data from API for news or article that they see|



## Showcase Apps 

###### Baca Berita Apps on IPhone

![Baca Berita Apps On IPhone](/IphoneBacaBerita/ShowCaseIphone.png)

###### Baca Berita Apps on Android

![Baca Berita Apps On Android](/AndroidBacaBerita/ShowCaseAndroid.png)


## License

[MIT](https://choosealicense.com/licenses/mit/)



