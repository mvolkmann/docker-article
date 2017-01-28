# Using a node "onbuild" base image causes the following
# to happen automatically when the image is run:
# * Assume the current directory contains package.json.
# * Run "npm install" which installs the dependencies described in package.json.
# * Assume package.json defines a "start" script.
# * Run "npm start".
FROM node:7.4-onbuild

ENV name World

# Override the command provided by node onbuild
# to run npm start with the --silent option.
CMD ["npm", "--silent", "start"]
