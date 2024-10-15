# Resource-profile-management

## Technologies used in the projects:

#### 1. NextJs / ReactJs.

#### 2. Typescript.

## Directory Structure

    ├── pages                                 # Contains Next.js pages
        ├── _app.tsx                          # Component to initialize pages and also manage packages wrapper
        ├── _document.tsx                     # Component to augment our application's <html> and <body> tags
    ├── src
        ├── config                            # Adding global config files here
        ├── api                               # Contain API endpoints
            ├── rest
        ├── modules
            ├── _core                         # Contain reusable things
                ├── components                # Will contain main components ( like login, register form) and   other reusable components
                    ├── fragments             # Will contain smaller parts of components like (input fields)
                ├── layouts                   # Main layout of our page
                ├── styles                    # Style for components
                ├── labels                    # Localize components word/sentence
                ├── utils                     # Utilities needed for project
        ├── styles                            # Different styles throughout the module
        ├── utils                             # Contain helper methods
        ├── styles                            # Style sheet

## Setup Development Enviroment

### Step 1: (Some Basic Steps):

- #### Install Nodejs:

  - To install nodejs first we need to instal nvm (Node.js version manager). [https://github.com/nvm-sh/nvm]

        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

  - Install Node v16.13.0

        nvm install v16.13.0

  - Usually, nvm will switch to use the most recently installed version. You can explicitly tell nvm to use the version we just downloaded by typing:

        nvm use v16.13.0

- #### Install GIT (For Linux & windows users)

        sudo apt-get install git

### Step 2: (Clone Repo):

        git clone <project clone SSH URL>

### Step 3: (Install yarn packages):

        yarn install --frozen-lockfile

### Step 4: (Set env Variable):

- ENV variables are already set so you don't need to change anything.

### Step 5: (To run the local development server):

- Starting Local Server

      yarn run dev

## Open [http://localhost:3000] with your browser to see the result.

## Run Tests

#### Run Tests with Coverage Reports

    yarn run test

### Run Tests In Watch Mode

    yarn run test:watch

## Setup Build

There are two ways to set up a build. By using yarn and docker container.

### yarn Build

#### Run the build script with appropriate environment

    yarn run build

For dev use simple `build` option, for staging use `build:staging` and for production `build:production`.

#### Start the Server

    yarn run start

[configure project link](configure_project.md)

## Install VSCode ESLint Plugin

1. In VSCode, open the extension browser with the button on the left. On the Mac, the keyboard shortcut Cmd+Shift+X should do the same.
2. Search for eslint
3. Install the top result, called [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). (It’s this one with over 10 million downloads)
