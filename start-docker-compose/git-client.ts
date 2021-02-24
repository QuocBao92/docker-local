import * as shell from "shelljs";

export class GitClient {
  checkout(branch: string) {
    if (shell.exec(`git checkout ${branch}`).code) {
      throw Error(`failed to checkout ${branch}`);
    }
  }

  pull() {
    if (shell.exec("git fetch").code) {
      throw Error(`failed to git fetch`);
    }

    if (shell.exec("git pull").code) {
      throw Error(`failed to git pull`);
    }
  }

  getCurrentBranchName() {
    const result = shell.exec("git rev-parse --abbrev-ref HEAD");
    if (result.code) {
      throw Error(`failed to get name of current branch`);
    }
    return result.stdout;
  }
}
