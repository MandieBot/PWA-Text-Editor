# PWA Text Editor

## Description

This text editor runs in the browser and is a single-page application that meets PWA criteria. It displays data persistence techniques and also functions offline. This allows the user to create notes or code snippets with or without an internet connection, and makes these notes retrievable for a later session.

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Testing](#Testing)
- [Questions](#Questions)

## Installation

The user can install packages and dependencies by running npm install at the root level. The system will automatically cd into both client and server directories to install the necessary packages. Once dependencies are installed, the user will then enter the command npm run build, followed by the command npm run start:dev to launch the server and then utilize the application.

## Usage

Once the text editor is launched in the browser, the user can click the install button and then begin to type any text they desire into the given lines, starting at line 1. They can then hit enter to save the text at any time and it will persist on the page for future access.

## Testing

The user can test the application by entering text into the editor and then using the Chrome DevTools to inspect the page. Here, the user can go into the Application tab to view the created database under IndexedDB as well as the service-worker and the cached storage. The console will also display any errors needing to be resolved to ensure proper application functionality.

## Questions

[MandieBot](https://github.com/MandieBot)
[Link to Deployed Application](https://afternoon-peak-91989.herokuapp.com/)

For additional information, please reach out to amandabotinelly@gmail.com.
