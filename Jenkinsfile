pipeline {
    agent any

    tools {
        nodejs 'NodeJS' // Reference the Node.js tool configured in Jenkins
    }

    environment {
        DOCKER_IMAGE = 'imtiyaz18/online-exam-portal'
        DOCKER_TAG = 'latest'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out the code...'
                git branch: 'main', url: 'https://github.com/ezimzi/online-exam-portal.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }

        stage('Build Application') {
            steps {
                echo 'Building the application...'
                sh 'npm run build'
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker-cred', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh 'docker login -u $DOCKER_USER -p $DOCKER_PASS'
                    }
                    sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                    sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                }
            }
        }

        stage('Deploy Application') {
            steps {
                script {
                    sh "docker pull ${DOCKER_IMAGE}:${DOCKER_TAG}"
                    sh "docker stop online-exam-portal || true"
                    sh "docker rm online-exam-portal || true"
                    sh "docker run -d -p 8000:8000 --name online-exam-portal ${DOCKER_IMAGE}:${DOCKER_TAG}"
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution finished.'
        }
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
