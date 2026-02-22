# IEEE_CIC-TPS-CogMI_Website

### 1- Install all prerequisites.
### 2- Install the jekyll and bundler gems.
   gem install jekyll bundler
### 3- Change into the clone directory
### 4- When deploying, change the baseurl to ".." and comment out the "cic/tps/cogmi2026" in the _yml file. After completing, change it back.
### 4.5- Then, execute the command as follows: ./update_version.sh
### 5- Then build the site and make it available on a local server.
   bundle exec jekyll serve
### 6- Browse to http://localhost:4000/
### 7- If you want to deploy the site to the server, use the files in the "_site" folder, and copy/paste to your server.
We have 3 branches, CIC, TPS, Cogmi, make sure switch among those branches.
