pipeline {
    agent any 
    tools{
        nodejs 'node18'
    }
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'node index.js'
            }
        }
    }
}
