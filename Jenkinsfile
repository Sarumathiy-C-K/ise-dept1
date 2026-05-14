pipeline {
    agent any
    stage("Clone Code") {
    steps {
        git branch: 'main',
            credentialsId: 'github-token',
            url: 'https://github.com/Sarumathiy-C-K/jenkins-ci-cd2.git'
    }
}

        stage("Build") {
            steps { echo "Building project..." }
        }
        stage("Test") {
            steps { echo "Running tests..." }
        }
        stage("Deploy") {
            steps { echo "Deploying to Vercel..." }
        }
    }
}
