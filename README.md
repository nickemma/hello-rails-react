# Project Name

Hello Rails From React

# Description the project.

This is a simple web app to test working with rails and react

## Built With

- Languages:
  _**Ruby**_
  _**React**_
  _**Redux**_
  _**Webpack**_
  _**Postgresql**_
- Frameworks: _**Ruby On Rails**_
- Technologies used: _**Visual Studio Code**_

### Requirements

In order to work on this project, you need to have the following dependencies installed:

- [Ruby](https://www.ruby-lang.org/en/)
- [Postgresql](https://www.postgresql.org/)
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Rails](https://rubyonrails.org/)

## Getting Started

### Clone this repository

```bash
$ git clone git@github.com:NickEmma/hello-rails-react.git
$ cd hello-rails-react
```

### Commands to run

Run

```bash
$ bundle install
```

To get all the gems required for the project

Then, run

```bash
$ npm install
```

To install packages such as style linters

To check linters locally, use

```bash
$ rubocop
$ npx stylelint "**/*.{css,scss}"
```

Once you have the project correctly set up, run

```bash
$ bin/rails db:setup
```

To run all migrations, create the database for testing and for development, and insert some data into the database for you to visualize the changes

Finally, each time you make changes to the project, run

```bash
$ bundle exec rspec /spec
```

In the root folder to check the consistency of the app. Please don't make changes to the tests unless completely necessary, and mention it in your PR description.

Important note: Since this project uses webpack for the bundling, you need to run:

```bash
$ ./bin/dev for window users run yarn build --watch and then start the server
```

For you to see the app being applied in the browser during development

## Author

👤 **Nicholas Emmanuel**

- GitHub: [@NickEmma](https://github.com/NickEmma)
- Twitter: [@techieEmma](https://twitter.com/techieEmma)
- LinkedIn: [@Nicholas Emmanuel](https://www.linkedin.com/in/techieemma/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Microverse
- LazyCoders
- Coding Partners
- Inspiration
- etc

## 📝 License

This project is [MIT](./LICENSE) licensed.
