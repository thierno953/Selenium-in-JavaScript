pipeline {
    agent any 
    tools{
        nodejs 'node18'
    }
    environment {
        DISPLAY = ":99"
    }
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'Xvfb :99 -ac &'
                sh 'node index.js'
            }
        }
    }
    post {
        always {
            sh 'pkill -f chrome'
        }
    }
}
