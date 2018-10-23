# Introduction to node_hello_reversed

Hello app in Node Dockerize, Reversed, and in K8s!

## Before you begin
In order to run this hello app in you machine you need to have the following software installed:
* Install [Docker](https://docs.docker.com/install/#supported-platforms)
* Install a Hypervisor [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
* Istall [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
* Install [Minikube](https://github.com/kubernetes/minikube/releases)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Make sure you kubernetes context is minikube
```sh
kubectl config current-context
```

Add execution permissions to the deploy script
```sh
chmod +x deploy.sh
```
Run the `deploy.sh` script
```sh
./deploy.sh
```

Check that the pods are ready
```sh
kubectl get pods
```

Test the Hello World app
```sh
curl http://192.168.99.100:30300
```

Test the Hello Reversed app!
```sh
curl http://192.168.99.100:30400
```
