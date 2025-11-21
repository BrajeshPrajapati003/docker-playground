....DOCKER CMD Gyaan...


docker login
docker logout
docker build -t brajeshprajapati003/expressapp-learn .
docker run -it -p 3000:8000 expressapp
docker pull brajeshprajapati003/expressapp-learn:latest
docker push brajeshprajapati003/expressapp-learn
docker run -itd -P brajeshprajapati003/expressapp-learn


docker images
docker --help
docker ps -a
docker ps
docker rmi <imagename>
docker rm <containerid>
docker logs <containerid>
docker stop <contianerid>
