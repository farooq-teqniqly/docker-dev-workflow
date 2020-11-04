const { sh, cli } = require("tasksfile");

const dockerOpts = {
  tag: "sample-node-app",
  file: "Dockerfile",
};

const docker = {
  build(options) {
    let tag = dockerOpts.tag;
    let file = dockerOpts.file;

    if (options.dev) {
      tag += "-dev";
      file += ".dev";
    }

    sh(`docker image build -t ${tag} -f ${file} .`);
  },

  run(options) {
    let tag = dockerOpts.tag;

    if (options.dev) {
      tag += "-dev";
    }

    sh(
      `docker container run --rm -it --name ${tag} --volume %cd%:/app -p 3000:3000 ${tag}`
    );
  },
};

function test() {
  sh('echo "Error: no test specified" && exit 1');
}

function run(options) {
  if (options.dev) {
    sh("nodemon");
    return;
  }

  sh("node index.js");
}

cli({
  docker,
  test,
  run,
});
