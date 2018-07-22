COMMANDS_TO_RUN+=('echo 5_deploy.sh ...')

#COMMANDS_TO_RUN+=('echo Generate coverage info and deploy it to coveralls.io')
#COMMANDS_TO_RUN+=('cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js')

COMMANDS_TO_RUN+=('npx semantic-release --branch $BRANCH')

COMMANDS_TO_RUN+=('yarn run compodoc')
COMMANDS_TO_RUN+=('echo Copy ci files for prevent errors when deploying')
COMMANDS_TO_RUN+=('cp .travis.yml ./compodoc')
COMMANDS_TO_RUN+=('cp -r .circleci ./compodoc')

COMMANDS_TO_RUN+=('bash scripts/bash_runner.sh scripts/gitlab_sync.sh')
COMMANDS_TO_RUN+=('bash scripts/bash_runner.sh scripts/docker_hub.sh')