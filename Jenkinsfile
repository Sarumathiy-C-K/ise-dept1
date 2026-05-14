pipeline {
    agent any
    stages {
        stage("Clone Code") {
            steps {
                git url: "https://github.com/YOUR_USERNAME/jenkins-ci-cd1.git",
                    branch: "main"
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
