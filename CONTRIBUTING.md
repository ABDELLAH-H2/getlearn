# Contributing to Git Learning Project

Thank you for your interest in contributing! We welcome all contributions to help make this project better. Please follow these guidelines to ensure a smooth collaboration process.

## 1. Branch Naming Convention

We use a strict naming convention for branches to keep our history clean. Please name your branches using the following format:

`type/description`

- **type**: The category of the change.
    - `feat`: For new features (e.g., `feat/contact-form`).
    - `fix`: For bug fixes (e.g., `fix/mobile-layout`).
    - `docs`: For documentation changes (e.g., `docs/readme-update`).
    - `style`: For formatting or visual changes (e.g., `style/dark-mode`).
    - `refactor`: For code restructuring without functionality changes.
- **description**: A short, kebab-case description of the task.

**Examples:**
- `feat/add-logging-system`
- `fix/responsive-navbar`

## 2. Commit Messages

We follow the **Conventional Commits** specification. Your commit messages should be structured as follows:

`type(scope): description`

- **type**: Same as the branch type (`feat`, `fix`, `docs`, etc.).
- **scope** (optional): The specific component affected (e.g., `css`, `html`, `logger`).
- **description**: A concise summary of the change in imperative mood (e.g., "add contact form" not "added contact form").

**Examples:**
- `feat(html): add contact section structure`
- `fix(css): correct padding on mobile devices`
- `docs: update contributing guidelines`

## 3. Workflow Steps

To contribute code, please follow this standard GitHub workflow:

1.  **Fork** the repository to your own GitHub account.
2.  **Clone** your fork to your local machine:
    ```bash
    git clone https://github.com/YOUR-USERNAME/gitlearn.git
    ```
3.  **Create a Branch** for your work:
    ```bash
    git checkout -b feat/your-feature-name
    ```
4.  **Make Changes** and commit them following the conventions above.
5.  **Push** your branch to your fork:
    ```bash
    git push origin feat/your-feature-name
    ```
6.  **Open a Pull Request (PR)** from your fork to the main repository.

## 4. Validation Policy

To maintain code quality, we have the following rules for merging:

- **Code Review**: All Pull Requests must be reviewed and approved by at least **one** other collaborator.
- **Testing**: Ensure that your changes do not break existing functionality. Open `index.html` locally to verify before pushing.
- **Clean History**: Try to squash small "wip" commits into a single clean commit before merging.

Thank you for helping us learn and grow! 🚀
