# Privacy Policy

The Privacy Policy is a ReactNative based screen that leverages the paralax with a custom header.

## Installation

After you have added the screen module into your project, you will need to configure a few items by modifying the project
files in the github repository. Please note to replace ####### with the numeric sequence for your screen (found in folder name under`/src/features`) and also that the @BluePrint tags for ImportInsertion and NavigationInsertion will be removed in future so placement is with other imports and inside the AppNavigator above other screens.

### STEP 1: Add dependency library to the project.

**/PROJECT_ROOT_DIRECTORY/package.json:**

**ADD** dependencies by updating the `package.json` and inserting the following after the dependencies opening line "_"dependencies": {_ ":

```
"react-native-parallax-scroll-view": "^0.21.3",
"react-native-cardview": "^2.0.5",
```

### Step 2: Add screen into your project screen navigation.

**/src/mainNavigator.js:**
**ADD** immediately below in the section labeled //@BlueprintImportInsertion:

`import PrivacyPolicy from '../features/PrivacyPolicy#######/';`

**ADD** immediately below in the section inside AppNavigator definition labeled //@BlueprintNavigationInsertion section:

`PrivacyPolicy#######: { screen: PrivacyPolicy.navigator },`

### STEP 3: Add Terms screen into the sidemenu navigation.

**/src/config/installed_blueprints.js**
**ADD**
Make sure any screens that aren’t desired in the side menu are removed from the file.

In installed_blueprints.js you need to add objects for every screen that you want to show in the sidemenu/splash screen.
They have a specific format:

`{ name: 'PrivacyPolicy#######', human_name: 'Privacy Policy', access_route: 'PrivacyPolicy#######'}`

**name:** doesn't matter much, its used as a unique key for the side menu and splash screens array of
buttons, it must be unique, that's the only requirement

**human_name:** is what will be displayed in actual app

**access_route:** must be the name of the key in your mainNavigator setup

### STEP 4: Set the left arrow screen redirect and website link.

**/src/features/PrivacyPolicy#######/index.js**

Update the value of `PRIVACY_WEBSITE_URL` in `index.js` with the desired website you would like to redirect users to:

```js
const PRIVACY_WEBSITE_URL = 'https://www.crowdbotics.com/privacy-policy'
```


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
