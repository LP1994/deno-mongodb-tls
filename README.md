Version: deno-2.0.4

OS: Windows 11 23H2 Professional 22631.4391

mongodb: [mongodb-windows-x86_64-enterprise-8.0.3](https://downloads.mongodb.com/windows/mongodb-windows-x86_64-enterprise-8.0.3.zip)

MongoDB Node.js Driver(npm package): 6.10.0

node: 23.1.0

npm: 10.9.0

1. My demo address:[https://github.com/LP1994/deno-mongodb-tls](url)
2. The log file “**bug-log/bug-log.log**” is the error message reported after running “**deno-mongodb-tls.js**”.
   ![image](https://github.com/user-attachments/assets/144fc242-92a1-4ceb-a66c-62ed86eff8c3)
   ![image](https://github.com/user-attachments/assets/940d3210-f4f9-449b-91fd-e65464bfb8a8)
   ![image](https://github.com/user-attachments/assets/627032cf-90d7-40bc-80d1-4f43e197a378)

3. The log file “**bug-log/mongodb-log.log**” is the connection error information reported by the **MongoDB** database.
   ![image](https://github.com/user-attachments/assets/c1b03d58-c1f5-4d24-9bc3-867af93ff1b5)

4. The folder “**mongodb-ssl**” holds the SSL certificate I generated for **MongoDB**.
5. The file “**mongod.cfg**” is the configuration file I wrote for **MongoDB**.
6. The file “**deno-mongodb-tls.js**” is an example of an SSL-enabled database connection that I wrote, but it never works. The error messages are reported in the two log files in the folder “**bug-log**” mentioned above.
7. The file “**node-mongodb-tls.mjs**” is an example I wrote to run on node and connect to a **MongoDB** database with “SSL” enabled. it works in **node@23.1.0**.
8. The code in the files “**deno-mongodb-tls.js**” and “**node-mongodb-tls.mjs**” is almost identical, but the results are different.
9. I personally tried several different ways, all still failed, by analyzing the MongDB database logs several times and found that “deno” never passed the SSL certificate I set in the code to the MongDB database, so that the MongDB database
   in the verification of the connection, the MongDB database prompts Errors: “Error receiving request from client. Ending connection from remote”, “SSLHandshakeFailed ”, “SSLHandshakeFailed”, “no SSL certificate provided by peer;
   connection rejected”, but I have definitely set the required SSL certificate in the code, and almost the same code is working in the “node” is running successfully and connects to the MongDB database and can read and write to the MongDB
   database.