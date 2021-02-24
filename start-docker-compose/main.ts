import { ProcessManager } from "./process-manager";

(function main() {
  const pm = new ProcessManager();

  pm.buildDockerImages();
  pm.startDockerCompose();
})();
