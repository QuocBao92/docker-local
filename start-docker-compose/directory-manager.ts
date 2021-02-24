import * as shell from "shelljs";
import * as path from "path";

export class DirectoryManager {
  private readonly rootDir = process.cwd();

  cd(serviceDirPath: string) {
    if (shell.cd(path.join(this.rootDir, serviceDirPath)).code) {
      shell.echo(`failed to go to ${serviceDirPath}`);
      throw Error();
    }
  }

  backToRoot() {
    if (shell.cd(this.rootDir).code) {
      shell.echo(`failed to go to ${this.rootDir}`);
      throw Error();
    }
  }
}
