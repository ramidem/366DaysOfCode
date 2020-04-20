# Content

- [x] [Git](https://github.com/ramidem/cs50-python-and-js)
- [ ] [HTML, CSS](https://github.com/ramidem/cs50-python-and-js)
- [ ] [Flask]()
- [ ] [SQL]()
- [ ] [ORMs, APIs]()
- [ ] [JavaScript]()
- [ ] [Front Ends]()
- [ ] [Django]()
- [ ] [Testing, CI/CD]()
- [ ] [GitHub, trTavis CI]()
- [ ] [Scalability]()
- [ ] [Security]()

## Git

- Keeps track of changes to code.
- Synchronozes code between different people.
- Test changes to code wihtoud losing the original.
- Revert back to old versions of code.

**GitHub**

- Social Network for Developers

`git clone <url>` - clone a repository into a new directory.

`git add <filename>` - add file contents to the index.

`git commit -m "<message>"` - record changes to the repository.

`git status` - show the working tree status.

`git push` - update remote refs along with associated projects

`git pull` - fetch from and integrate with another repository or a local branch.

`git log` - show commit logs.

`git reset` - reset current HEAD to the specified state.

      git reset --hard <commit>
      git reset --hard origin/master

_Merge Conflict_, A conflict arises when two separate branches have made edits to the same line in a file, or when a file has been deleted in one branch but edited in the other. [Atlassian](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts)

_Branching_, A branch represents an independent line of development. Branches serve as an abstraction for the edit/stage/commit process. You can think of them as a way to request a brand new working directory, staging area, and project history. New commits are recorded in the history for the current branch, which results in a fork in the history of the project.

`git branch` - view existing branches.

`git branch <branch name>` - create new branch.

`git checkout <branch name>` - go to branch.

`git merge <branch name>` - merge a feature branch. <branch name> is the branch to merge in

**Terminologies**

- Remotes
- Forks
- Pull Requests

## HTML and CSS

**HyperText Markup Language and Cascading Stylesheet**

      <!DOCTYPE html>
      <html>
        <head>
          <title>Document</title>
          <style>
            body {
              background-color: #eee;
              font-family: sans-serif;
            }
          </style>
        </head>
        <body>
          <h1>Headings</h1>
          <h2>Headings</h2>
          <h3>Headings</h3>
          <h4>Headings</h4>
          <h5>Headings</h5>
          <h6>Headings</h6>

          <p>This is a paragraph</p>

          <ol>
            <li>List item in ordered list</li>
            <li>List item in ordered list</li>
          </ol>

          <ul>
            <li>List item in unordered list</li>
            <li>List item in unordered list</li>
          </ul>

          <img src="./img/cat.jpg" widht="500">

          <table>
            <tr>
              <th>Name</th>
              <th>Twitter</th>
            </tr>
            <tr>
              <td>Med Aduh</td>
              <td>@ramidem</td>
            </tr>
          </table>

          <form>
            <input type="text" placeholder="email@me.com" name="email">
            <button>Submit</button>
          </form>
        </body>
      </html>

**DOM**

Document Object Model - The DOM represents a document with a logical tree. Each branch of the tree ends in a _node_, and each node contains _objects_. DOM methods allow programmatic access to the tree. With them you can change the document's structure, style, or content.
