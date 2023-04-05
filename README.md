<h1 align="center">💎PM2 (Process Management)💎</h1>

![PM2](https://res.cloudinary.com/practicaldev/image/fetch/s--WGzh39Aw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yqnbx749hp9u8mjcn3ai.jpg)

 PM2(Process Management)  is a  **Daemon**  process manager that will help you manage and keep your application online, although it will provide all the logs. Getting started with PM2 is straightforward, it is offered as a simple and intuitive CLI, installable via NPM.

<h2>What is Daemon ❓</h2> 
A daemon is a service process that runs in the background and supervises the system or provides functionality to other processes.

<h2>What I learnt ❓</h2>
I learnt how it daemonize when we close the project and this holds all the logs, monitoring, etc. I verdict this because it is very easy and helpful which helps us to manage lavish things. 

</br>
This are the list which PM2 provide us :-

| No. | List                   |
| --- | ---------------------- |
| 1   | BEHAVIOR CONFIGURATION |
| 2   | SOURCE MAP SUPPORT     |
| 3   | CONTAINER INTEGRATION  |
| 4   | WATCH & RELOAD         |
| 5   | **LOG MANAGEMENT**     |
| 6   | MONITORING             |
| 7   | MODULE SYSTEM          |
| 8   | MAX MEMORY RELOAD      |
| 9   | API                    |
| 10  | KEYMETRICS MONITORING  |
| 11  | PAAS COMPATIBLE        |
| 12  | DEPLOYMENT WORKFLOW    |
| 13  | STARTUP SCRIPTS        |
| 14  | DEVELOPMENT WORKFLOW   |
| 15  | HOT RELOAD             |
| 16  | CLUSTER MODE           |

## Quick Start

### Installation
Simple PM2 package install in global packages.
```
npm install -g pm2
```
### Start An App
The simplest way to start,  Daemonize ,  Monitor  our application

```
pm2 start <filename>
```

 - eg:-
    ```
    pm2 start app.js
    ```

### Some basic commands :-

1. **Start** the application which has to be present in same directory where this operation will get perform.
    
    ```
    pm2 start <filename>
    ```

2. **Restart**
     
     ```
     pm2 restart <filename>
     ```

3. **Reload**
     
     ```
     pm2 reload <app_name>
     ```

4. **Stop**
   
     ```
     pm2 stop <fileName>
     ```

5. **Kill** it will kill the process
    
    ```
    pm2 kill <filename/id>
    ```

6. **Delete** it will delete all the process in go
    
    ```
    pm2 delete
    ```

7. **Lists**
     
     ```
     pm2 ls
     ```

![list image](https://i.imgur.com/LmRD3FN.png)

8. **Logs**
   
   ```
   pm2 logs
   ```