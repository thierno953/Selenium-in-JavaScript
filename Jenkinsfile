pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                git branch: 'main', credentialsId: 'thierno953', url: 'https://github.com/thierno953/Selenium-in-JavaScript.git'
            }
        }
        stage('Test') {
            steps {
                sh 'npm install' 
                sh 'node test.js' 
            }
        }
    }
    post {
        always {
            sh 'pkill -f chrome'
        }
    }
}
