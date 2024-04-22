pipeline {
    agent any 
  
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'node ./test/index.js'
            }
        }
    }
}
