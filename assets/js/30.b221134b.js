(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{510:function(t,e,a){t.exports=a.p+"assets/img/architecture_bo1.781d0b62.png"},511:function(t,e,a){t.exports=a.p+"assets/img/bo1_code.cda41839.png"},512:function(t,e,a){t.exports=a.p+"assets/img/vscode_debug_contacts.845f80ae.png"},513:function(t,e,a){t.exports=a.p+"assets/img/browser_swagger_contacts.80883cd3.png"},514:function(t,e,a){t.exports=a.p+"assets/img/browser_bo1.8d5d20c9.png"},515:function(t,e,a){t.exports=a.p+"assets/img/browser_mobile_bo1.e1c2a681.png"},847:function(t,e,a){"use strict";a.r(e);var s=a(26),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"💎-breakout-1-deploy-the-azure-dev-college-sample-application-to-azure-💎"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#💎-breakout-1-deploy-the-azure-dev-college-sample-application-to-azure-💎"}},[t._v("#")]),t._v(" 💎 Breakout 1: Deploy the Azure Dev College sample application to Azure 💎")]),t._v(" "),s("p",[t._v("⏲️ "),s("em",[t._v("Est. time to complete: 30 min.")]),t._v(" ⏲️")]),t._v(" "),s("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[t._v("#")]),t._v(" Here is what you will learn 🎯")]),t._v(" "),s("p",[t._v("Now it's time to get familiar with our sample application. In this challenge you will:")]),t._v(" "),s("ul",[s("li",[t._v("clone the repository to your local machine")]),t._v(" "),s("li",[t._v('setup your "local loop"')]),t._v(" "),s("li",[t._v("deploy a first version to Azure")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(510),alt:"architecture_bo1",title:"architecture_bo1"}})]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("📝 Please check, that all the "),s("RouterLink",{attrs:{to:"/day2/challenges/challenge-0.html"}},[t._v("prerequisites")]),t._v(" are set up in your machine.")],1)]),t._v(" "),s("h2",{attrs:{id:"table-of-contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table Of Contents")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"#setup-local-loop"}},[t._v("Setup Local Loop")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#run-the-contacts-service-locally"}},[t._v("Run the Contacts Service locally")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#deploy-to-azure"}},[t._v("Deploy to Azure")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#finished-before-time"}},[t._v("Finished before Time?")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#wrap-up"}},[t._v("Wrap-Up")])])]),t._v(" "),s("h2",{attrs:{id:"setup-local-loop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-local-loop"}},[t._v("#")]),t._v(" Setup Local Loop")]),t._v(" "),s("p",[t._v("Clone the repository to your local machine. Run this command from a blank folder.")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/azuredevcollege/trainingdays.git\n\nCloning into "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'azure-developer-college'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nremote: Enumerating objects: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("236")]),t._v(", done.\nremote: Counting objects: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("% "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("236")]),t._v("/236"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", done.\nremote: Compressing objects: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("% "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("178")]),t._v("/178"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", done.\nremote: Total "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2473")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("delta "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("89")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", reused "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("177")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("delta "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("51")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", pack-reused "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2237")]),t._v("\nReceiving objects: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("% "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2473")]),t._v("/2473"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22.78")]),t._v(" MiB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.39")]),t._v(" MiB/s, done.\nResolving deltas: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("% "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1392")]),t._v("/1392"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", done.\n")])])]),s("p",[t._v("Switch to the "),s("code",[t._v("azure-developer-college")]),t._v(" folder where the repo has been cloned into and open VS Code from there. We will be using a VS Code Workspace file ("),s("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/workspaces#:~:text=1%20Configure%20settings%20that%20only%20apply%20to%20a,enable%20or%20disable%20extensions%20only%20for%20that%20workspace.",target:"_blank",rel:"noopener noreferrer"}},[t._v("What are VS Code Workspaces?"),s("OutboundLink")],1),t._v("):")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" day2\ncode day2-breakout1.code-workspace\n")])])]),s("p",[t._v("The structure of the workspace is as follows:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(511),alt:"Day2 Workspace Structure",title:"bo1_code"}})]),t._v(" "),s("p",[t._v("The projects that are relevant for this breakout challenge are:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Contacts API")]),t._v(" - contains the backend logic for working with "),s("em",[t._v("contacts")]),t._v(" objects")]),t._v(" "),s("li",[s("strong",[t._v("Contacts Domain Objects")]),t._v(" - contains the defintion for "),s("em",[t._v("contacts")]),t._v(" objects")]),t._v(" "),s("li",[s("strong",[t._v("Contacts Data EF Core")]),t._v(" - contains the persistence logic for "),s("em",[t._v("contacts")]),t._v(" objects")]),t._v(" "),s("li",[s("strong",[t._v("Contacts Interfaces")]),t._v(" - contains interface definitions for "),s("em",[t._v("contacts")]),t._v(" objects")]),t._v(" "),s("li",[s("strong",[t._v("Frontend")]),t._v(" - contains the "),s("em",[t._v("Single Page Application")]),t._v(" (SPA) which is written in Vue.js")])]),t._v(" "),s("p",[t._v("Open each folder and get familiar with the code in there.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("📝 If you have any questions, reach out to one of the proctors.")])]),t._v(" "),s("h2",{attrs:{id:"run-the-contacts-service-locally"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-the-contacts-service-locally"}},[t._v("#")]),t._v(" Run the Contacts Service locally")]),t._v(" "),s("p",[t._v('Now it\'s time to run the contacts API on your local machine. Therefore, a debug configuration has already been prepared for you. So, switch to the "Debug" view in Visual Studio Code and in the drop-down, choose '),s("strong",[t._v("Day2 - Launch SCM Contacts API")]),t._v(". Click the "),s("strong",[t._v('"Run"')]),t._v(" button.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(512),alt:"vscode_debug_contacts",title:"vscode_debug_contacts"}})]),t._v(" "),s("p",[t._v("If you set up your machine correctly, a browser window will open and show the Swagger UI for the "),s("em",[t._v("contacts")]),t._v(" API after a few seconds. Get familiar with all the available operations and also test a few of them via the UI.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(513),alt:"browser_swagger_contacts",title:"browser_swagger_contacts"}})]),t._v(" "),s("h3",{attrs:{id:"preparing-the-spa-for-the-first-run"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preparing-the-spa-for-the-first-run"}},[t._v("#")]),t._v(" Preparing the SPA for the first run")]),t._v(" "),s("p",[t._v("To run the Single Page Application on your local machine, we first need to tell the SPA where to call the contacts service.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("📝 The contacts API endpoint, as well as all other upcoming endpoints, can be dynamically configured per environment).")])]),t._v(" "),s("p",[t._v("Open the file "),s("code",[t._v("public/settings/settings.js")]),t._v(" in the "),s("code",[t._v("Frontend")]),t._v(" folder and make sure the property "),s("code",[t._v("endpoint")]),t._v(" has the value "),s("code",[t._v("http://localhost:5050")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("var uisettings = "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"endpoint"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:5050/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"resourcesEndpoint"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"aiKey"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("This file will be loaded during the startup of our application and will configure the contacts module to use our local service for contacts management.")]),t._v(" "),s("p",[t._v("So, everything is in place now...let's start the application. Go back to the "),s("em",[t._v("Debug")]),t._v(" view, choose "),s("strong",[t._v("Day2 - Launch Frontend")]),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("📝 VS Code will automatically call "),s("code",[t._v("npm install")]),t._v(" and afterwards "),s("code",[t._v("npm run serve")]),t._v(" for you via the launch task. There "),s("strong",[t._v("may")]),t._v(" be a problem when running that debug configuration. In case "),s("code",[t._v("npm")]),t._v(" cannot be started, please go to the command-line and run "),s("code",[t._v("npm install")]),t._v(" and "),s("code",[t._v("npm run serve")]),t._v("!")])]),t._v(" "),s("p",[t._v("⚠ "),s("strong",[t._v("IMPORTANT")]),t._v(": Make sure the contacts API still runs! ⚠")]),t._v(" "),s("p",[t._v("When you run the config, a local build will be kicked-off. You can open a browser and point it the "),s("code",[t._v("http://localhost:8080")]),t._v(" to access the application. Get familiar with it, open the contacts list, create a few contacts, edit a contact and delete one.")]),t._v(" "),s("p",[t._v("If you want to, you can also test the mobile experience of the app by opening the Chrome/Edge Developer Tool ("),s("strong",[t._v("F12")]),t._v(") and switching to a mobile user-agent.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(514),alt:"browser_bo1",title:"browser_bo1"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(515),alt:"browser_mobile_bo1",title:"browser_mobile_bo1"}})]),t._v(" "),s("h2",{attrs:{id:"deploy-to-azure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploy-to-azure"}},[t._v("#")]),t._v(" Deploy to Azure")]),t._v(" "),s("p",[t._v("We have now been able to run the application locally. Of course, we want to have it in Azure. In this first Break Out, we only deploy the "),s("em",[t._v("Contacts")]),t._v(" API to Azure and run the SPA on our local machine.")]),t._v(" "),s("p",[t._v("So, first of all, let's deploy the backend to Azure. You already know how to do it ("),s("RouterLink",{attrs:{to:"/day2/challenges/01-challenge-appservice.html"}},[t._v("Challenge 1 - Azure Web Applications")]),t._v(' is your "cheat sheet"), so here is just an overview:')],1),t._v(" "),s("ol",[s("li",[t._v("Basic Setup via Portal or Azure CLI")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("em",[t._v("Resource group")])]),t._v(" "),s("td",[t._v("new, name it e.g. "),s("code",[t._v("scm-breakout-rg")])])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Location")])]),t._v(" "),s("td",[t._v("West Europe")])])])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Create an Azure Web App")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("em",[t._v("OS")])]),t._v(" "),s("td",[t._v("Windows")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("RuntimeStack")])]),t._v(" "),s("td",[t._v("NET Core 3.1 (LTS)")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Size")])]),t._v(" "),s("td",[t._v("S1")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("AppInsights")])]),t._v(" "),s("td",[t._v("Not needed at the moment")])])])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("Deploy the "),s("em",[t._v("Contacts API")]),t._v(" to Azure (see the tips below)")]),t._v(" "),s("li",[t._v("After deployment, check whether the API is running by opening the Swagger UI")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("You can right-click on the folder "),s("code",[t._v("Contacts API")]),t._v(' and deploy it to the Azure App Service (via "Deploy to Web App..." in the context menu). VS Code will automatically build the project to a folder called '),s("code",[t._v("publish")]),t._v(" and deploy its contents to Azure for you. The configuration for all these steps is located in the files "),s("code",[t._v(".vscode/settings.json")]),t._v(" and "),s("code",[t._v(".vscode/tasks.json")]),t._v(".")])]),t._v(" "),s("p",[t._v("When everything works as expected in Azure, go back to the "),s("code",[t._v("settings.js")]),t._v(" file of your SPA and adjust the "),s("strong",[t._v("endpoint")]),t._v(" property. Enter the value of your newly deployed API for it, e.g. "),s("code",[t._v("https://mynewcontactsapi.azurewebsites.net/")]),t._v(".")]),t._v(" "),s("p",[t._v("Open the browser and check, if your application still works as expected.")]),t._v(" "),s("h2",{attrs:{id:"finished-before-time"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#finished-before-time"}},[t._v("#")]),t._v(" Finished before Time?")]),t._v(" "),s("p",[t._v("Try adding slots to your app and deploy the service to the slot. Afterwards swap it.")]),t._v(" "),s("h2",{attrs:{id:"wrap-up"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wrap-up"}},[t._v("#")]),t._v(" Wrap-Up")]),t._v(" "),s("p",[t._v("🎉 "),s("strong",[s("em",[t._v("Congratulations")])]),t._v(" 🎉")]),t._v(" "),s("p",[t._v("You have now set up your local development environment. You cloned the repository, installed the dependencies of the Single Page Application, ran both services locally and deployed the contacts API to Azure. You made use of:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure AppServices"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.JS"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/day2/challenges/01-challenge-appservice.html"}},[t._v("◀ Previous challenge")]),t._v(" | "),s("RouterLink",{attrs:{to:"/day2/"}},[t._v("🔼 Day 2")]),t._v(" | "),s("RouterLink",{attrs:{to:"/day2/challenges/03-challenge-serverless.html"}},[t._v("Next challenge ▶")])],1)])}),[],!1,null,null,null);e.default=o.exports}}]);