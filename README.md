# It is a set of code for Anguler basic. Here I cover some topics. Those are:
1.	Moudle creation
2.	Routing
3.	Form creation

Here I just show all the files and folders of app folder which is placed in the src folder in anguler js framework .

Module Creation:

If we create separated module then when we will called a perticuler module all the component will loaded which are placed in that module instead of loading all component. To create module use this comand:


ng generate module module_name –routing
or
ng g m module_name –routing

Here ‘--routing’ is used to create the routing.module.ts for every module respectively .

For Routing:

In case of set routing we need to import all the component in app-routing.module.ts, which are in the app module. For accessing other module’s component you need to import the child module in this file. Also set a path for each url. 

