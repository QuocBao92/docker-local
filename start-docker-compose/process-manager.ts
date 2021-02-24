import { DirectoryManager } from "./directory-manager";
import { DockerClient } from "./docker-client";
import { GitClient } from "./git-client";

import services = require("../repository-gitbranch.json");

export class ProcessManager {
  private directoryManager = new DirectoryManager();
  private gitClient = new GitClient();
  private dockerClient = new DockerClient();
  buildDockerImages() {
    services.forEach((service) => {
      if (!service.enableBuild) {
        return;
      }

      console.log(`\nbuilding ${service.name}`);

      this.directoryManager.cd(service.dirPath);

      const originalBranch = this.gitClient.getCurrentBranchName();

      this.gitClient.checkout(service.branch);
      this.gitClient.pull();

      this.dockerClient.buildImage(service.imageName);

      this.gitClient.checkout(originalBranch);

      this.directoryManager.backToRoot();
    });
  }

  startDockerCompose() {
    console.log("\nstart docker-compose");
    this.dockerClient.startCompose();
  }
}
