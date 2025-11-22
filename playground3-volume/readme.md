**Docker volume**

* docker volume
* docker volume ls
* docker volume create my_data


**Windows PowerShell (use backtick ` for multiline)*** 
docker run -it `      
  >> --rm `
  >> -v my_data:/home ubuntu

**Linux & Mac (use backslash \ for multiline)**
* docker run -it \
  >> --rm \
  >> -v my_data:/home ubuntu


* docker volume inspect my_data
* docker volume rm my_data
* docker volume ls


DOCKER VOLUME COMMANDS SUMMARY:
  create      Create a volume
  inspect     Display detailed information on one or more volumes
  ls          List volumes
  prune       Remove unused local volumes
  rm          Remove one or more volumes

