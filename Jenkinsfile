pipeline {
    agent any
    
    tools {
        nodejs 'node18'
    }
    
    stages {
        stage('Install dependencies') {
            steps {
                dir('test') {
                    sh 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
                sh 'node ./test/index.js'
            }
        }
    }
}
