Step 1: Step 1: First, you have to need to open the command prompt and run this command.
set-ExecutionPolicy RemoteSigned -Scope CurrentUser 

When you run this command, you can see that your system has set all policies for the current user as remotely. It will take few seconds to complete this process.

Step 2: Now you have to run the second command on your system. This command is:
Get-ExecutionPolicy

When you have run this command your system has a show “RemoteSigned”. If you have received this message, then your problem will be solved. Now you have to go to the next step to view the list of policies which policy has been updated by the last commands.

Step 3: To view their policy, you need to run this command in your command prompt:
Get-ExecutionPolicy -list