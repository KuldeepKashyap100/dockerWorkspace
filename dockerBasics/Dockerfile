# # All the instructions here are used to setting up the image
# # image -> Template/ Blueprint for the container.
# # container -> is layer on top of the image it is a running instance of image
# # container does not copy over code and environment to new container, a container will use 
# # the environment stored in an image and just adds an extra layer on top of it(ex- running node server process)

# # FROM allows us to build our image up on another base image
# # we can also build image from scratch but we need some kind of 
# # OS or other tool in there which our code needs
# # Just enter the image name it could be locally present on our system
# # or on Docker Hub. When we run any container using this image for 
# # the first time it will be downloaded and cached locally so that it won't be downloaded again 
# FROM node

# # by default all the commands will be run inside the working directory of the image
# # and default working directory is root directory.
# # all the commands will work realtive to this directory
# WORKDIR /app

# # Now we have to tell docker which files present on our local should go on to the image
# # COPY command is used for that.
# # COPY . .  -> here we specify two paths, 
# # first path is our path present in our local system(i.e currently pointing to path where Dockerfile lives)[Host file path]
# # excluding the Dockerfile though
# # second path [image/container] file path
# # every image/container has its own file system that is detached from our file system
# COPY . /app

# # After copying all the files we want to run a command in the image
# # by default all the commands will be run inside the working directory of the image
# # and default working directory is root directory
# RUN npm install


# # when we run the container it will not work though because container is isolated
# # from our local environment and as a result it has its own internal network
# # and when we listen to port in the node application inside our container
# # the container does not expose that port to our local machine,
# # so we won't be able to listen on that port just because something
# # is listening inside our container.
# # below command will let docker know that when this container is started
# # we wanna expose a port to our loacl system
# # it is only for documentation purposes, it actually does not do anything
# EXPOSE 3000

# # we could have used RUN node server.js
# # but this start the server when the image is being build
# # we should use CMD instruction. the difference is that it will not
# # be executed when the image is created but when the container is started based on that image.
# # the syntax is little bit different it takes an array as input and we have to split our command
# # if we don't specify CMD, CMD of base image will be executed.
# # with no base image and no CMD we will get an error.
# CMD ["node", "server.js"]




# now we have instructions to create an image
# and that's what build command does
# it tells docker to build a new custom image
# based on a docker file and we also have to specify
# the path where this docker file is located
# docker build .


# above command will create an image and will return image id
# now that image is created we can create an instance of it
# which we call container using run command and image id
# you don't always have to copy / write out the full id.
# You can also just use the first (few) character(s) of image_id - just enough to have a unique identifier.
# docker run image_id

# to get the list of running containers
# docker ps

# to stop the container
# docker stop container_name

# to expose a port we have to use -p flag, which stands for publish
# it tells docker under which local port of our machine, 
# this docker container port should be accessible
# syntax -> docker run -p local_port:container_exposed_port image_id



# images work on layer based architecture
# all the instructions are cacheable layers and docker cache the response of these layers
# and if rebuild again it will take split second because result of all the instructions
# is cached. but let's say we have 5 layers and user changed something so layer 3 needs to 
# rerun some instructions again now the below layer's will also not use the cache results but perform
# operations again.




FROM node

WORKDIR /app

COPY package.json /app

# so now npm install will not run every time any file has changed,
# it will only run if there is any change in package.json
RUN npm install 

COPY . /app

EXPOSE 3000

CMD ["node", "server.js"]


# We can run the container either in attached mode or detached mode.
# by default, it is set to attached mode that means we will be able to
# see the output of container in console we can disable it by adding -d flag
# in run command. we can also use "docker attach container_name" to attach again
# to the running container.

# LISTING COMMANDS
# to list all running containers -> "docker ps"
# to list all containers -> "docker ps -a"
# to list all images -> "docker iamges"

# REMOVE COMMANDS
# to remove container -> "docker rm container_name"
# we can remove container if it is not already running
# to remove images -> "docker rmi image_id"
# we can remove images if it is not being used by any container(wheather is running or not)
# to remove all containers that is not running -> "docker container prune"
# to remove all images that is not being used by any container -> "docker image prune"


# CONTAINER START COMMANDS
# to name to containers while running 
# we can use --name flag to set the name
# to remove to container when it stops running, we can --rm flag when we start a container.

# "docker start container_name" will start the already existing container
# run command creates a new container every time.
# To make the terminal on host interactive, we can use -i flag (that keeps the STDIN open)
# in combination with -t flag (that creates sudeo terminal).

# NOTE -
# docker provides commands to copy files to and from the running container
# it is very error prone but 2 scenarios where it could be used is getting
# logs out of the running container or changing configuration files.
# -> "docker cp souce_dir_of_host container_name:/target_dir_inside_container"


# IMAGE BUILD COMMAND
# to set the name of a image, it is little different from container
# -> "docker build -t image_name:tag" 
# here tag defines a specialized image within a group of images
# combination both should always generate unique identifier

# now we run the container using image name 
# -> "docker run -p 3000:3000 --name new_container new_image:latest"


