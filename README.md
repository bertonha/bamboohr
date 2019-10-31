# How to use it
Create `cypress.env.json` with the `env` session from `cypress.json`
e.g.
```
{
  "username": "my@email.com",
  "password": "mysecretpassword",
  "enterTime": "9:00",
  "exitTime": "5:00"
}
```

run `npm run cypress:open`

# How to run the script for non Techies

1. Install/Check your git version -> [Install](## Install/Check Git)
2. Clone project on a folder -> [Clone](## Install/Check Git)
3. Install Node.js -> [Install](## Install Node.js)

## Install/Check Git
Open terminal on your mac and type `git --version`. If you don’t have git installed already, it will prompt you to install it. Read and agree to the Command Line Tools License Agreement and you are ready to use Git!

Now you are ready to clone the project before running it 🗂, on your terminal navigate to where you want to clone the project. I recommend Documents which you can do by typing `cd Documents` on terminal.

Once you are inside the folder you want to clone the project into type `git clone git@github.com:bertonha/bamboohr.git` and it will start to download the project files.

## Install Node.js
If you have never used Node.js or installed it you will need it to run the script.

Download node.js from this [website first](https://nodejs.org/en/download/).

Or if you are on macOS you can use [Homebrew](https://brew.sh/)

```
brew install node
```

Once node.js is installed, navigate on terminal to the folder where the bamboohr project was cloned `cd bamboohr` Once on the folder you can install the project dependencies by running `npm install`.

And you are done, you can now follow the [How to use it](# How to use it) instructions to run the script 💪
