pipeline {
    agent any 
  
    stages {
        stage('Install dependencies') {
            steps {
                dir('test') {
                    sh 'npm install'
                }
            }
        }
        
        stage('Test') {
            environment {
                DISPLAY = ":99"
            }
            steps {
                sh 'Xvfb :99 -ac &'
                sh 'node ./test/index.js'
            }
        }
    }
}
