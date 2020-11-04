const { sh, cli } = require("tasksfile");

function dockerBuildDev() {
  sh("docker image build -t sample-node-app-dev -f Dockerfile.dev .");
}

function dockerRunDev() {
  sh(
    "docker container run --rm -it --name my-sample-node-app-dev --volume %cd%:/app -p 3000:3000 sample-node-app-dev"
  );
}

function dockerBuild() {
  sh("docker image build -t sample-node-app .");
}

function dockerRun() {
  sh(
    "docker container run --rm -it --name my-sample-node-app --volume %cd%:/app -p 3000:3000 sample-node-app"
  );
}

cli({
  dockerBuildDev,
  dockerRunDev,
  dockerBuild,
  dockerRun,
});
