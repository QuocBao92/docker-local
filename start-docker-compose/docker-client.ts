import * as shell from "shelljs";

export class DockerClient {
  buildImage(imageName: string) {
    if (shell.exec(`docker build -t ${imageName} .`).code) {
      throw Error(`failed to build ${imageName}`);
    }
  }

  startCompose() {
    if (shell.exec("docker-compose up -d").code) {
      throw Error(`failed to start docker-compose`);
    }
  }
}
