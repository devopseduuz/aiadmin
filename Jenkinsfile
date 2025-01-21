pipeline {
    agent any
    stages {
        stage('ai.edu.uz-front') {
            steps {
                sh 'ansible-playbook /var/lib/jenkins/ansible/ai_edu-front.yml -l prod_10_42'
            }
        }
    }
}
